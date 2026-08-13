import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  serverTimestamp,
  where,
  type DocumentData,
} from "firebase/firestore";
import { unstable_noStore as noStore } from "next/cache";
import { db } from "./firebase";
import type {
  AboutPageContent,
  AccreditationPageContent,
  BenefitsPageContent,
  BlogPost,
  ClienteleItem,
  ContactPageContent,
  CsrInitiative,
  CsrPageContent,
  GalleryItem,
  GalleryPageContent,
  BlogPageContent,
  ClientelePageContent,
  HeroSlide,
  HomepageContent,
  PrivacyPageContent,
  ResellersPageContent,
  Service,
  SiteSettings,
} from "./cms-types";

export type {
  AboutPageContent,
  AccreditationPageContent,
  BenefitsPageContent,
  BlogPost,
  BlogPageContent,
  ClienteleItem,
  ClientelePageContent,
  ContactPageContent,
  CsrInitiative,
  CsrPageContent,
  GalleryItem,
  GalleryPageContent,
  HeroSlide,
  HomepageContent,
  PrivacyPageContent,
  ResellersPageContent,
  Service,
  SiteSettings,
};

async function getAll<T>(col: string): Promise<T[]> {
  try {
    noStore();
    const snap = await getDocs(collection(db, col));
    return snap.docs.map((d) => ({ id: d.id, ...d.data() } as T));
  } catch {
    return [];
  }
}

async function getOrdered<T extends DocumentData>(
  col: string,
  field = "order",
): Promise<T[]> {
  try {
    noStore();
    const q = query(collection(db, col), orderBy(field));
    const snap = await getDocs(q);
    return snap.docs.map((d) => ({ id: d.id, ...d.data() } as unknown as T));
  } catch {
    const items = await getAll<T & { order?: number }>(col);
    return items.sort((a, b) => (a.order ?? 999) - (b.order ?? 999)) as T[];
  }
}

const SINGLETON_ID = "default";

async function getSingleton<T>(col: string): Promise<T | null> {
  try {
    noStore();
    const named = await getDoc(doc(db, col, SINGLETON_ID));
    if (named.exists()) {
      return { id: named.id, ...named.data() } as T;
    }
    const snap = await getDocs(collection(db, col));
    if (snap.empty) return null;
    const d = snap.docs[0];
    return { id: d.id, ...d.data() } as T;
  } catch {
    return null;
  }
}

export const getSiteSettings = () => getSingleton<SiteSettings>("siteSettings");
export const getHomepage = () => getSingleton<HomepageContent>("homepage");
export const getAboutPage = () => getSingleton<AboutPageContent>("aboutPage");
export const getAccreditationPage = () =>
  getSingleton<AccreditationPageContent>("accreditationPage");
export const getCsrPage = () => getSingleton<CsrPageContent>("csrPage");
export const getBenefitsPage = () =>
  getSingleton<BenefitsPageContent>("benefitsPage");
export const getResellersPage = () =>
  getSingleton<ResellersPageContent>("resellersPage");
export const getContactPage = () =>
  getSingleton<ContactPageContent>("contactPage");
export const getPrivacyPage = () =>
  getSingleton<PrivacyPageContent>("privacyPage");
export const getGalleryPage = () =>
  getSingleton<GalleryPageContent>("galleryPage");
export const getBlogPage = () => getSingleton<BlogPageContent>("blogPage");
export const getClientelePage = () =>
  getSingleton<ClientelePageContent>("clientelePage");

export async function getHeroSlides(): Promise<HeroSlide[]> {
  const slides = await getOrdered<HeroSlide>("heroSlides");
  return slides.filter((s) => s.active !== false);
}

export async function getCsrInitiatives(): Promise<CsrInitiative[]> {
  const items = await getOrdered<CsrInitiative>("csrInitiatives");
  return items.filter((i) => i.active !== false);
}

export async function getServices(): Promise<Service[]> {
  const items = await getOrdered<Service>("services");
  return items.filter((s) => s.published !== false);
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  try {
    const q = query(
      collection(db, "services"),
      where("slug", "==", slug),
      limit(1),
    );
    const snap = await getDocs(q);
    if (snap.empty) return null;
    const d = snap.docs[0];
    const service = { id: d.id, ...d.data() } as Service;
    if (service.published === false) return null;
    return service;
  } catch {
    return null;
  }
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const items = await getOrdered<BlogPost>("blogPosts");
  return items.filter((p) => p.published !== false);
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const q = query(
      collection(db, "blogPosts"),
      where("slug", "==", slug),
      limit(1),
    );
    const snap = await getDocs(q);
    if (snap.empty) return null;
    const d = snap.docs[0];
    const post = { id: d.id, ...d.data() } as BlogPost;
    if (post.published === false) return null;
    return post;
  } catch {
    return null;
  }
}

export async function getGalleryItems(): Promise<GalleryItem[]> {
  const items = await getOrdered<GalleryItem>("galleryItems");
  return items.filter((i) => i.active !== false);
}

export async function getClientele(): Promise<ClienteleItem[]> {
  const items = await getOrdered<ClienteleItem>("clientele");
  return items.filter((i) => i.active !== false);
}

export async function submitContactMessage(data: {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  source?: string;
}): Promise<string> {
  const ref = await addDoc(collection(db, "contactMessages"), {
    ...data,
    read: false,
    createdAt: serverTimestamp(),
  });
  return ref.id;
}

export async function submitResellerApplication(data: {
  name: string;
  email: string;
  company?: string;
  country: string;
  phone?: string;
  message?: string;
}): Promise<string> {
  const ref = await addDoc(collection(db, "resellerApplications"), {
    ...data,
    read: false,
    createdAt: serverTimestamp(),
  });
  return ref.id;
}

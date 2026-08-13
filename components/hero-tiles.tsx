"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/** Interactive hover grid — adapted from adullam, tinted with FMS brand yellow. */
export default function HeroTiles() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tiles, setTiles] = useState<{ id: number; lit: boolean }[]>([]);
  const [cols, setCols] = useState(0);
  const TILE_SIZE = 100;

  const buildGrid = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    const c = Math.ceil(el.offsetWidth / TILE_SIZE);
    const r = Math.ceil(el.offsetHeight / TILE_SIZE);
    setCols(c);
    setTiles(
      Array.from({ length: c * r }, (_, i) => ({ id: i, lit: false })),
    );
  }, []);

  useEffect(() => {
    buildGrid();
    const ro = new ResizeObserver(buildGrid);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [buildGrid]);

  const lightTile = (id: number) => {
    setTiles((prev) =>
      prev.map((t) => (t.id === id ? { ...t, lit: true } : t)),
    );
    setTimeout(() => {
      setTiles((prev) =>
        prev.map((t) => (t.id === id ? { ...t, lit: false } : t)),
      );
    }, 600);
  };

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ zIndex: 2 }}
      aria-hidden="true"
    >
      <div
        className="h-full w-full"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, ${TILE_SIZE}px)`,
          gridAutoRows: `${TILE_SIZE}px`,
        }}
      >
        {tiles.map((tile) => (
          <div
            key={tile.id}
            onMouseEnter={() => lightTile(tile.id)}
            className="pointer-events-auto cursor-default border border-white/5 transition-colors duration-300"
            style={{
              backgroundColor: tile.lit
                ? "rgba(255, 210, 0, 0.22)"
                : "transparent",
            }}
          />
        ))}
      </div>
    </div>
  );
}

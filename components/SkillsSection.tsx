"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { type ReactNode, useRef, useState, useCallback } from "react";

const CATEGORY_ICONS: Record<string, ReactNode> = {
  frontend: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  mobile: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  ),
  state: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
  ui: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
  testing: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  ),
  tools: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
};

const CATEGORY_KEYS = ["frontend", "mobile", "state", "ui", "testing", "tools"] as const;

function SkillCard({
  categoryKey,
  index,
  gridMousePos,
  isGridHovered,
}: {
  categoryKey: (typeof CATEGORY_KEYS)[number];
  index: number;
  gridMousePos: { x: number; y: number };
  isGridHovered: boolean;
}) {
  const t = useTranslations("skills");
  const cardRef = useRef<HTMLDivElement>(null);
  const skills: string[] = t.raw(`categories.${categoryKey}.items`);

  // Calculate mouse position relative to this card
  let relX = 0;
  let relY = 0;
  if (cardRef.current && isGridHovered) {
    const rect = cardRef.current.getBoundingClientRect();
    const gridRect = cardRef.current.parentElement?.getBoundingClientRect();
    if (gridRect) {
      relX = gridMousePos.x - (rect.left - gridRect.left);
      relY = gridMousePos.y - (rect.top - gridRect.top);
    }
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative rounded-2xl border border-card-border bg-card-bg p-6"
    >
      {/* Border glow overlay — follows the mouse */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300"
        style={{
          opacity: isGridHovered ? 1 : 0,
          background: `radial-gradient(300px circle at ${relX}px ${relY}px, rgba(99, 102, 241, 0.55), transparent 50%)`,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: "1px",
        }}
      />

      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent-light">
          {CATEGORY_ICONS[categoryKey]}
        </div>
        <h3 className="text-lg font-semibold tracking-tight">
          {t(`categories.${categoryKey}.title`)}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, j) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.3,
              delay: index * 0.08 + j * 0.03,
            }}
            className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-sm text-accent-light transition-colors hover:border-accent/40 hover:bg-accent/20"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const t = useTranslations("skills");
  const gridRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!gridRef.current) return;
      const rect = gridRef.current.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    },
    []
  );

  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-32">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          id="skills-heading"
          className="mb-16 text-4xl font-bold tracking-tight"
        >
          {t("sectionTitle")}
        </motion.h2>

        <div
          ref={gridRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {CATEGORY_KEYS.map((key, i) => (
            <SkillCard
              key={key}
              categoryKey={key}
              index={i}
              gridMousePos={mousePos}
              isGridHovered={isHovering}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

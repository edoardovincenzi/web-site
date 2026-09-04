"use client";

import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "motion/react";
import { type ReactNode, useCallback, useEffect, useRef, useState } from "react";

const CATEGORY_ICONS: Record<string, ReactNode> = {
  frontend: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  design: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="M2 2l7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  ),
  ai: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
      <circle cx="12" cy="12" r="3" />
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

const CATEGORY_KEYS = ["frontend", "design", "ai", "mobile", "state", "ui", "testing", "tools"] as const;

function SkillCard({ categoryKey }: { categoryKey: (typeof CATEGORY_KEYS)[number] }) {
  const t = useTranslations("skills");
  const skills: string[] = t.raw(`categories.${categoryKey}.items`);

  return (
    <div
      data-glow-card
      className="relative h-full rounded-2xl border border-card-border bg-card-bg p-6"
    >
      {/* Border glow overlay — follows the mouse via --glow-x / --glow-y, set on
          mousemove by the row so every card lights up relative to the pointer. */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(300px circle at var(--glow-x, -1000px) var(--glow-y, -1000px), rgba(99, 102, 241, 0.55), transparent 50%)",
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
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-sm text-accent-light transition-colors hover:border-accent/40 hover:bg-accent/20"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function ScrollButton({
  direction,
  label,
  disabled,
  onClick,
}: {
  direction: "left" | "right";
  label: string;
  disabled: boolean;
  onClick: () => void;
}) {
  const arrow = direction === "left" ? "15 18 9 12 15 6" : "9 18 15 12 9 6";

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-card-border text-muted transition-colors hover:border-accent hover:text-foreground disabled:opacity-30 disabled:hover:border-card-border disabled:hover:text-muted"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points={arrow} />
      </svg>
    </button>
  );
}

export default function SkillsSection() {
  const t = useTranslations("skills");
  const reduceMotion = useReducedMotion();
  const rowRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateEdges = useCallback(() => {
    const el = rowRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    updateEdges();
    window.addEventListener("resize", updateEdges);
    return () => window.removeEventListener("resize", updateEdges);
  }, [updateEdges]);

  function positionGlow(e: React.MouseEvent<HTMLUListElement>) {
    const cards =
      e.currentTarget.querySelectorAll<HTMLElement>("[data-glow-card]");
    for (const card of cards) {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--glow-x", `${e.clientX - rect.left}px`);
      card.style.setProperty("--glow-y", `${e.clientY - rect.top}px`);
    }
  }

  function scrollByPage(direction: 1 | -1) {
    const el = rowRef.current;
    if (!el) return;
    el.scrollBy({
      left: direction * el.clientWidth * 0.8,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }

  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-8">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: reduceMotion ? 0 : 0.6 }}
          className="mb-10 flex items-center justify-between gap-4"
        >
          <h2 id="skills-heading" className="text-4xl font-bold tracking-tight">
            {t("sectionTitle")}
          </h2>

          {/* Prev/Next controls — keep scrolling discoverable for pointer users */}
          <div className="flex items-center gap-2">
            <ScrollButton
              direction="left"
              label={t("scrollLeft")}
              disabled={atStart}
              onClick={() => scrollByPage(-1)}
            />
            <ScrollButton
              direction="right"
              label={t("scrollRight")}
              disabled={atEnd}
              onClick={() => scrollByPage(1)}
            />
          </div>
        </motion.div>

        <ul
          ref={rowRef}
          role="list"
          aria-label={t("sectionTitle")}
          tabIndex={0}
          onMouseMove={positionGlow}
          onScroll={updateEdges}
          className="group flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          {CATEGORY_KEYS.map((key) => (
            <li key={key} className="w-72 shrink-0 snap-start sm:w-80">
              <SkillCard categoryKey={key} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

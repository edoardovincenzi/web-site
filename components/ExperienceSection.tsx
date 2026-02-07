"use client";

import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "motion/react";
import { useLayoutEffect, useRef, useState } from "react";
import ExperienceCard from "./ExperienceCard";
import CvModal from "./CvModal";

export default function ExperienceSection() {
  const t = useTranslations("experience");
  const [isCvOpen, setIsCvOpen] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!cardsRef.current) return;
    const stickyEls =
      cardsRef.current.querySelectorAll<HTMLElement>(":scope > .sticky");
    let max = 0;
    stickyEls.forEach((el) => {
      max = Math.max(max, el.offsetHeight);
    });
    if (max > 0) {
      cardsRef.current.style.setProperty("--card-stack-height", `${max}px`);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.8", "end 0.7"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const items = [0, 1, 2, 3, 4, 5, 6] as const;

  return (
    <section id="experience" aria-labelledby="experience-heading" className="pb-16 pt-32">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-center gap-4"
        >
          <h2
            id="experience-heading"
            className="text-4xl font-bold tracking-tight"
          >
            {t("sectionTitle")}
          </h2>
          <button
            onClick={() => setIsCvOpen(true)}
            className="inline-flex items-center gap-2 rounded-lg border border-card-border bg-card-bg px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-foreground"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            {t("viewCv")}
          </button>
        </motion.div>

        <div ref={timelineRef} className="relative">
          {/* Timeline track (static background) */}
          <div className="absolute left-1.5 top-0 hidden h-full w-px bg-card-border sm:block" />
          {/* Animated fill */}
          <motion.div
            className="absolute left-1.5 top-0 hidden h-full w-px origin-top bg-accent sm:block"
            style={{ scaleY: lineScale }}
          />

          <div
            ref={cardsRef}
            className="sm:pl-12"
          >
            {items.map((i) => (
              <ExperienceCard
                key={i}
                index={i}
                total={items.length}
                period={t(`items.${i}.period`)}
                role={t(`items.${i}.role`)}
                company={t(`items.${i}.company`)}
                description={t(`items.${i}.description`)}
                tags={t.raw(`items.${i}.tags`)}
              />
            ))}
          </div>
        </div>
      </div>

      <CvModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />
    </section>
  );
}

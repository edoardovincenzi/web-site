"use client";

import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "motion/react";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import ExperienceCard from "./ExperienceCard";
import CvModal from "./CvModal";

export default function ExperienceSection() {
  const t = useTranslations("experience");
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [progressVisible, setProgressVisible] = useState(false);
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

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      setProgressVisible(v > 0.01 && v < 0.99);
      setCurrentStep(
        Math.min(items.length, Math.max(1, Math.ceil(v * items.length)))
      );
    });
    return unsubscribe;
  }, [scrollYProgress, items.length]);

  const scrollToCard = useCallback((index: number) => {
    if (!cardsRef.current) return;
    const cards = cardsRef.current.querySelectorAll<HTMLElement>(":scope > .sticky");
    const target = cards[index];
    if (!target) return;
    // scrollIntoView doesn't work reliably on sticky elements — it reads
    // the visual (stuck) position instead of the layout position.
    // Walk the offsetParent chain to get the true document-level offset.
    let top = 0;
    let el: HTMLElement | null = target;
    while (el) {
      top += el.offsetTop;
      el = el.offsetParent as HTMLElement | null;
    }
    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  return (
    <section id="experience" aria-labelledby="experience-heading" className="pb-16 pt-32">
      {/* Mobile floating progress indicator */}
      <div
        className={`fixed bottom-6 left-1/2 z-50 -translate-x-1/2 transition-all duration-300 sm:hidden ${
          progressVisible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <nav
          aria-label={t("sectionTitle")}
          className="flex items-center gap-1.5 rounded-full border border-card-border bg-card-bg/90 py-2 pl-2 pr-3 shadow-lg shadow-black/40 backdrop-blur-md"
        >
          {/* Previous arrow */}
          <button
            aria-label="Previous"
            disabled={currentStep <= 1}
            onClick={() => scrollToCard(currentStep - 2)}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-muted transition-colors active:bg-accent/20 disabled:opacity-30"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Dots — tappable */}
          <div className="flex items-center gap-0.5">
            {items.map((i) => (
              <button
                key={i}
                onClick={() => scrollToCard(i)}
                aria-label={`${i + 1} / ${items.length}`}
                aria-current={i + 1 === currentStep ? "step" : undefined}
                className="flex items-center justify-center p-1"
              >
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    i + 1 < currentStep
                      ? "h-1.5 w-1.5 bg-accent"
                      : i + 1 === currentStep
                        ? "h-2.5 w-2.5 bg-accent shadow-[0_0_6px_var(--accent)]"
                        : "h-1.5 w-1.5 bg-card-border"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Counter */}
          <span className="text-xs font-medium tabular-nums text-muted" aria-hidden="true">
            {currentStep}
            <span className="text-card-border">/</span>
            {items.length}
          </span>

          {/* Next arrow */}
          <button
            aria-label="Next"
            disabled={currentStep >= items.length}
            onClick={() => scrollToCard(currentStep)}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-muted transition-colors active:bg-accent/20 disabled:opacity-30"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </nav>
      </div>

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

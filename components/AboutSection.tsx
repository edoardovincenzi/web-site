"use client";

import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

function AnimatedParagraph({
  children,
  index,
}: {
  children: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.4"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [20, 0]);

  return (
    <motion.p
      ref={ref}
      style={{ opacity, y }}
      className="relative text-lg leading-relaxed text-foreground"
    >
      {children}
    </motion.p>
  );
}

export default function AboutSection() {
  const t = useTranslations("about");
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.8"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="about" ref={sectionRef} aria-labelledby="about-heading" className="relative py-32">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          id="about-heading"
          className="mb-12 text-4xl font-bold tracking-tight"
        >
          {t("sectionTitle")}
        </motion.h2>

        <div className="relative pl-8">
          {/* Scroll-driven accent line */}
          <div className="absolute left-0 top-0 h-full w-px bg-card-border">
            <motion.div
              className="w-full origin-top bg-accent"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-8">
            {[0, 1, 2].map((i) => (
              <AnimatedParagraph key={i} index={i}>
                {t(`p${i + 1}`)}
              </AnimatedParagraph>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

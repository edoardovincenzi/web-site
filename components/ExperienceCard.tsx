"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface ExperienceCardProps {
  index: number;
  total: number;
  period: string;
  role: string;
  company: string;
  description: string;
  tags: string[];
}

export default function ExperienceCard({
  index,
  total,
  period,
  role,
  company,
  description,
  tags,
}: ExperienceCardProps) {
  const isLast = index === total - 1;
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 0.85", "start 0.5"],
  });
  const dotScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const dotOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <>
      <div
        ref={cardRef}
        className="sticky flex flex-col after:pointer-events-none after:absolute after:inset-x-0 after:top-full after:h-80 after:bg-background after:content-['']"
        style={{
          top: "6rem",
          zIndex: index,
          minHeight: "var(--card-stack-height)",
        }}
      >
        {/* Transparent spacer — lets previous card peek through */}
        {index > 0 && (
          <div aria-hidden="true" style={{ height: `${index * 30}px` }} />
        )}

        {/* Animated timeline dot */}
        <motion.div
          className="absolute -left-12 hidden sm:block"
          style={{
            top: `${index * 30 + 16}px`,
            scale: dotScale,
            opacity: dotOpacity,
          }}
        >
          <div className="h-3 w-3 rounded-full border-2 border-accent bg-background" />
          <motion.div
            className="absolute inset-0 rounded-full border border-accent"
            initial={{ scale: 1, opacity: 0.6 }}
            animate={{ scale: 2.5, opacity: 0 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        </motion.div>

        {/* Card content */}
        <div className="group rounded-2xl border border-card-border bg-card-bg p-8 shadow-xl shadow-black/30 transition-colors duration-300 hover:border-accent/30">
          <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
            <span className="text-sm font-medium text-accent-light">{period}</span>
            <span aria-hidden="true" className="hidden text-card-border sm:block">|</span>
            <span className="text-sm text-muted">{company}</span>
          </div>
          <h3 className="mb-3 text-xl font-semibold transition-colors duration-300 group-hover:text-accent-light">
            {role}
          </h3>
          <p className="text-base leading-relaxed text-muted">{description}</p>
          {tags.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium text-accent-light transition-colors duration-200 hover:border-accent/40 hover:bg-accent/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Bottom filler — covers empty space so previous cards don't bleed through */}
        <div className="grow bg-background" />
      </div>

      <div className={isLast ? "h-[20vh]" : "h-[8vh]"} />
    </>
  );
}

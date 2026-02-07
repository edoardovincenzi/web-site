"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import dynamic from "next/dynamic";
import { useState } from "react";

function FloatingParticlesClient() {
  const [particles] = useState(() =>
    Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * -20,
    }))
  );

  return (
    <div className="pointer-events-none absolute inset-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-accent/20"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

const FloatingParticles = dynamic(
  () => Promise.resolve(FloatingParticlesClient),
  { ssr: false }
);

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Animated gradient blobs */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-accent/15 blur-[120px]"
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[120px]"
          animate={{
            x: [0, -40, 30, 0],
            y: [0, 30, -50, 0],
            scale: [1, 0.85, 1.15, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/8 blur-[100px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Floating particles */}
      <FloatingParticles />

      {/* Subtle grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-lg text-muted"
        >
          {t("subtitle")}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-6 text-5xl font-bold leading-tight tracking-tight sm:text-7xl"
        >
          {t.rich("title", { br: () => <br className="hidden sm:block" /> })}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-10 max-w-xl text-lg leading-relaxed text-muted"
        >
          {t("tagline")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap gap-4"
        >
          {/* Primary CTA with glow */}
          <a href="#about" className="group relative inline-block">
            <span className="absolute -inset-1 rounded-full bg-accent/15 blur-lg transition-all duration-500 group-hover:bg-accent/30 group-hover:blur-xl" />
            <span className="relative inline-flex items-center overflow-hidden rounded-full bg-accent/80 px-7 py-3.5 font-medium text-white transition-all duration-300 group-hover:scale-[1.03] group-hover:shadow-[0_0_30px_rgba(99,102,241,0.25)]">
              <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
              <span className="relative">{t("cta")}</span>
            </span>
          </a>

          {/* Secondary CTA – outline */}
          <a
            href="#contact"
            className="group relative inline-flex items-center overflow-hidden rounded-full border border-accent/60 px-7 py-3.5 font-medium text-white transition-all duration-300 hover:border-accent/80 hover:bg-accent/10 hover:scale-[1.03]"
          >
            {t("ctaContact")}
          </a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-background to-transparent" />
    </section>
  );
}

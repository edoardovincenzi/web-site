"use client";

import { useRef, useCallback, useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/edoardovincenzi",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/edoardo-vincenzi",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  const t = useTranslations("contact");
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = cardRef.current?.getBoundingClientRect();
      if (!rect) return;
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    },
    []
  );

  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative z-10 pb-32 pt-16">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="relative overflow-hidden rounded-2xl border border-card-border bg-card-bg p-12 text-center"
        >
          {/* Ambient glow */}
          <motion.div
            className="pointer-events-none absolute inset-0"
            animate={{
              background: [
                "radial-gradient(circle at 30% 20%, rgba(99,102,241,0.12), transparent 50%)",
                "radial-gradient(circle at 70% 80%, rgba(99,102,241,0.12), transparent 50%)",
                "radial-gradient(circle at 50% 30%, rgba(99,102,241,0.12), transparent 50%)",
                "radial-gradient(circle at 30% 20%, rgba(99,102,241,0.12), transparent 50%)",
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            style={{ opacity: isHovering ? 0 : 1 }}
          />

          {/* Mouse-follow glow */}
          <div
            className="pointer-events-none absolute inset-0 transition-opacity duration-300"
            style={{
              opacity: isHovering ? 1 : 0,
              background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(99,102,241,0.12), transparent 40%)`,
            }}
          />

          <div className="relative z-10">
            <motion.h2
              id="contact-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              {t("title")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mx-auto mb-8 max-w-md text-lg leading-relaxed text-muted"
            >
              {t("description")}
            </motion.p>

            {/* CTA with glow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a href="mailto:edoardo.vincenzi95@gmail.com" className="group relative inline-block">
                <span className="absolute -inset-1 rounded-full bg-accent/30 blur-xl transition-all duration-500 group-hover:bg-accent/50 group-hover:blur-2xl animate-[glow-pulse_3s_ease-in-out_infinite]" />
                <span className="relative inline-flex items-center overflow-hidden rounded-full bg-accent px-8 py-3.5 font-medium text-white transition-all duration-300 group-hover:scale-[1.03] group-hover:shadow-[0_0_40px_rgba(99,102,241,0.4)]">
                  <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
                  <span className="relative">{t("cta")}</span>
                </span>
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-10 flex items-center justify-center gap-4"
            >
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  aria-label={link.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-card-border text-muted transition-all duration-300 hover:border-accent/50 hover:text-accent hover:shadow-[0_0_15px_rgba(99,102,241,0.15)]"
                >
                  {link.icon}
                </a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";

interface EducationItem {
  period?: string;
  role: string;
  company: string;
  description: string;
}

function EducationCard({ item }: { item: EducationItem }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-card-border bg-card-bg p-6 transition-colors duration-300 hover:border-accent/30">
      {item.period && (
        <span className="mb-3 w-fit rounded-full border border-accent/20 bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent-light">
          {item.period}
        </span>
      )}
      <span className="text-xs uppercase tracking-wide text-muted">{item.company}</span>
      <h4 className="mt-1 mb-2 text-base font-semibold">{item.role}</h4>
      <p className="text-sm leading-relaxed text-muted">{item.description}</p>
    </div>
  );
}

export default function EducationSection() {
  const t = useTranslations("education");
  const groups = [
    { title: t("groupEducation"), items: t.raw("formal") as EducationItem[] },
    { title: t("groupCourses"), items: t.raw("courses") as EducationItem[] },
  ];

  return (
    <section id="education" aria-labelledby="education-heading" className="py-16">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 id="education-heading" className="text-4xl font-bold tracking-tight">
            {t("sectionTitle")}
          </h2>
        </motion.div>

        {groups.map((group) => (
          <div key={group.title} className="mb-10 last:mb-0">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted">
              {group.title}
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((item) => (
                <EducationCard key={item.role} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

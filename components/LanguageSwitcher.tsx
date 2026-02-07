"use client";

import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

const LANGUAGES = [
  { code: "it", label: "IT" },
  { code: "en", label: "EN" },
] as const;

function setLocaleCookie(code: string) {
  document.cookie = `locale=${code};path=/;max-age=31536000`;
}

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();

  function switchTo(code: string) {
    if (code === locale) return;
    setLocaleCookie(code);
    router.refresh();
  }

  return (
    <div role="group" aria-label="Language" className="flex items-center rounded-full border border-card-border bg-card-bg p-0.5">
      {LANGUAGES.map(({ code, label }) => (
        <button
          type="button"
          key={code}
          onClick={() => switchTo(code)}
          aria-current={locale === code ? "true" : undefined}
          className={`relative rounded-full px-3 py-1 text-xs font-semibold tracking-wide transition-all duration-200 ${
            locale === code
              ? "bg-indigo-700 text-white shadow-sm"
              : "text-foreground/80 hover:text-foreground"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

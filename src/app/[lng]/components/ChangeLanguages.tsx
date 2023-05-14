'use client';

import { languages } from '@/app/i18n/settings';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

const ChangeLanguages = ({ lng }: any) => {
  const pathname = useSelectedLayoutSegment();
  return (
    <div className="text-base">
      {languages
        .filter((language) => lng !== language)
        .map((language) => {
          return (
            <span key={language} className="px-2">
              <Link href={`/${language}/${pathname ?? ''}`}>
                {language.toUpperCase()}
              </Link>
            </span>
          );
        })}
    </div>
  );
};

export default ChangeLanguages;

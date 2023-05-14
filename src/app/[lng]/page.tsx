'use client';

import { useTranslation } from '../i18n/client';
import Cards from './components/Cards';

export default function Page({ params: { lng } }: any) {
  const { t }: any = useTranslation(lng, 'home');
  return (
    <div className="app-container h-[calc(100vh-60px)]">
      <h1 className="app-header">{t('title', 'Edoardo Vincenzi')}</h1>
      <Cards t={t} lng={lng} />
    </div>
  );
}

'use client';

import { useTranslation } from '../i18n/client';
import Menu from './components/Menu';

export default async function Page({ params: { lng } }: any) {
  const { t }: any = await useTranslation(lng, 'home');
  return (
    <div className="app-container h-[calc(100vh-60px)]">
      <h1 className="app-header">{t('title', 'Edoardo Vincenzi')}</h1>
      <Menu t={t} lng={lng} />
    </div>
  );
}

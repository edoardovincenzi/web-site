'use client';

import { useTranslation } from '../i18n/client';
import Menu from './components/Menu';

export default function Page({ params: { lng } }: any) {
  const { t }: any = useTranslation(lng, 'home');
  return (
    <div className="app-container h-[calc(100vh-60px)]">
      <h1 className="app-header">{t('title', 'Edoardo Vincenzi')}</h1>
      <Menu t={t} lng={lng} />
    </div>
  );
}

import Link from 'next/link';
import { useTranslation } from '../../i18n';

export default async function Page({ params: { lng } }: any) {
  const { t }: any = await useTranslation(lng, 'second-page');
  // const { t }: any = useTranslation(lng, 'second-page');

  return (
    <>
      <h1>{t('title', 'Test')}</h1>
      <Link href={`/${lng}/second-page`}>{t('to-second-page')}</Link>
    </>
  );
}

//PER CLIENT COMPONENT

//Mettere "use client" in alto al componente e
//mettere const { t }: any = useTranslation(lng, 'second-page');
//importando import { useTranslation } from '../i18n/client';

//PER SERVER SIDE RENDERING COMPONENT

// const { t }: any = await useTranslation(lng, 'second-page');
// import { useTranslation } from '../i18n';

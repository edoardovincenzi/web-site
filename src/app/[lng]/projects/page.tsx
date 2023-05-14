import Link from 'next/link';
import { Suspense } from 'react';
import { MdArrowBack } from 'react-icons/md';
import { useTranslation } from '../../i18n';
// import cvPdf from '../../../asset/CV_VincenziEdoardo.pdf';

export default async function Page({ params: { lng } }: any) {
  const { t }: any = await useTranslation(lng, 'second-page');
  // const { t }: any = useTranslation(lng, 'second-page');

  return (
    <div className="app-container container mx-auto overflow-y-auto">
      <div className="app-header">
        <Link href={`/${lng}/`} replace className=" absolute left-0">
          <MdArrowBack className="icon-card-home" />
        </Link>
        <h1 className="text-center">{t('tesst', 'Resume')}</h1>
      </div>
      <p className="text-base">
        Nel curriculum sono presenti tutti i miei contatti e le mie esperienze.
        Inoltre ci sono i link sia in fondo alla pagina che nel CV del mio
        github per vedere alcuni progetti, di linkledin e la mia mail.
      </p>
      <div className="flex max-md:flex-col w-full h-[80%] xl:h-[70%] gap-3">
        <div className="bg-[#f2f2f2] relative w-full mt-3 h-0 pt-[141.4286%] pb-0 shadow-[0 2px 8px 0 rgba(63,69,81,0.16)] overflow-hidden rounded-lg will-change-auto">
          <iframe
            id="cv_pdf"
            loading="lazy"
            className="absolute w-full h-full top-0 left-0 p-0 m-0 border-none"
            src="https://www.canva.com/design/DAFL1aIpLqc/view?embed"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

//PER CLIENT COMPONENT

//Mettere "use client" in alto al componente e
//mettere const { t }: any = useTranslation(lng, 'second-page');
//importando import { useTranslation } from '../i18n/client';

//PER SERVER SIDE RENDERING COMPONENT

// const { t }: any = await useTranslation(lng, 'second-page');
// import { useTranslation } from '../i18n';

import Link from 'next/link';
import { MdArrowBack } from 'react-icons/md';
import { useTranslation } from '../../i18n';
import ViewerCV from '../components/ViewerCV';

export default async function Page({ params: { lng } }: any) {
  const { t }: any = await useTranslation(lng, 'projects');

  return (
    <div className="app-container container mx-auto overflow-y-auto">
      <div className="app-header">
        <Link href={`/${lng}/`} replace className=" absolute left-0">
          <MdArrowBack className="icon-card-home" />
        </Link>
        <h1 className="text-center">{t('title', 'Resume')}</h1>
      </div>
      <p className="text-base">
        {t('description_page', defaultDescriptionPage)}
      </p>
      <ViewerCV />
    </div>
  );
}

const defaultDescriptionPage = `All my contact details and professional experiences are listed in my resume. Moreover, it can be easily downloaded by clicking here: download.`;

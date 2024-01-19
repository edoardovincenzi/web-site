import { SHARE_DOWNLOAD_CV } from '@/costant';
import Link from 'next/link';
import { MdArrowBack } from 'react-icons/md';
import { useTranslation } from '../../i18n';
import ViewerCV from '../components/ViewerCV';

export default async function Page({ params: { lng } }: any) {
  const { t }: any = await useTranslation(lng, 'resume');
  const { t: tCV }: any = await useTranslation(lng, 'cv');

  return (
    <div className="app-container container mx-auto overflow-y-auto">
      <div className="app-header py-6">
        <Link href={`/${lng}/`} replace className=" absolute left-0">
          <MdArrowBack className="icon-card-home" />
        </Link>
        <h1 className="text-center">{t('title', 'Resume')}</h1>
      </div>
      <div className="flex items-center justify-start w-full flex-wrap gap-x-2">
        <p className="text-base md:text-lg lg:text-xl">
          {t('description_page', defaultDescriptionPage)}
        </p>
        <Link href={t('link_download', SHARE_DOWNLOAD_CV)} target="_blank">
          <p className="text-base md:text-lg lg:text-xl underline cursor-pointer">
            DOWNLOAD.
          </p>
        </Link>
      </div>
      <ViewerCV tCV={tCV} />
    </div>
  );
}

const defaultDescriptionPage = `All my contact details and professional experiences are listed in my resume. Moreover, it can be easily downloaded by clicking here: `;

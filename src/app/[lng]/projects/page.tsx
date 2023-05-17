'use client';

import Link from 'next/link';
import { MdArrowBack } from 'react-icons/md';
import { useTranslation } from '../../i18n/client';
import CardProject from '../components/cardproject/CardProject';
import { projectsList } from './dataProjects';

export default function Page({ params: { lng } }: any) {
  const { t }: any = useTranslation(lng, 'projects');

  return (
    <div className="app-container container mx-auto overflow-y-auto">
      <div className="app-header py-6">
        <Link href={`/${lng}/`} replace className=" absolute left-0">
          <MdArrowBack className="icon-card-home" />
        </Link>
        <h1 className="text-center">{t('title', 'Projects')}</h1>
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {projectsList?.map((project, index) => (
          <CardProject
            key={index}
            t={t}
            title={project?.title}
            description={project.description}
            libraries={project?.libraries}
            links={project?.links}
          />
        ))}
      </div>
    </div>
  );
}

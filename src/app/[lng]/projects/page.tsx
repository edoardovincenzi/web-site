import Link from 'next/link';
import { MdArrowBack } from 'react-icons/md';
import { useTranslation } from '../../i18n';
import CardProject from '../components/CardProject';
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiRedux } from 'react-icons/si';
import { CardProjectprops } from '@/types';

export default async function Page({ params: { lng } }: any) {
  const { t }: any = await useTranslation(lng, 'projects');

  return (
    <div className="app-container container mx-auto overflow-y-auto">
      <div className="app-header py-6">
        <Link href={`/${lng}/`} replace className=" absolute left-0">
          <MdArrowBack className="icon-card-home" />
        </Link>
        <h1 className="text-center">{t('title', 'Projects')}</h1>
      </div>
      <div className="flex flex-wrap gap-4">
        {projectsList?.map((project, index) => (
          <CardProject
            key={index}
            title={project?.title}
            libraries={project?.libraries}
            links={project?.links}
          />
        ))}
      </div>
    </div>
  );
}

const projectsList: CardProjectprops[] = [
  {
    title: 'User management',
    libraries: [
      {
        icon: <FaReact className="text-4xl text-cyan-500" />,
        libraryName: 'React',
      },
      {
        icon: <SiTailwindcss className="text-4xl text-cyan-500" />,
        libraryName: 'Tailwind',
      },
      {
        iconLinkImage: '/asset/icons/syncfusion_icon.png',
        libraryName: 'Syncfusion',
      },
      {
        iconLinkImage: '/asset/icons/formik_icon.png',
        libraryName: 'Formik',
      },
      {
        icon: <SiRedux className="text-4xl text-[#7749BE]" />,
        libraryName: 'Redux',
      },
    ],
    links: {
      gitHubLink: 'https://github.com/edoardovincenzi/user-management',
      livelink: 'https://user-management-blue.vercel.app/',
    },
  },
];

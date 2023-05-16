import Link from 'next/link';
import { MdArrowBack } from 'react-icons/md';
import { useTranslation } from '../../i18n';
import CardProject from '../components/CardProject';
import { FaReact } from 'react-icons/fa';
import { FcPieChart } from 'react-icons/fc';
import {
  SiTailwindcss,
  SiRedux,
  SiNextdotjs,
  SiMui,
  SiTypescript,
  SiReactquery,
} from 'react-icons/si';
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
      <div className="flex flex-wrap gap-4 justify-center">
        {projectsList?.map((project, index) => (
          <CardProject
            key={index}
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

const projectsList: CardProjectprops[] = [
  {
    title: 'User management',
    description:
      'It is a user management project, where you can add a user through the form and then find it in the table below. You can interact with the table, editing it and modifying the data within. Additionally, you can view user details.',
    libraries: [
      {
        icon: <FaReact className="text-4xl text-cyan-500" />,
        libraryName: 'React',
      },
      {
        icon: <SiTypescript className="text-4xl text-[#3178C6]" />,
        libraryName: 'Typescript',
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
  {
    title: 'Dematech impianti',
    description:
      'This website has been created for the company named "Dematech impianti" to have an online and public showcase.',
    libraries: [
      {
        icon: <SiNextdotjs className="text-4xl text-black" />,
        libraryName: 'Next js',
      },
      {
        icon: <SiTypescript className="text-4xl text-[#3178C6]" />,
        libraryName: 'Typescript',
      },
      {
        icon: <SiTailwindcss className="text-4xl text-cyan-500" />,
        libraryName: 'Tailwind',
      },
    ],
    links: {
      livelink: 'https://dematechimpianti.it/',
    },
  },
  {
    title: 'Wedding website',
    description:
      'This website has been commissioned to have all the wedding information in one place.',
    libraries: [
      {
        icon: <FaReact className="text-4xl text-cyan-500" />,
        libraryName: 'React',
      },
      {
        icon: <SiTypescript className="text-4xl text-[#3178C6]" />,
        libraryName: 'Typescript',
      },
      {
        icon: <SiTailwindcss className="text-4xl text-cyan-500" />,
        libraryName: 'Tailwind',
      },
    ],
    links: {
      gitHubLink: 'https://github.com/edoardovincenzi/mywedding',
      livelink: 'https://my-wedding.netlify.app/',
    },
  },
  {
    title: 'CO2 emissions',
    description:
      'In this web app, you will view CO2 emissions by country, be able to see the CO2 chart of the last 6 months for a country, and calculate CO2 with advanced search for a specific country.',
    libraries: [
      {
        icon: <SiNextdotjs className="text-4xl text-black" />,
        libraryName: 'Next js',
      },
      {
        icon: <SiTypescript className="text-4xl text-[#3178C6]" />,
        libraryName: 'Typescript',
      },
      {
        icon: <SiMui className="text-4xl text-[#007FFF]" />,
        libraryName: 'MUI',
      },
      {
        iconLinkImage: '/asset/icons/zustand_icon.png',
        libraryName: 'Zustand',
      },
      {
        icon: <FcPieChart className="text-4xl text-[#007FFF]" />,
        libraryName: 'React chartjs 2',
      },
      {
        icon: <SiReactquery className="text-4xl text-[#EF4444]" />,
        libraryName: 'React query',
      },
    ],
    links: {
      gitHubLink:
        'https://github.com/edoardovincenzi/CO2-emissions-next-application',
      livelink: 'https://co2-emissions.vercel.app/',
    },
  },
];

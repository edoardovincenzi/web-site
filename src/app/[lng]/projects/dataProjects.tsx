import { FaReact } from 'react-icons/fa';
import { FcPieChart } from 'react-icons/fc';
import {
  SiTailwindcss,
  SiRedux,
  SiNextdotjs,
  SiMui,
  SiTypescript,
  SiReactquery,
  SiI18Next
} from 'react-icons/si';
import { CardProjectprops } from '@/types';

export const projectsList: CardProjectprops[] = [
  {
    title: 'User management',
    description: 'projects.user_management.description',
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
    description: 'projects.dematech_impianti.description',
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
    description: 'projects.wedding_website.description',
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
        icon: <SiI18Next className="text-4xl text-[#26A69A]" />,
        libraryName: 'I18Next',
      }
    ],
    links: {
      gitHubLink: 'https://github.com/edoardovincenzi/mywedding',
      livelink: 'https://my-wedding.netlify.app/',
    },
  },
  {
    title: 'CO2 emissions',
    description: 'projects.co2_emissions.description',
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

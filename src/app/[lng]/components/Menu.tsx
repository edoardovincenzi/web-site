'use client';

import Link from 'next/link';
import { MdWeb } from 'react-icons/md';
import { RiContactsLine } from 'react-icons/ri';
import { Trans } from 'react-i18next';

const Menu = ({ t, lng }: any) => {
  return (
    <div className="flex max-md:flex-col w-full h-[80%] mb-4 gap-3">
      <div className={`transition-all w-full md:w-1/2 h-4/6 md:h-full `}>
        <div className="flex text-textCardDescription flex-col justify-center items-center h-full px-6 pt-4 pb-6 bg-bgCardDescription rounded-3xl gap-y-2 lg:gap-y-6 relative">
          <h3 className="title-card-home">
            {t('description_card.title', 'Description')}
          </h3>
          <p className="text-sm xl:text-base overflow-y-scroll">
            <Trans
              i18nKey="description_card.description"
              t={t}
              default={descriptionDefaultText}
              // eslint-disable-next-line react/jsx-key
              components={[<b />, <br />]}
            />
          </p>
        </div>
      </div>
      <div className="h-2/6 flex flex-col w-full md:h-full md:w-1/2 gap-3">
        <Link
          href={`/${lng}/projects`}
          replace
          className="card-small-home bg-bgCard1"
        >
          <MdWeb className="icon-card-home" />
          <h3 className="title-card-home">
            {t('projects_card.title', 'Projects')}
          </h3>
        </Link>
        <Link
          href={`/${lng}/resume`}
          replace
          className="card-small-home bg-bgCard2"
        >
          <RiContactsLine className="icon-card-home" />
          <h3 className="title-card-home">
            {t('resume_card.title', 'Resume')}
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default Menu;

const descriptionDefaultText = `I am a passionate FRONT-END programmer with solid experience in designing and developing various types of web projects. I am motivated to create extraordinary user experiences using the latest technologies and innovative designs.
My passion for running has taught me the importance of perseverance and discipline, which I apply to my work as well.
I enjoy collaborating with other industry professionals to create high-quality digital products that meet the needs of clients.
`;

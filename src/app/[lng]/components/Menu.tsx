'use client';

import Link from 'next/link';
import { MdWeb } from 'react-icons/md';
import { RiContactsLine } from 'react-icons/ri';
import { Trans } from 'react-i18next';

const Menu = ({ t, lng }: any) => {
  return (
    <div className="flex max-md:flex-col w-full h-[80%] mb-4 gap-3">
      <div className={`transition-all w-full md:w-2/3 h-4/6 md:h-full `}>
        <div className="flex text-textCardDescription flex-col justify-center items-center h-full px-6 pt-4 pb-6 bg-bgCardDescription rounded-3xl gap-y-2 lg:gap-y-6 relative">
          <h3 className="title-card-home">
            {t('description_card.title', 'Description')}
          </h3>
          <p className="text-sm md:text-base xl:text-lg 2xl:text-xl overflow-y-auto">
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
      <div className="h-2/6 flex flex-col w-full md:h-full md:w-1/3 gap-3">
        {/* <Link
          href={`/${lng}/projects`}
          replace
          className="card-small-home bg-bgCard1"
        >
          <MdWeb className="icon-card-home" />
          <h3 className="title-card-home">
            {t('projects_card.title', 'Projects')}
          </h3>
        </Link> */}
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

const descriptionDefaultText = `I am a <0>software developer</0> with almost 5 years of experience, having worked in both front-end and back-end. This experience has allowed me to gain a comprehensive understanding of software development. <1></1> <1></1>I strongly believe that investing in the <0>fundamentals of programming</0>, <0>algorithms</0>, and <0>design patterns</0> is crucial to becoming a better developer. <1></1> <1></1>Exploring and experimenting with new technologies is always a valuable learning opportunity. Having self-confidence and maintaining a critical eye can be challenging, but it leads to greater openness and allows for constant growth and improvement.`;

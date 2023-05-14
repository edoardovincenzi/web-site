'use client';

import Link from 'next/link';
import { useTranslation } from '../i18n/client';
import { MdWeb } from 'react-icons/md';
import { RiContactsLine } from 'react-icons/ri';
import { BiExpandVertical } from 'react-icons/bi';
import { useState } from 'react';

export default function Page({ params: { lng } }: any) {
  const { t }: any = useTranslation(lng);
  const [expandDescription, setExpandDescription] = useState(false);
  return (
    <div className="app-container">
      <h1 className="app-header">{t('title', 'Edoardo Vincenzi')}</h1>
      <div className="flex max-md:flex-col w-full h-[80%] xl:h-[70%] gap-3">
        <div
          className={`transition-all w-full md:w-1/2 ${
            expandDescription ? 'h-full' : 'h-4/6'
          }  md:h-full `}
        >
          <div className="flex flex-col justify-center items-center h-full px-6 py-4 bg-[#FD536B] rounded-3xl gap-y-2 lg:gap-y-6 relative">
            <h3 className="title-card-home">Description</h3>
            <p className="text-sm xl:text-base overflow-y-scroll">
              Sono un appassionato programmatore <b>FRONT-END</b> con una solida
              esperienza nella progettazione e nello sviluppo di progetti web di
              varia natura. Sono motivato a creare esperienze utente
              straordinarie utilizzando le{' '}
              <b>ultime tecnologie e design innovativi</b>.
              <br />
              <br /> La mia passione per la corsa mi ha insegnato l'importanza
              della <b>perseveranza e della disciplina</b>, che applico anche
              nel mio lavoro. <br />
              <br />
              Mi piace collaborare con altri professionisti del settore per
              creare prodotti digitali di{' '}
              <b>alta qualità che soddisfino le esigenze dei clienti</b>.
            </p>
            <BiExpandVertical
              onClick={() => setExpandDescription((old) => !old)}
              className="absolute right-5 bottom-3 md:hidden text-xl"
            />
          </div>
        </div>
        <div
          className={`${
            expandDescription ? 'h-0 overflow-hidden' : 'h-2/6'
          } flex flex-col w-full md:h-full md:w-1/2 gap-3`}
        >
          <Link
            href={`/${lng}/resume`}
            replace
            className="card-small-home bg-[#7FD1AE]"
          >
            <MdWeb className="icon-card-home" />
            <h3 className="title-card-home">Projects</h3>
          </Link>
          <Link
            href={`/${lng}/resume`}
            replace
            className="card-small-home bg-[#E5C0C0]"
          >
            <RiContactsLine className="icon-card-home" />
            <h3 className="title-card-home">Resume</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

'use client';

import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { GoLinkExternal } from 'react-icons/go';
import { CardProjectprops } from '@/types';
import Link from 'next/link';
import TechnologyIcon from './TechnologyIcon';
import TechnologyLinkImage from './TechnologyLinkImage';

const CardProject = ({
  title,
  t,
  description,
  libraries,
  links,
}: CardProjectprops) => {
  return (
    <div className="flex flex-col bg-clip-border rounded-xl mb-2 bg-textCardDescription relative h-[35rem] w-full max-w-[28rem] items-center justify-center overflow-hidden text-center">
      <div className="bg-clip-border overflow-hidden bg-transparent shadow-none absolute inset-0 m-0 h-full w-full rounded-none ">
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-textPrimary/100 via-textPrimary/90 to-textPrimary/80" />
      </div>
      <div className="pb-2 relative py-10 px-4 w-full grid grid-cols-1 grid-rows-2 h-full justify-center items-start">
        <div>
          <h2 className="block antialiased tracking-normal text-3xl leading-[1.3] text-textCardDescription mb-6 font-bold ">
            {title.toUpperCase()}
          </h2>
          <p className="text-sm md:text-base row-span-3  text-textCardDescription">
            {t(description)}
          </p>
        </div>
        <div className=" row-span-3  grid grid-cols-3 gap-4 px-4 pt-4">
          {libraries?.map((library, index) => {
            if (library?.icon) {
              return (
                <TechnologyIcon
                  key={index}
                  icon={library.icon}
                  libraryName={library?.libraryName}
                />
              );
            }
            if (library?.iconLinkImage) {
              return (
                <TechnologyLinkImage
                  key={index}
                  iconLinkImage={library.iconLinkImage}
                  libraryName={library?.libraryName}
                />
              );
            }

            return <></>;
          })}
        </div>
        <div className="flex justify-between items-center p-4 px-4 ">
          {links?.gitHubLink ? (
            <Link
              href={links.gitHubLink}
              target="_blank"
              className="bg-textCardDescription flex justify-center items-center gap-x-2 rounded-xl p-3 min-w-[8rem] whitespace-nowrap"
            >
              <FaGithub className="text-xl" />
              GitHub
            </Link>
          ) : (
            <div className="min-w-[8rem]"></div>
          )}
          <Link
            href={links.livelink}
            target="_blank"
            className="bg-textCardDescription flex justify-center items-center gap-x-2 rounded-xl p-3 min-w-[8rem] whitespace-nowrap"
          >
            <GoLinkExternal className="text-xl" />
            Live
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardProject;

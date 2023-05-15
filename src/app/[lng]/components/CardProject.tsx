'use client';

import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { GoLinkExternal } from 'react-icons/go';
import { CardProjectprops } from '@/types';
import Link from 'next/link';

const CardProject = ({ title, libraries, links }: CardProjectprops) => {
  return (
    <div className="flex flex-col bg-clip-border rounded-xl bg-textCardDescription relative h-[35rem] w-full max-w-[28rem] items-center justify-center overflow-hidden text-center">
      <div className="bg-clip-border overflow-hidden bg-transparent shadow-none absolute inset-0 m-0 h-full w-full rounded-none ">
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-textPrimary/100 via-textPrimary/90 to-textPrimary/80" />
      </div>
      <div className="pb-2 relative py-14 px-4 w-full">
        <h2 className="block antialiased tracking-normal text-4xl leading-[1.3] text-textCardDescription mb-6 font-medium ">
          {title}
        </h2>
        <div className="p-6 grid grid-cols-3 gap-4 px-4 ">
          {libraries?.map((library, index) => {
            if (library?.icon) {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center gap-y-1"
                >
                  <>
                    {library?.icon}
                    <p className="text-xl text-textCardDescription">
                      {library.libraryName}
                    </p>
                  </>
                </div>
              );
            }
            if (library?.iconLinkImage) {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center gap-y-1"
                >
                  <div
                    className={`h-9 w-9`}
                    style={{
                      background: `url("${library?.iconLinkImage}")`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  <p className="text-xl text-textCardDescription">
                    {library.libraryName}
                  </p>
                </div>
              );
            }

            return <></>;
          })}
        </div>
        <div className="flex justify-between items-center p-6 px-4 ">
          <Link
            href={links.gitHubLink}
            target="_blank"
            className="bg-textCardDescription flex justify-center items-center gap-x-2 rounded-xl p-3 min-w-[8rem] whitespace-nowrap"
          >
            <FaGithub className="text-xl" />
            GitHub
          </Link>
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

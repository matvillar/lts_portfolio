import { otherProjectsData } from '@/public/links/otherProjectsData';
import React from 'react';
import { PinContainer } from '../ui/PinContainer';
import Image from 'next/image';
import { FaLocationArrow } from 'react-icons/fa6';

import LineAroundTitle from '../ui/LineAroundTitle';
import Link from 'next/link';

type Props = {};

const OtherProjects = (props: Props) => {
  return (
    <div className="py-20">
      <h1 className="font-bold text-4xl md:text-5xl text-center">
        Another group of{' '}
        <span className="text-purple-100">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {otherProjectsData.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[20rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer title={item.title} href={item.link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[65vw] overflow-hidden h-[15vh] lg:h-[40vh] lg:max-h-[20vh]">
                <Link href={item.link} className="relative w-full h-full">
                  <Image
                    src={item.img}
                    alt="cover"
                    className="absolute object-fill rounded-t-xl"
                    width={400}
                    height={400}
                  />
                </Link>
              </div>
              <div className="flex flex-col justify-end mt-5 p-4">
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>

                <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 1.5}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <Link
                    href={item.link}
                    target="_blank"
                    className="flex justify-center items-center rounded-full border border-white-200 py-2 px-3"
                  >
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Live Site
                    </p>
                    <FaLocationArrow className="ms-3 text-purple-100" />
                  </Link>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherProjects;

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FaGithub } from 'react-icons/fa6';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Link from 'next/link';

type Props = {
  title: string;
  projectName: string;
  description: string;
  srcImg: string;
  defaultImg?: string;
  id: number;
  isReverse?: boolean;
  projectTools?: string[];
  linkLiveView: string;
  linkGithub: string;
};

const ProjectFlex = ({
  title,
  projectName,
  description,
  srcImg,
  defaultImg,
  id,
  isReverse,
  projectTools,
  linkLiveView,
  linkGithub,
}: Props) => {
  const githubHomeLink =
    linkGithub === '' ? 'https://github.com/matvillar' : linkGithub;

  return (
    <div className="rounded-lg mx-auto z-20 ">
      <div
        className={`relative flex flex-col lg:flex-row my-20 border border-white-200 rounded-lg lg:border-none ${
          isReverse ? 'lg:flex-row-reverse' : ''
        }`}
      >
        <Link href={linkLiveView} target="_blank" className="lg:max-w-[50%]">
          <Image
            className="rounded-lg object-cover w-full  transform transition duration-200 ease-in-out filter grayscale hover:grayscale-0 cursor-pointer hover:scale-105"
            src={srcImg}
            alt={projectName}
            width={500}
            height={500}
          />
        </Link>
        <div
          className={`bg-black-100 opacity-90 p-3 rounded-lg absolute flex flex-col bottom-0 top-0  lg:gap-5 justify-between lg:justify-center lg:bg-transparent lg:text-right md:min-h-[300px] ${
            isReverse
              ? 'lg:text-left lg:left-0 lg:right-[30%]'
              : 'lg:left-[30%]'
          }`}
        >
          <div
            className={`flex-col ${isReverse ? 'lg:text-left lg:left-0' : ''}`}
          >
            <p className="text-xs font-mono text-purple-100 tracking-widest">
              Showcase Project
            </p>
            <h3 className="font-bold text-white tracking-wider text-2xl lg:text-3xl">
              {title}
            </h3>
          </div>
          <p
            className={`lg:bg-black-100 text-wrap lg:opacity-95 text-white tracking-wider lg:text-white-200 lg:shadow-xl text-md lg:p-5 rounded-lg ${
              isReverse ? 'lg:text-left' : 'lg:text-right'
            }`}
          >
            {description}
          </p>
          <ul
            className={`flex justify-start lg:justify-start text-xs gap-3 my-3 lg:my-0 lg:gap-5 ${
              isReverse ? 'lg:justify-start lg:self-start' : 'lg:justify-end'
            }`}
          >
            {projectTools?.map((tool, i) => (
              <li
                key={i}
                className="tracking-wider font-mono text-purple-100 lg:text-white lg:bg-purple-100 rounded-lg lg:py-1 lg:px-4 shadow-lg"
              >
                {tool}
              </li>
            ))}
          </ul>

          <div
            className={`flex justify-start text-xs gap-5${
              isReverse ? 'lg:flex lg:justify-start' : 'lg:flex lg:justify-end'
            }`}
          >
            <Button className="hover:text-purple-100 hover:scale-105 transition-all cursor-pointer">
              <Link href={githubHomeLink}>
                <FaGithub size={28} />
              </Link>
            </Button>
            <Button className="hover:text-purple-100 hover:scale-105 transition-all cursor-pointer">
              <Link href={linkLiveView}>
                <FaExternalLinkAlt size={28} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectFlex;

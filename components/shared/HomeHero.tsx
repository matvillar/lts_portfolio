'use client';
import Image from 'next/image';
import { TextGenerateEffect } from '../ui/TextGenerateEffect';
import PrimaryButton from './PrimaryButton';
import MagicButton from '../ui/MagicButton';
import { IoIosSend } from 'react-icons/io';
import Link from 'next/link';
import { PiMouseScrollBold } from 'react-icons/pi';

type Props = {};

const HomeHero = (props: Props) => {
  return (
    <>
      <div className="pb-20 pt-36 text-white-200">
        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-left justify-center">
            <h2 className="font-semibold text-md text-purple-100 text-left max-w-80">
              Hi, My Name is
            </h2>

            <TextGenerateEffect
              className="text-left text-[40px] md:text-5xl lg:text-6xl"
              words="Matias Villar and I Love Building Things For The Web."
            />
            <p className="text-left mb-4 text-base md:text-xl max-w-[90%]">
              I&apos;m a software developer based in the US, specializing in
              building modern, scalable web applications. I strive to deliver
              high-quality code and innovative solutions for complex challenges.
            </p>
            <div className="flex mt-20">
              <Link href="#projects" className="w-full h-12 text-white">
                <PrimaryButton
                  title="Show My Work"
                  padding="p-7"
                  icon={IoIosSend}
                  isUpperCase={true}
                />
              </Link>
              <PiMouseScrollBold
                size={42}
                className="hidden text-white animate-bounce h-12 m-5 lg:block"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHero;

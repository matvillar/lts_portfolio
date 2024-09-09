import Image from 'next/image';
import React from 'react';
import SectionTitle from './SectionTitle';

const AboutMe = () => {
  return (
    <section
      className="max-w-7xl items-center  lg:h-[80vh] justify-center w-full pb-20 pt-36 text-white-200 lg:mb-20"
      id="about"
    >
      <div className="flex justify-center">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-left justify-center">
          <SectionTitle sectionNum="01." sectionName="About Me" />
          <div className="flex flex-col items-center md:flex-col gap-5 lg:flex-row">
            <p className="text-left self-start mb-4 text-base md:text-xl max-w-[90%]">
              I&apos;m a software developer based in the US, specializing in
              building modern, scalable web applications. I strive to deliver
              high-quality code and innovative solutions for complex challenges.
            </p>

            <Image
              src="/images/me.png"
              alt="Just me"
              width={400}
              height={400}
              className="rounded-lg transform transition duration-200 ease-in-out filter cursor-pointer grayscale hover:grayscale-0  hover:-translate-x-2 hover:-translate-y-2 hover:shadow-[16px_16px_0px_0px_rgba(139,92,246,1)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

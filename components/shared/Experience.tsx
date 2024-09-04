import React from 'react';
import ExpTabs from './ExpTabs';
import { dataJobs } from '@/public/links/dataJobs';

const Experience = () => {
  return (
    <section
      className="max-w-7xl items-center h-[80vh] lg:h-[60vh] justify-center pb-20 pt-36 text-white-200 lg:mb-20"
      id="experience"
    >
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] mx-auto justify-center">
        <h2 className="font-bold text-xl text-purple-100 text-left lg:text-3xl">
          02. <span className="text-white ml-3 lg:text-4xl">My Experience</span>
        </h2>
        <div className="mx-auto max-w-[90%]">
          <ExpTabs data={dataJobs} />
        </div>
      </div>
    </section>
  );
};

export default Experience;

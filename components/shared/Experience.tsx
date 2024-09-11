import React from 'react';
import ExpTabs from './ExpTabs';
import { dataJobs } from '@/public/links/dataJobs';
import SectionTitle from './SectionTitle';
import InfiniteTechLoop from './InfiniteTechLoop';

const Experience = () => {
  return (
    <section
      className="max-w-7xl items-center h-[80vh]  xl:max-h-[80vh] lg:h-[80vh] justify-center pb-20 pt-36 mb-30 text-white-200 lg:mb-20"
      id="experience"
    >
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[70vw] xl:max-w-[60vw] mx-auto justify-center">
        <SectionTitle sectionNum="02." sectionName="My Experience" />
        <div className="mx-auto max-w-[90%]">
          <ExpTabs data={dataJobs} />
        </div>
        <InfiniteTechLoop />
      </div>
    </section>
  );
};

export default Experience;

import React from 'react';

type Props = {
  sectionNum: string;
  sectionName: string;
};

const SectionTitle = ({ sectionNum, sectionName }: Props) => {
  return (
    <div className="flex items-center mb-14">
      <h2 className="font-bold text-4xl text-purple-100 md:text-5xl">
        {sectionNum}{' '}
        <span className="text-white ml-3 lg:text-5xl">{sectionName}</span>
      </h2>
      <div className="flex-grow ml-4">
        <hr className="border-t-4 rounded-sm border-purple-100 w-full" />
      </div>
    </div>
  );
};

export default SectionTitle;

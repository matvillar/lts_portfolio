import React from 'react';

type Props = {
  title: string;
};

const LineAroundTitle = ({ title }: Props) => {
  return (
    <>
      <div className="flex-grow mr-4">
        <hr className="border-t-4 rounded-sm border-purple-100" />
      </div>
      <h2 className="font-bold text-white text-4xl md:text-5xl text-center">
        {title}
      </h2>
      <div className="flex-grow ml-4">
        <hr className="border-t-4 rounded-sm border-purple-100" />
      </div>
    </>
  );
};

export default LineAroundTitle;

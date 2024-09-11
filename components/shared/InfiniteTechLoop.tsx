import React from 'react';
import { InfiniteMovingCards } from '../ui/infinite-moving-cards';
import { infiniteLoopTechData } from '@/public/links/infiniteLoopTechData';

type Props = {};

const InfiniteTechLoop = (props: Props) => {
  return (
    <div className="h-[12rem] mb-36 rounded-full flex flex-col antialiased bg-white dark:bg-transparent dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={infiniteLoopTechData}
        direction="right"
        speed="slow"
      />
    </div>
  );
};

export default InfiniteTechLoop;

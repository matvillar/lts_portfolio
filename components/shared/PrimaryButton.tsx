'use client';
import React from 'react';
import { Button } from '@/components/ui/button';

type Props = {
  title: string;
  padding?: string;
  icon?: React.ElementType;
  isUpperCase?: boolean;
  handleClick?: () => void;
};

const PrimaryButton = ({
  title,
  padding,
  icon: Icon,
  isUpperCase,
  handleClick,
}: Props) => {
  if (isUpperCase) {
    title = title.toUpperCase();
  }
  return (
    <Button
      onClick={handleClick}
      className={`${padding} w-full lg:w-[40%] border-2 font-semibold tracking-wider border-white rounded-lg transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(139,92,246,1)]`}
    >
      {Icon && <Icon size={24} className="mr-2" />} {title}
    </Button>
  );
};

export default PrimaryButton;

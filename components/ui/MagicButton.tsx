import React from 'react';
import { Button } from './button';

type Props = {
  title: string;
};

const MagicButton = ({ title }: Props) => {
  return (
    <Button className="bg-transparent border-white-200 border-4 h-16 font-semibold text-lg hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-100 hover:transition-all">
      {title}
    </Button>
  );
};

export default MagicButton;

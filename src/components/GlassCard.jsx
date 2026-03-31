import React from 'react';
import { cn } from '../utils/cn';

const NaturalCallout = ({ children, className }) => {
  return (
    <div className={cn(
      'border-l-4 border-gray-100 bg-[#fafafa] p-8 my-10', 
      className
    )}>
      {children}
    </div>
  );
};

export default NaturalCallout;

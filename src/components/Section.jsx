import React from 'react';
import { cn } from '../utils/cn';

const Section = ({ id, title, subtitle, children, className }) => {
  return (
    <article id={id} className={cn('py-10 border-b border-gray-50 last:border-0 scroll-mt-20', className)}>
      <header className="mb-6">
        <h2 className="text-gray-900 border-l-4 border-gray-100 pl-8 mb-2 tracking-tighter leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xl text-gray-400 font-medium tracking-tight pl-9">
            {subtitle}
          </p>
        )}
      </header>
      <div className="content-body">
        {children}
      </div>
    </article>
  );
};

export default Section;

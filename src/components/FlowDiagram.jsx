import React from 'react';
import { cn } from '../utils/cn';

export const Node = ({ icon: Icon, label, sublabel, color = 'gray', className }) => {
  const colorStyles = {
    llm: 'border-blue-100 bg-blue-50 text-blue-900',
    rag: 'border-green-100 bg-green-50 text-green-900',
    tools: 'border-orange-100 bg-orange-50 text-orange-900',
    agents: 'border-purple-100 bg-purple-50 text-purple-900',
    gray: 'border-gray-100 bg-gray-50 text-gray-800'
  };

  return (
    <div className={cn(
      'flex flex-col items-center justify-center p-6 rounded-lg border text-center min-w-[160px]',
      colorStyles[color] || colorStyles.gray,
      className
    )}>
      {Icon && <Icon className="w-6 h-6 mb-3 opacity-80" />}
      <span className="font-bold text-sm uppercase tracking-tight">{label}</span>
      {sublabel && <span className="text-[10px] opacity-60 mt-2 font-mono uppercase tracking-widest">{sublabel}</span>}
    </div>
  );
};

export const Arrow = ({ direction = 'right', className }) => {
  return (
    <div className={cn('flex items-center justify-center p-4', className)}>
      <div className={cn(
        'w-12 h-[1.5px] bg-gray-100 relative',
        direction === 'down' ? 'rotate-90 w-1' : ''
      )}>
        <div className={cn(
          'absolute border-t-2 border-r-2 border-gray-100 w-3 h-3',
          direction === 'right' ? 'right-0 top-1/2 -translate-y-1/2 rotate-45' : '',
          direction === 'down' ? 'bottom-0 left-1/2 -translate-x-1/2 rotate-[135deg]' : ''
        )} />
      </div>
    </div>
  );
};

const FlowDiagram = ({ children, className }) => {
  return (
    <div className={cn('flex flex-wrap items-center justify-center gap-6 py-4', className)}>
      {children}
    </div>
  );
};

export default FlowDiagram;

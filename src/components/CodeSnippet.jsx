import React from 'react';
import { cn } from '../utils/cn';

const CodeSnippet = ({ code, title, className }) => {
  return (
    <div className={cn('my-4 rounded-xl overflow-hidden bg-[#111827] border border-gray-800 shadow-2xl', className)}>
      {title && (
        <div className="px-6 py-4 bg-gray-900 border-b border-gray-800 flex items-center justify-between">
          <span className="text-[12px] font-mono font-bold text-gray-500 uppercase tracking-widest">{title}</span>
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-gray-800" />
            <div className="w-3 h-3 rounded-full bg-gray-800" />
            <div className="w-3 h-3 rounded-full bg-gray-800" />
          </div>
        </div>
      )}
      <pre className="p-8 overflow-x-auto text-sm leading-relaxed font-mono text-gray-300">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeSnippet;

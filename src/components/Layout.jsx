import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children, pageLinks = [] }) => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 italic-highlights">
      <Sidebar pageLinks={pageLinks} />
      <main className="xl:ml-64 relative">
        {children}
      </main>
    </div>
  );
};

export default Layout;

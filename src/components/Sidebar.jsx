import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../utils/cn';

const Sidebar = ({ pageLinks = [] }) => {
  const [active, setActive] = useState('');
  const location = useLocation();
  
  const pages = [
    { path: '/', label: 'Home' },
    { path: '/agents', label: 'AI Agents' },
    { path: '/geospatial', label: 'GEE Research' },
  ];

  useEffect(() => {
    if (pageLinks.length === 0) return;

    const handleScroll = () => {
      const sections = pageLinks.map(n => document.getElementById(n.id));
      const scrollPos = window.scrollY + 200;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollPos) {
          setActive(pageLinks[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pageLinks]);

  return (
    <aside className="fixed top-0 left-0 bottom-0 w-64 bg-white border-r border-gray-50 overflow-y-auto hidden xl:block no-scrollbar px-10 py-16 z-40">
      <nav className="space-y-8">
        <div>
          <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-300 mb-4">Technical Pages</h4>
          <div className="space-y-1">
            {pages.map((page) => (
              <Link
                key={page.path}
                to={page.path}
                className={cn(
                  "sidebar-link block py-1 text-sm transition-all text-gray-400 hover:text-gray-900",
                  location.pathname === page.path ? "text-gray-900 font-bold" : ""
                )}
              >
                {page.label}
              </Link>
            ))}
          </div>
        </div>

        {pageLinks.length > 0 && (
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-300 mb-4">On This Page</h4>
            <div className="space-y-1">
              {pageLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={cn(
                    "sidebar-link block py-1 text-xs transition-all",
                    active === link.id ? "text-gray-900 font-bold" : "text-gray-400 hover:text-gray-600"
                  )}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}

        <div className="pt-8 mt-8 border-t border-gray-50 flex flex-col gap-2">
          <a href="https://github.com/Diptesh2006" target="_blank" rel="noopener" className="text-[10px] font-bold text-gray-400 hover:text-gray-900 transition-colors uppercase tracking-widest flex items-center gap-2">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/diptesh-das-63083930a/" target="_blank" rel="noopener" className="text-[10px] font-bold text-gray-400 hover:text-gray-900 transition-colors uppercase tracking-widest flex items-center gap-2">
            LinkedIn
          </a>
          <a href="https://diptesh2006.github.io/portfolio/" target="_blank" rel="noopener" className="text-[10px] font-bold text-gray-400 hover:text-gray-900 transition-colors uppercase tracking-widest flex items-center gap-2">
            Portfolio
          </a>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;

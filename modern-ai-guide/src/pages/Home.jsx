import React from 'react';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-10 lg:px-16 py-20 flex flex-col justify-center min-h-[60vh]">
        <header className="mb-4">
          <h1 className="leading-[1.1] tracking-[-0.04em] mb-2 text-gray-900 font-extrabold uppercase">
            Hi, I am Diptesh
          </h1>
          <p className="text-xl text-gray-400 font-medium leading-normal max-w-2xl mb-6">
            Researcher in <span className="highlight-rag">Geospatial Analytics</span> and <span className="highlight-agents">Autonomous Systems</span>. Focused on predictive risk mapping using Earth Observation and Machine Learning.
          </p>
          <div className="border-t border-gray-100 pt-6">
            <a 
              href="https://diptesh2006.github.io/portfolio/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-black uppercase tracking-[0.2em] text-gray-400 hover:text-blue-600 transition-colors flex items-center gap-2"
            >
              View Full Portfolio &rarr;
            </a>
          </div>
        </header>
      </div>
    </Layout>
  );
};

export default Home;

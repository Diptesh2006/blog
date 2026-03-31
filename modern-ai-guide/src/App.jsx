import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ModernAIGuide from './pages/ModernAIGuide';
import GEESpatial from './pages/GEESpatial';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agents" element={<ModernAIGuide />} />
        <Route path="/geospatial" element={<GEESpatial />} />
      </Routes>
    </Router>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import AboutPage from './AboutPage';
import FactPage from './FactPage';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/:factId" element={<FactPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import { default as LandingPage } from './components/landingPage.jsx';  // Added .jsx extension
import ProjectsPage from './components/projectPage';
import AboutPage from './components/aboutPage';

function App() {
  return (
    <div className="min-h-screen relative">
      <div className="animated-bg">
        <div className="design-elements">
          <div className="design-element"></div>
          <div className="design-element"></div>
          <div className="design-element"></div>
        </div>
      </div>
      
      {/* Navbar */}
      <Navbar />
      
      {/* Main content with top padding to account for fixed navbar */}
      <main className="pt-16 relative">
        <div className="container mx-auto px-4">
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path="/about" element={<div className="text-gray-900">About Page</div>} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<div className="pt-20 text-gray-900">Contact Page</div>} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
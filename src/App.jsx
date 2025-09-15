import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import LandingPage from './components/landingPage';
import ProjectsPage from './components/projectPage';
import AboutPage from './components/aboutPage';
import ContactPage from './components/contactPage';

function App() {
  return (
    <div className="min-h-screen relative">
      {/* Animated Background */}
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
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
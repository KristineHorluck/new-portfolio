import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import LandingPage from './components/landingPage';

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
      <header className="fixed w-full top-0 z-50 bg-white/70 backdrop-blur-md">
        <Navbar />
      </header>
      <main className="pt-16 relative">
        <div className="container mx-auto px-4">
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path="/about" element={<div className="text-gray-900">About Page</div>} />
            <Route path="/projects" element={<div className="text-gray-900">Projects Page</div>} />
            <Route path="/contact" element={<div className="text-gray-900">Contact Page</div>} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
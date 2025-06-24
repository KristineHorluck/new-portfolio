import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import LandingPage from './components/landingPage';
import ProjectsPage from './components/projectPage';
import AboutPage from './components/aboutPage';
import ContactPage from './components/contactPage';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [showApp, setShowApp] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Mark that we've shown the loading screen in sessionStorage
    sessionStorage.setItem('hasSeenLoading', 'true');
    setTimeout(() => {
      setShowApp(true);
    }, 300);
  };

  useEffect(() => {
    // Check if user has already seen the loading screen in this session
    const hasSeenLoading = sessionStorage.getItem('hasSeenLoading');
    
    if (!hasSeenLoading) {
      // First time in this session - show loading screen
      setIsLoading(true);
      setShowApp(false);
    } else {
      // Already seen loading - show app immediately
      setIsLoading(false);
      setShowApp(true);
    }
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling during loading
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset'; // Reset overflow when component unmounts 
    };
  }, [isLoading]);

  return (
    <div className="min-h-screen relative">
      {/* Loading Screen - only on first visit per session */}
      {isLoading && (
        <div className="fixed inset-0 z-50 transition-all duration-800">
          <LoadingScreen onLoadingComplete={handleLoadingComplete} />
        </div>
      )}

      {/* Main App Content - only show when not loading */}
      {!isLoading && (
        <>
          {/* Animated Background */}
          <div 
            className={`transition-all duration-1000 ${
              showApp 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="animated-bg">
              <div className="design-elements">
                <div className="design-element"></div>
                <div className="design-element"></div>
                <div className="design-element"></div>
              </div>
            </div>
          </div>
               
          {/* Navbar - only visible when not loading */}
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
        </>
      )}
    </div>
  );
}

export default App;
import React, { useState, useEffect } from 'react';
import { Sparkles, Rocket, Heart, Star, Coffee, Music, Camera, Palette } from 'lucide-react';

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const timelineEvents = [
    {
      year: '2020',
      title: 'Started My Journey',
      description: 'Discovered my passion for creating amazing things!',
      icon: <Rocket className="text-teal-500" />
    },
    {
      year: '2021',
      title: 'First Big Project',
      description: 'Built something awesome that made people smile',
      icon: <Star className="text-amber-500" />
    },
    {
      year: '2022',
      title: 'Level Up',
      description: 'Learned new skills and met incredible people',
      icon: <Sparkles className="text-teal-500" />
    },
    {
      year: '2023',
      title: 'New Adventures',
      description: 'Embarked on exciting new challenges',
      icon: <Heart className="text-amber-500" />
    },
    {
      year: '2024',
      title: 'Current Chapter',
      description: 'Writing the next exciting part of my story!',
      icon: <Coffee className="text-teal-600" />
    }
  ];

  const handleScroll = (direction) => {
    const container = document.getElementById('timeline-container');
    const scrollAmount = 300;
    if (container) {
      if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
      } else {
        container.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Animated Intro Section */}
      <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-teal-600">
            Hello, I'm Kristine! ✨
          </h1>
          <p className="text-xl text-gray-700 mb-4">
            Creative Soul • Frontend Developer • Design Enthusiast
          </p>
          <div className="flex justify-center gap-4">
            <Music className="text-teal-500 animate-bounce" />
            <Camera className="text-amber-500 animate-bounce delay-100" />
            <Palette className="text-teal-600 animate-bounce delay-200" />
          </div>
        </div>

        {/* Fun Facts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            { title: 'Passion', content: 'Creating Beautiful UI', icon: <Palette /> },
            { title: 'Currently Learning', content: 'Advanced React Patterns', icon: <Rocket /> },
            { title: 'Fun Fact', content: 'Love Photography', icon: <Camera /> }
          ].map((fact, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-teal-100"
            >
              <div className="flex items-center gap-3 mb-3 text-teal-600">
                {fact.icon}
                <h3 className="font-semibold text-lg">{fact.title}</h3>
              </div>
              <p className="text-gray-600">{fact.content}</p>
            </div>
          ))}
        </div>

        {/* Horizontal Timeline */}
        <div className="relative mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-teal-600">
            My programming Journey
          </h2>
          
          {/* Timeline Navigation */}
          <div className="flex justify-between mb-4">
            <button 
              onClick={() => handleScroll('left')}
              className="bg-amber-500 text-white p-2 rounded-full hover:bg-amber-600 transition-colors"
            >
              ←
            </button>
            <button 
              onClick={() => handleScroll('right')}
              className="bg-amber-500 text-white p-2 rounded-full hover:bg-amber-600 transition-colors"
            >
              →
            </button>
          </div>

          {/* Timeline Container */}
          <div 
            id="timeline-container"
            className="overflow-x-auto flex gap-6 pb-4 scroll-smooth"
            style={{ scrollBehavior: 'smooth' }}
          >
            {timelineEvents.map((event, index) => (
              <div 
                key={index}
                className="flex-none w-64 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-teal-100"
              >
                <div className="flex items-center gap-3 mb-3">
                  {event.icon}
                  <span className="font-bold text-lg text-amber-600">{event.year}</span>
                </div>
                <h3 className="font-semibold mb-2 text-teal-700">{event.title}</h3>
                <p className="text-gray-600 text-sm">{event.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6 text-teal-600">
            Let's Create Something Amazing!
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Drop me a message and let's start a conversation about your next exciting project.
          </p>
          <button className="bg-gradient-to-r from-teal-500 to-amber-500 text-white px-8 py-3 rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            Say Hello! 👋
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
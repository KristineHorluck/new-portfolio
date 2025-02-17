import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Star, Coffee, Plane, Brain, Utensils, ChevronLeft, ChevronRight, GraduationCap, Trophy, ChefHat, Pencil, School, Map, Figma, Contact, Trash} from 'lucide-react';

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const timelineEvents = [
    {
      year: 'Summer 2020',
      title: 'Started My Journey',
      description: 'Started at Aalborg Tekniske Gymnasium, with a Field of Study in IT',
      icon: <Rocket className="text-[#3c6e71]" />
    },
    {
      year: 'Spring 2021',
      title: 'Started understanding the basics of Objects Oriented Programming',
      description: 'Built something for the first time I was proud of',
      icon: <Star className="text-[#284b63]" />
    },
    {
      year: 'Summer 2023',
      title: 'Finished my high school education',
      description: 'Spent the summer volunteering and solo travelling in the Netherlands',
      icon: <Map className="text-[#3c6e71]" />
    },
    {
      year: 'Summer 2023',
      title: 'New Adventures at Aalborg University, studying Interaction Design',
      description: 'Embarked on some exciting new challenges, and found my way to frontend development',
      icon: <School className="text-[#284b63]" />
    },
    {
      year: 'Fall 2023',
      title: 'Finished working on my first project, with some amazing people',
      description: 'Made my first UX focused project on a Redesign of a Laundry Payment Machine Low-fidelity mockups',
      icon: <Pencil className="text-[#3c6e71]" />
    },
    {
      year: 'Fall 2023',
      title: 'Made my first project with a focus on Usability Testing',
      description: 'Finished the project Redesign of Travellink Holiday Rentals with an A, Focus on Usability Testing and High-fidelity mockups in Figma',
      icon: <Figma className="text-[#3c6e71]" />
    },
    {
      year: 'Spring 2024',
      title: 'Made my first project with a focus on implementation of a Database into a webapplication',
      description: 'Finished the design and development of a social web application with an A, The focus were on the implementation of a Database into a webapplication made with Angular',
      icon: <Contact className="text-[#3c6e71]" />
    },
    {
      year: 'Fall 2024',
      title: 'Smart Home waste sorting in student apartments',
      description: 'Made my first physical project with a focus on developing a smart home product that helps apartment-living students sort waste properly',
      icon: <Trash className="text-[#3c6e71]" />
    },
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
      <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        {/* Header Section with Image */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-4 lg:px-8 mb-16">
          <div className="text-center md:text-left">
            <h1 className="text-5xl font-bold mb-4 text-[#3c6e71]">
              Hello, I'm Kristine Hørlück  
            </h1>
            <p className="text-xl text-[#284b63] mb-4">
              Student • Football Coach • Hobby Chef
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <GraduationCap className="text-[#3c6e71] animate-bounce" />
              <Trophy className="text-[#284b63] animate-bounce delay-100" />
              <ChefHat className="text-[#3c6e71] animate-bounce delay-200" />
            </div>
          </div>
          
          <div className="w-full md:w-1/2 max-w-md">
            <img 
              src="/Ged.jpg" 
              alt="Kristine Hørlück" 
              className="rounded-xl shadow-lg w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Fun Facts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 px-4">
          {[
            { title: 'Passion', content: 'I am a football coach at my local football club', icon: <Trophy /> },
            { title: 'Currently Learning', content: 'I am currently learning advanced React patterns, and the product of this has been this portfolio', icon: <Brain /> },
            { title: 'Fun Fact', content: 'I love cooking, and is currently experimenting the north african kitchen', icon: <Utensils /> }
          ].map((fact, index) => (
            <div 
              key={index}
              className="backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-[#3c6e71]/20"
            >
              <div className="flex items-center gap-3 mb-3 text-[#3c6e71]">
                {fact.icon}
                <h3 className="font-semibold text-lg">{fact.title}</h3>
              </div>
              <p className="text-[#284b63]">{fact.content}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative mb-16 px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#3c6e71]">
            My Programming Journey
          </h2>
          
          {/* Timeline Navigation */}
          <div className="flex justify-between mb-4">
            <button 
              onClick={() => handleScroll('left')}
              className="bg-[#284b63] text-white p-2 rounded-full hover:bg-[#3c6e71] transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => handleScroll('right')}
              className="bg-[#284b63] text-white p-2 rounded-full hover:bg-[#3c6e71] transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
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
                className="flex-none w-64 bg-white backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-[#3c6e71]/20"
              >
                <div className="flex items-center gap-3 mb-3">
                  {event.icon}
                  <span className="font-bold text-lg text-[#284b63]">{event.year}</span>
                </div>
                <h3 className="font-semibold mb-2 text-[#3c6e71]">{event.title}</h3>
                <p className="text-[#284b63]/80 text-sm">{event.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center mb-16 px-4">
          <h2 className="text-3xl font-bold mb-6 text-[#3c6e71]">
            Let's Create Something Amazing!
          </h2>
          <p className="text-lg text-[#284b63] mb-8">
            Drop me a message and let's start a conversation about your next exciting project.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-[#3c6e71] text-white hover:text-white px-8 py-3 rounded-full hover:bg-[#284b63] transform hover:-translate-y-1 transition-all duration-300"
          >
            Say Hello! 👋
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Mail, MousePointer2 } from 'lucide-react';

const LandingPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    const handleMouseMove = (e) => {
      if (!isFlipped) {
        setMousePosition({
          x: (e.clientX / window.innerWidth) * 30 - 15,
          y: (e.clientY / window.innerHeight) * 30 - 15,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isFlipped]);

  const skills = [
    { name: 'React', description: 'Frontend Development', icon: '⚛️' },
    { name: 'TypeScript', description: 'Type-Safe JavaScript', icon: '📝' },
    { name: 'Tailwind CSS', description: 'Utility-First CSS', icon: '🎨' },
    { name: 'Node.js', description: 'Backend Development', icon: '🚀' },
    { name: 'Figma', description: 'Creation of Mockups', icon: '✏️' },
    { name: 'UI/UX Design', description: 'User Experience', icon: '👥' },
    { name: 'Angular', description: 'Frontend Framework', icon: '🅰️' },
    { name: 'MySQL', description: 'Database Management', icon: '🗄️' },
    { name: 'C#', description: 'Backend Development', icon: '🔵' },
    { name: 'Java', description: 'Backend Development', icon: '☕' },
    { name: 'JavaScript', description: 'Frontend Development', icon: '🟨' },
    { name: 'Visual Studio Code', description: 'Code Editor', icon: '🧰' },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Interactive Hero Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div 
          className="relative cursor-pointer transition-transform duration-300"
          onClick={() => setIsFlipped(!isFlipped)}
          style={{
            transformStyle: 'preserve-3d',
            perspective: '2000px',
            transform: isFlipped ? 'rotateY(180deg)' : 
              `perspective(2000px) rotateX(${mousePosition.y * 0.15}deg) rotateY(${mousePosition.x * 0.15}deg) scale(${isLoaded ? 1 : 0.9})`,
            transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
          }}
        >
          {/* Front Side */}
          <div 
            className="w-full"
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
              opacity: isFlipped ? 0 : 1,
              transform: `translateY(${isLoaded ? '0' : '30px'})`,
            }}
          >
            <div 
              className="transition-all duration-1000 ease-out"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: `translateY(${isLoaded ? '0' : '30px'})`,
              }}
            >
              <h1 className="text-5xl sm:text-6xl font-bold text-[#284b63] mb-6">
                <span className="block">Hello, I'm</span>
                <span className="block text-[#3c6e71] hover:text-[#3c6e71]/90 transition-colors cursor-pointer
                               relative inline-block group">
                  Kristine
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-[#3c6e71] transform scale-x-0 
                                 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </span>
              </h1>
              
              <p className="text-xl text-[#284b63] mb-4 relative">
                <span className="absolute -left-8 top-1 animate-bounce">
                  <MousePointer2 className="w-5 h-5 text-[#3c6e71]" />
                </span>
                Interaction design student, volunteer and football coach
              </p>

              <p className="text-xl text-[#284b63] mb-8 max-w-2xl">
                Based in Aalborg, Denmark. I study interaction design at Aalborg University, 
                with both physical and interactive products.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <a 
                  href="/projects" 
                  className="group inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-[#3c6e71] 
                             rounded-lg hover:bg-[#284b63] transition-all duration-300 transform hover:-translate-y-1"
                  onClick={(e) => e.stopPropagation()}
                >
                  View my projects
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a 
                  href="/contact" 
                  className="inline-flex items-center px-6 py-3 text-lg font-medium text-[#3c6e71] border-2 
                             border-[#3c6e71] rounded-lg hover:bg-[#3c6e71]/10 transition-all duration-300 
                             transform hover:-translate-y-1"
                  onClick={(e) => e.stopPropagation()}
                >
                  Get in Touch
                </a>
              </div>

              <div className="flex gap-6">
                {[
                  { icon: Github, href: 'https://github.com/KristineHorluck', label: 'GitHub Profile' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/kristine-hørlück-5b474a210/', label: 'LinkedIn Profile' },
                  { 
                    icon: () => (
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.118.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                      </svg>
                    ),
                    href: 'https://discordapp.com/users/446029910784344065',
                    label: 'Discord'
                  }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#284b63] hover:text-[#3c6e71] transition-all duration-300 transform hover:-translate-y-1"
                    aria-label={social.label}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Back Side (Photo) */}
          <div 
            className="absolute inset-0 w-full rounded-lg overflow-hidden"
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
              transition: 'opacity 0.6s',
              opacity: isFlipped ? 1 : 0,
            }}
          >
            <div className="relative w-full h-full" style={{ transform: 'rotateY(180deg)' }}>
              <img 
                src="Billede.jpg"
                alt="Kristine Hørlück"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#284b63]/60 to-transparent">
                <div className="absolute bottom-0 left-0 p-8 text-white w-full">
                  <div className="flex flex-col items-start">
                    <p className="text-lg opacity-90 transform scale-x-[-1]">Click to flip back</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="bg-[#284b63]/5 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-[#284b63] mb-8">Featured Skills</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={skill.name}
                className={`p-6 bg-white rounded-lg shadow-sm transition-all duration-300 transform 
                           cursor-pointer border border-[#3c6e71]/20 ${
                             activeSkill === index ? 'scale-105 shadow-lg' : 'hover:scale-102 hover:shadow-md'
                           }`}
                onMouseEnter={() => setActiveSkill(index)}
                onMouseLeave={() => setActiveSkill(null)}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <div>
                    <h3 className="font-medium text-[#284b63]">{skill.name}</h3>
                    <p className="text-[#284b63]/80 text-sm">{skill.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Preview Section */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-[#284b63] mb-8">Featured Project</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Web application design',
                description: 'This project tackles loneliness among young adults in Denmark by developing a web app for self-organized events based on shared interests. A questionnaire and interview provided insights into loneliness, guiding the iterative design of low- and high-fidelity prototypes. The final prototype, refined through testing, shaped the web app built with Angular and a MySQL database for user logins. The platform enables users to create, discover, and join events, fostering community and connection.',
                tech: ["JavaScript", "Figma", "User Research", "Prototyping", "Frontend Development", "Angular"],
                image: '/src/assets/Greetly/Homepage.png'
              }
            ].map((project, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-lg shadow-sm overflow-hidden 
                           border border-[#3c6e71]/20 transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative h-48">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 
                             group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#284b63]/60 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-[#284b63] mb-2">{project.title}</h3>
                  <p className="text-[#284b63]/80 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span 
                     key={i}
                     className="px-3 py-1 bg-[#3c6e71]/10 text-[#3c6e71] text-sm rounded-full"
                      >
                      {tech}
                    </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
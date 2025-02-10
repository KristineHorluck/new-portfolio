import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
          <span className="block">Hello, I'm</span>
          <span className="block text-blue-600">Kristine</span>
          <p className='text-xl text-gray-600 mb-8 max-w-2xl'>
            Interaction design student, volunteer and football coach
          </p>
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-2xl">
          Based in Aalborg, Denmark. I study interaction design with both physical and interactive products.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <Link 
            to="/projects" 
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            View my projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Get in Touch
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex gap-6">
          <a 
            href="https://github.com/KristineHorluck" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="h-6 w-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/kristine-h%C3%B8rl%C3%BCck-5b474a210/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a 
            href="https://discordapp.com/users/446029910784344065"
            className="text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Discord"
          >
            <svg
              className='h-6 w-6'
              fill='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.118.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
          </a>
        </div>
      </div>

      {/* Featured Skills Section */}
      <div className="bg-gray-50/50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Featured Skills</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: 'React', description: 'Frontend Development' },
              { name: 'TypeScript', description: 'Type-Safe JavaScript' },
              { name: 'Tailwind CSS', description: 'Utility-First CSS' },
              { name: 'Node.js', description: 'Backend Development' },
              { name: 'Next.js', description: 'React Framework' },
              { name: 'UI/UX Design', description: 'User Experience' },
            ].map((skill) => (
              <div 
                key={skill.name}
                className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-medium text-gray-900">{skill.name}</h3>
                <p className="text-gray-600 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      
      </div>

{/* Projects Section */}
<div id="projects" className="py-16 scroll-mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Example project cards */}
            {[
              {
                title: 'Project 1',
                description: 'Description of project 1',
                tech: ['React', 'TypeScript', 'Tailwind'],
                link: '#'
              },
              {
                title: 'Project 2',
                description: 'Description of project 2',
                tech: ['Next.js', 'Node.js', 'mySQL'],
                link: '#'
              },
              // Add more projects as needed
            ].map((project, index) => (
              <div 
                key={index}
                className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-medium text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 bg-blue-50 text-blue-600 text-sm rounded"
                    >
                      {tech}
                    </span>
                  ))}
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
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projectData';

const ProjectCard = ({ project, isExpanded, onToggle }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-[#3c6e71]/10">
      <div className="cursor-pointer">
        {/* Image Section */}
        <div className="relative h-64 w-full overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#284b63]/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-2xl font-medium text-white mb-2">{project.title}</h3>
            <p className="text-white/90">{project.description}</p>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6" onClick={onToggle}>
          <div className="flex justify-between items-start mb-4">
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
            {isExpanded ? 
              <ChevronUp className="w-6 h-6 text-[#284b63]" /> : 
              <ChevronDown className="w-6 h-6 text-[#284b63]" />
            }
          </div>

          {isExpanded && (
            <div className="mt-6 space-y-4">
              {/* Gallery Section */}
              {project.gallery && (
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {project.gallery.map((image, index) => (
                    <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                      <img 
                        src={image} 
                        alt={`${project.title} gallery ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}

              <div className="text-[#284b63]">{project.longDescription}</div>
              
              {project.features && (
                <div>
                  <h4 className="font-medium text-[#3c6e71] mb-2">Key Features</h4>
                  <ul className="list-disc list-inside space-y-1 text-[#284b63]">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex gap-4 mt-4">
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#3c6e71] hover:text-[#284b63] transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#284b63] hover:text-[#3c6e71] transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectsPage = () => {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#284b63] mb-8">My Projects</h1>
        <div className="space-y-8">
          {projects && projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isExpanded={expandedId === project.id}
              onToggle={() => setExpandedId(expandedId === project.id ? null : project.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
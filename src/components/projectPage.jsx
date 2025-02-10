import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project, isExpanded, onToggle }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
      <div className="cursor-pointer">
        {/* Image Section */}
        <div className="relative h-64 w-full overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
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
                  className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            {isExpanded ? 
              <ChevronUp className="w-6 h-6 text-gray-400" /> : 
              <ChevronDown className="w-6 h-6 text-gray-400" />
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

              <div className="text-gray-700">{project.longDescription}</div>
              
              {project.features && (
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Key Features</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
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
                    className="inline-flex items-center text-blue-600 hover:text-blue-700"
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
                    className="inline-flex items-center text-gray-600 hover:text-gray-800"
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

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management",
      image: "/api/placeholder/800/600",
      gallery: [
        "/api/placeholder/400/300",
        "/api/placeholder/400/300",
        "/api/placeholder/400/300",
        "/api/placeholder/400/300"
      ],
      longDescription: "Built a scalable e-commerce platform featuring user authentication, product management, shopping cart functionality, and order processing. Implemented real-time inventory tracking and automated email notifications.",
      tech: ["React", "Node.js", "MySQL", "Redis"],
      features: [
        "User authentication and authorization",
        "Real-time inventory management",
        "Secure payment processing",
        "Order tracking system"
      ],
      github: "https://github.com/username/e-commerce",
      liveDemo: "https://demo-ecommerce.com"
    },
    {
      id: 2,
      title: "Interactive Dashboard",
      description: "Data visualization dashboard for business analytics",
      image: "/api/placeholder/800/600",
      gallery: [
        "/api/placeholder/400/300",
        "/api/placeholder/400/300",
        "/api/placeholder/400/300",
        "/api/placeholder/400/300"
      ],
      longDescription: "Developed a responsive dashboard that transforms complex data into intuitive visualizations. Features include customizable widgets, real-time updates, and export capabilities.",
      tech: ["React", "TypeScript", "D3.js", "Tailwind CSS"],
      features: [
        "Customizable dashboard layouts",
        "Interactive data visualizations",
        "Real-time data updates",
        "Export to PDF/CSV"
      ],
      github: "https://github.com/username/dashboard",
      liveDemo: "https://demo-dashboard.com"
    },
    {
      id: 3,
      title: "Smart Home IoT Interface",
      description: "User interface for controlling smart home devices",
      image: "/api/placeholder/800/600",
      gallery: [
        "/api/placeholder/400/300",
        "/api/placeholder/400/300",
        "/api/placeholder/400/300",
        "/api/placeholder/400/300"
      ],
      longDescription: "Created an intuitive interface for managing smart home devices, featuring real-time device status updates, automation rules, and energy consumption tracking.",
      tech: ["React", "WebSocket", "Node.js", "MongoDB"],
      features: [
        "Device status monitoring",
        "Automation rule creator",
        "Energy usage analytics",
        "Mobile-responsive design"
      ],
      github: "https://github.com/username/smart-home",
      liveDemo: "https://demo-smarthome.com"
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">My Projects</h1>
        <div className="space-y-8">
          {projects.map((project) => (
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
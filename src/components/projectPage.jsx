import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project, isExpanded, onToggle }) => {
  return (
    <div className="rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-[#3c6e71]/10">
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

  const projects = [
    {
      id: 1,
      title: "Web application design",
      description: "Design and development of a social web application for organizing local activities",
      image: "../Homepage.png",
      gallery: [
        "../EmpathyMap.png",
        "../WireFraming.png",
        "../DesignOption1.png",
        "../Login.png"
      ],
      longDescription: "Developed a comprehensive web application called Greetly, designed to help users organize and participate in local activities. OBS. the database is local, and therefore not available for public use.",
      tech: ["JavaScript", "Figma", "User Research", "Prototyping", "Frontend Development", "Angular"],
      features: [
        "User profile creation and management",
        "Activity creation and discovery",
        "Location-based event search",
        "Interactive user engagement features",
        "Responsive design for all devices",
        "Social networking capabilities"
      ],
      github: "https://github.com/KristineHorluck/Greetly",
    },
    {
      id: 2,
      title: "Physical product design",
      description: "Design and development of a smart home waste sorting product for student apartments",
      image: "../ResultMiniProtoTest.png",
      gallery: [
        "../miniProto.png",
        "../miniProtoTest.png",
        "../physicalProto.png",
        "../insidePhysicalProto.png"
      ],
      longDescription: "Designed and developed a smart home product that helps apartment-living students sort waste properly.",
      tech: ["User Research", "Prototyping", "Physical Product Design", "Interaction Design", "Co-creation", "User centered design"],
      features: [
        "Motivation to waste sorting",
        "Feedback on waste sorting",
        "Easy to use",
        "Interactive design",
        "Designed to be placed all around the house"
      ],
    },
    {
      id: 3,
      title: "Redesign of Travellink Holiday Rentals",
      description: "Made by analysing the potential redesign of holiday rentals on Travellink.dk",
      image: "../Redesign2.png",
      gallery: [
        "../GrafUsabilityProblemsFounds.png",
        "../FIltersOnVacationsTravellinkWebsite.png",
        "../Redesign2.png",
        "../RedesignEvaluation.png"
      ],
      longDescription: "This project were made by analysing the potential redesign of holiday rentals on Travellink.dk, focusing on the application of Nielsen Norman's 10 Usability Heuristics.",
      tech: ["Usability Testing", "UI/UX", "Heuristic Evaluation", "User Research"],
      features: [
        "Improved filter system",
        "Enhanced navigation",
        "User-centered redesign",
        "Streamlined booking process"
      ],
    },
    {
      id: 4,
      title: "Laundry Payment Machine Redesign",
      description: "First unversity project, consisting redesign of the payment interface for payment machine",
      image: "../ATMOversigt.png",
      gallery: [
        "../Steps.png",
        "../GrupperingAfKnapper.png",
        "../Sketch1.png",
        "../OptimisedDesign.png"
      ],
      longDescription: "Redesigned the payment interface to improve user experience and accessibility. The project focused on creating an intuitive, user-friendly interface that accommodates users of all ages and technical backgrounds.",
      tech: ["UI/UX", "Sketching", "Interaction Design"],
      features: [
        "Intuitive payment flow",
        "Accessibility features",
        "Minimising Cognitive load"

      ],
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#284b63] mb-8">My Projects</h1>
        <p className="text-[#284b63]/80 mb-8 italic">
          These projects are only group based projects, since my personal projects still are in the early development phase. 
          I would like to thank Amalie, Ayan, Casper, Daniel, Diem, Frida, Ida, Jennie, Johan, Josefine, Katja, Kristine A and Luna for participating in these projects.
        </p>
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
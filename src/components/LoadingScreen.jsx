import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Target, 
  Calendar, 
  CheckCircle, 
  Layers, 
  ArrowRight,
  BarChart3,
  Lightbulb,
  Zap,
  Sparkles
} from 'lucide-react';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [activeConnections, setActiveConnections] = useState([]);
  const [contextMessage, setContextMessage] = useState('');

  // Context-aware messages
  const getContextMessage = () => {
    const hour = new Date().getHours();
    const isMobile = window.innerWidth < 768;
    
    if (hour >= 22 || hour <= 6) {
      return "Still designing after hours…";
    } else if (isMobile) {
      return "Optimized for thumbs, not clicks.";
    } else {
      return "Hey – you're about to meet an interaction designer who loves when tech meets people just right.";
    }
  };

  // Project phases that showcase design student journey toward PM
  const projectPhases = [
    {
      id: 'discovery',
      title: 'User Research & Discovery',
      subtitle: 'Learning to understand people and their needs',
      icon: Lightbulb,
      color: '#3c6e71',
      tasks: ['User interviews', 'Journey mapping', 'Problem definition', 'Stakeholder insights'],
      duration: 3500
    },
    {
      id: 'planning',
      title: 'Strategic Planning',
      subtitle: 'Developing project management skills',
      icon: Calendar,
      color: '#284b63',
      tasks: ['Project roadmaps', 'Resource planning', 'Timeline creation', 'Risk assessment'],
      duration: 3500
    },
    {
      id: 'design',
      title: 'Interaction Design',
      subtitle: 'Crafting meaningful user experiences',
      icon: Layers,
      color: '#3c6e71',
      tasks: ['Wireframing', 'Prototyping', 'Usability testing', 'Design systems'],
      duration: 3500
    },
    {
      id: 'execution',
      title: 'Leadership & Delivery',
      subtitle: 'Building skills to orchestrate design teams',
      icon: Target,
      color: '#284b63',
      tasks: ['Team collaboration', 'Quality assurance', 'Project delivery', 'Stakeholder communication'],
      duration: 3500
    }
  ];

  useEffect(() => {
    setContextMessage(getContextMessage());
    setShowContent(true);
    
    let phaseTimer;
    let progressTimer;
    let taskTimer;

    const startPhase = (phaseIndex) => {
      if (phaseIndex >= projectPhases.length) {
        // All phases complete - wait a moment then finish
        setTimeout(() => {
          onLoadingComplete();
        }, 1000);
        return;
      }

      const phase = projectPhases[phaseIndex];
      setCurrentPhase(phaseIndex);

      // Animate tasks completion with better spacing
      phase.tasks.forEach((task, taskIndex) => {
        setTimeout(() => {
          setCompletedTasks(prev => [...prev, `${phaseIndex}-${taskIndex}`]);
        }, taskIndex * 700 + 300); // 700ms between tasks, 300ms initial delay
      });

      // Move to next phase
      setTimeout(() => {
        startPhase(phaseIndex + 1);
      }, phase.duration);
    };

    // Start the sequence immediately
    startPhase(0);

    // Progress animation - sync with total duration (4 phases * 2000ms + buffer)
    const totalDuration = projectPhases.reduce((sum, p) => sum + p.duration, 0); // = 14000
    progressTimer = setInterval(() => {
        setProgress(prev => {
            const increment = (100 / totalDuration) * 100; // Per 100ms tick
            const newProgress = prev + increment;
            if (newProgress >= 100) {
                clearInterval(progressTimer); // Stop when done
                return 100;
            }
            return newProgress;
        });
    }, 100);

    return () => {
      clearTimeout(phaseTimer);
      clearInterval(progressTimer);
      clearTimeout(taskTimer);
    };
  }, [onLoadingComplete]);

  const currentPhaseData = projectPhases[currentPhase];
  const CurrentIcon = currentPhaseData?.icon || Lightbulb;

  // Calculate overall progress - ensure it reaches 100%
  const displayProgress = Math.min(progress, 100);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
      {/* Sophisticated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100">
        {/* Dynamic grid that responds to progress */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(60, 110, 113, 0.1) 1px, transparent 1px),
              linear-gradient(rgba(60, 110, 113, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: `${20 + progress * 0.1}px ${20 + progress * 0.1}px`,
            transform: `rotate(${progress * 0.5}deg)`,
            transition: 'all 0.5s ease-out'
          }}
        />
      </div>

      {/* Main Content Container */}
      <div 
        className={`relative z-10 max-w-4xl mx-auto px-8 transition-all duration-1000 transform ${
          showContent ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}
      >
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="mb-6">
            {/* Context-aware greeting */}
            <p className="text-lg text-[#284b63] mb-4 font-medium leading-relaxed">
              {contextMessage}
            </p>
            <p className="text-sm text-[#284b63]/70 italic mb-6">
              (Hang tight… it's worth the wait.)
            </p>
            
            <h1 className="text-4xl font-light text-[#284b63] mb-3 tracking-wide">
              Future Design Leader
            </h1>
            <p className="text-lg text-[#284b63]/70 font-light">
              Student journey toward strategic design management
            </p>
          </div>

          {/* Elegant progress ring */}
          <div className="relative w-32 h-32 mx-auto mb-8">
            <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              {/* Background ring */}
              <circle
                cx="50"
                cy="50"
                r="42"
                stroke="rgba(60, 110, 113, 0.1)"
                strokeWidth="2"
                fill="none"
              />
              {/* Progress ring */}
              <circle
                cx="50"
                cy="50"
                r="42"
                stroke="url(#progressGradient)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={2 * Math.PI * 42}
                strokeDashoffset={2 * Math.PI * 42 * (1 - displayProgress / 100)}
                className="transition-all duration-500 ease-out"
              />
              <defs>
                <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3c6e71" />
                  <stop offset="100%" stopColor="#284b63" />
                </linearGradient>
              </defs>
            </svg>

            {/* Center content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <CurrentIcon 
                className="w-8 h-8 mb-2 transition-all duration-500"
                style={{ color: currentPhaseData?.color }}
              />
              <span className="text-sm font-medium text-[#284b63]">
                {Math.round(displayProgress)}%
              </span>
            </div>
          </div>
        </div>

        {/* Current Phase Display */}
        <div className="text-center mb-12">
          <div 
            key={currentPhase}
            className="transition-all duration-700 transform"
            style={{
              animation: 'fadeInUp 0.7s ease-out'
            }}
          >
            <h2 className="text-2xl font-medium text-[#284b63] mb-2">
              {currentPhaseData?.title}
            </h2>
            <p className="text-[#284b63]/70 mb-6">
              {currentPhaseData?.subtitle}
            </p>

            {/* Task Progress */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-lg mx-auto">
              {currentPhaseData?.tasks.map((task, index) => {
                const isCompleted = completedTasks.includes(`${currentPhase}-${index}`);
                return (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-500 ${
                      isCompleted 
                        ? 'bg-[#3c6e71]/10 text-[#3c6e71]' 
                        : 'bg-gray-50 text-[#284b63]/50'
                    }`}
                    style={{
                      transitionDelay: `${index * 200}ms`
                    }}
                  >
                    <CheckCircle 
                      className={`w-4 h-4 transition-all duration-300 ${
                        isCompleted ? 'text-[#3c6e71] scale-110' : 'text-gray-300'
                      }`}
                    />
                    <span className="text-sm font-medium">{task}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>



        {/* Learning Progress Timeline */}
        <div className="flex justify-center items-center space-x-4 mb-8">
          {projectPhases.map((phase, index) => (
            <React.Fragment key={phase.id}>
              <div
                className={`relative transition-all duration-500 ${
                  index <= currentPhase ? 'scale-110' : 'scale-100'
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index < currentPhase 
                      ? 'bg-[#3c6e71] ring-4 ring-[#3c6e71]/20' 
                      : index === currentPhase
                      ? 'bg-[#284b63] ring-4 ring-[#284b63]/20 animate-pulse'
                      : 'bg-gray-200'
                  }`}
                />
                {index < currentPhase && (
                  <Sparkles className="absolute -top-1 -left-1 w-6 h-6 text-[#3c6e71] animate-pulse" />
                )}
              </div>
              {index < projectPhases.length - 1 && (
                <div 
                  className={`w-8 h-0.5 transition-all duration-500 ${
                    index < currentPhase ? 'bg-[#3c6e71]' : 'bg-gray-200'
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Completion message */}
        {displayProgress > 95 && (
          <div 
            className="text-center transition-all duration-1000"
            style={{
              animation: 'fadeInUp 0.8s ease-out'
            }}
          >
            <div className="flex items-center justify-center space-x-2 text-[#3c6e71] mb-2">
              <Zap className="w-5 h-5" />
              <span className="font-medium">Learning journey in progress</span>
            </div>
            <p className="text-sm text-[#284b63]/70">
              Ready to create meaningful interactions and lead design teams
            </p>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            transform: translateY(20px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ArrowUpRight, X, ChevronDown } from 'lucide-react';

const projects = [
  {
    id: 1,
    number: '01',
    title: 'Web Application Design',
    subtitle: 'Greetly — Social Event Platform',
    description:
      'A web application tackling loneliness among young adults in Denmark by enabling self-organized events based on shared interests.',
    longDescription:
      'Developed a comprehensive web application called Greetly, designed to help users organize and participate in local activities. Built with Angular and a MySQL database for user logins. OBS. the database is local, and therefore not available for public use.',
    tech: ['JavaScript', 'Figma', 'User Research', 'Prototyping', 'Angular', 'MySQL'],
    features: [
      'User profile creation and management',
      'Activity creation and discovery',
      'Location-based event search',
      'Interactive user engagement features',
      'Responsive design for all devices',
      'Social networking capabilities',
    ],
    image: '../Homepage.png',
    gallery: ['../EmpathyMap.png', '../WireFraming.png', '../DesignOption1.png', '../Login.png'],
    github: 'https://github.com/KristineHorluck/Greetly',
    bg: '#e8f0f0',
    accent: '#3c6e71',
  },
  {
    id: 2,
    number: '02',
    title: 'Physical Product Design',
    subtitle: 'Smart Waste Sorting',
    description:
      'A smart home product helping apartment-living students sort waste properly through co-design and user involvement.',
    longDescription:
      'Designed and developed a smart home product that helps apartment-living students sort waste properly. Through user involvement, key challenges were identified, and co-design shaped the design concept.',
    tech: ['User Research', 'Prototyping', 'Physical Design', 'Interaction Design', 'Co-creation'],
    features: [
      'Motivation to waste sorting',
      'Feedback on waste sorting',
      'Easy to use',
      'Interactive design',
      'Designed to be placed all around the house',
    ],
    image: '../ResultMiniProtoTest.png',
    gallery: ['../miniProto.png', '../miniProtoTest.png', '../physicalProto.png', '../insidePhysicalProto.png'],
    bg: '#e6ecf0',
    accent: '#284b63',
  },
  {
    id: 3,
    number: '03',
    title: 'Travellink Redesign',
    subtitle: 'Holiday Rentals UX',
    description:
      "A heuristic-driven redesign of Travellink.dk holiday rentals, focused on Nielsen Norman's 10 Usability Heuristics.",
    longDescription:
      "This project was made by analysing the potential redesign of holiday rentals on Travellink.dk, focusing on the application of Nielsen Norman's 10 Usability Heuristics.",
    tech: ['Usability Testing', 'UI/UX', 'Heuristic Evaluation', 'User Research', 'Figma'],
    features: [
      'Improved filter system',
      'Enhanced navigation',
      'User-centered redesign',
      'Streamlined booking process',
    ],
    image: '../Redesign2.png',
    gallery: ['../GrafUsabilityProblemsFounds.png', '../FIltersOnVacationsTravellinkWebsite.png', '../Redesign2.png', '../RedesignEvaluation.png'],
    bg: '#e8f0f0',
    accent: '#3c6e71',
  },
  {
    id: 4,
    number: '04',
    title: 'Laundry Machine Redesign',
    subtitle: 'Payment Interface UX',
    description:
      'Redesigned the payment interface of a laundry machine to improve accessibility and reduce cognitive load for all users.',
    longDescription:
      'Redesigned the payment interface to improve user experience and accessibility. The project focused on creating an intuitive, user-friendly interface that accommodates users of all ages and technical backgrounds.',
    tech: ['UI/UX', 'Sketching', 'Interaction Design', 'Accessibility'],
    features: ['Intuitive payment flow', 'Accessibility features', 'Minimising cognitive load'],
    image: '../ATMOversigt.png',
    gallery: ['../Steps.png', '../GrupperingAfKnapper.png', '../Sketch1.png', '../OptimisedDesign.png'],
    bg: '#e6ecf0',
    accent: '#284b63',
  },
  {
    id: 5,
    number: '05',
    title: 'Submarine Escape Room',
    subtitle: 'Arduino Interactive Experience',
    description:
      'An immersive escape room set in a submarine, using Arduino to create interactive puzzles that engage participants in teamwork.',
    longDescription:
      'Designed and built an immersive escape room experience set in a submarine, utilizing Arduino to create interactive puzzles and challenges that engage participants in problem-solving and teamwork.',
    tech: ['Arduino', 'Physical Prototyping', 'Interaction Design', 'Experience Design'],
    features: [
      'Arduino-powered interactive puzzles',
      'Immersive submarine narrative',
      'Team-based challenges',
      'Physical and digital integration',
    ],
    image: '../Escape room - 2.png',
    gallery: ['../Ubåd FLOWCHART(1).jpg', '../Blow out the cigarette puzzle in the suitecase.png', '../BlowOutTheCigarette Overview.png', '../Box in suitcase.jpg'],
    bg: '#e8f0f0',
    accent: '#3c6e71',
  },
];

export default function ProjectsPage() {
  const [current, setCurrent] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Throttle ref: tracks when the last navigation happened
  const lastNavigatedAt = useRef(0);
  // Accumulated delta for trackpad resistance
  const accumulatedDelta = useRef(0);

  const touchStartY = useRef(null);
  const touchStartX = useRef(null);

  // Hide navbar when past first project
  useEffect(() => {
    if (current > 0) {
      document.body.classList.add('hide-navbar');
    } else {
      document.body.classList.remove('hide-navbar');
    }
    return () => document.body.classList.remove('hide-navbar');
  }, [current]);

  const navigate = useCallback(
    (dir) => {
      if (isTransitioning) return;
      const next = current + dir;
      if (next < 0 || next >= projects.length) return;
      setIsTransitioning(true);
      setCurrent(next);
      // Reset accumulated delta after a successful navigation
      accumulatedDelta.current = 0;
      setTimeout(() => setIsTransitioning(false), 700);
    },
    [current, isTransitioning]
  );

  // Scroll wheel — throttled + accumulated delta threshold to prevent runaway firing
  useEffect(() => {
    const THROTTLE_MS = 800;       // minimum ms between navigations
    const DELTA_THRESHOLD = 50;    // how much scroll accumulation triggers a step

    const onWheel = (e) => {
      e.preventDefault();

      const now = Date.now();

      // Ignore if we navigated too recently
      if (now - lastNavigatedAt.current < THROTTLE_MS) return;

      accumulatedDelta.current += e.deltaY;

      if (Math.abs(accumulatedDelta.current) >= DELTA_THRESHOLD) {
        const dir = accumulatedDelta.current > 0 ? 1 : -1;
        lastNavigatedAt.current = now;
        accumulatedDelta.current = 0;
        navigate(dir);
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    return () => window.removeEventListener('wheel', onWheel);
  }, [navigate]);

  // Keyboard
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') navigate(1);
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') navigate(-1);
      if (e.key === 'Escape') setShowModal(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [navigate]);

  // Touch swipe — requires at least 60px swipe to trigger
  const onTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStartY.current === null) return;
    const dy = touchStartY.current - e.changedTouches[0].clientY;
    const dx = touchStartX.current - e.changedTouches[0].clientX;
    const SWIPE_THRESHOLD = 60;
    if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > SWIPE_THRESHOLD) {
      navigate(dy > 0 ? 1 : -1);
    } else if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > SWIPE_THRESHOLD) {
      navigate(dx > 0 ? 1 : -1);
    }
    touchStartY.current = null;
    touchStartX.current = null;
  };

  const project = projects[current];

  return (
    <div
      className="fixed inset-0 overflow-hidden"
      style={{ top: 64 }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Crossfading background layers */}
      {projects.map((p, i) => (
        <motion.div
          key={p.id}
          className="absolute inset-0"
          animate={{ opacity: i === current ? 1 : 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          style={{ background: p.bg, zIndex: 0 }}
        />
      ))}

      {/* Crossfading image panels */}
      {projects.map((p, i) => (
        <motion.div
          key={`img-${p.id}`}
          className="absolute inset-0 z-0"
          animate={{ opacity: i === current ? 1 : 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        >
          <div className="absolute right-0 top-0 bottom-0 w-full md:w-3/5 overflow-hidden">
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-full object-cover"
              style={{ opacity: 0.25 }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to right, ${p.bg} 0%, ${p.bg}99 30%, transparent 100%)`,
              }}
            />
          </div>
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 max-w-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Number */}
            <div
              className="text-8xl font-black mb-2 select-none leading-none"
              style={{ color: project.accent, opacity: 0.12 }}
            >
              {project.number}
            </div>

            {/* Subtitle */}
            <p
              className="text-xs font-bold uppercase tracking-[0.25em] mb-3"
              style={{ color: project.accent, opacity: 0.6 }}
            >
              {project.subtitle}
            </p>

            {/* Title */}
            <h2
              className="text-4xl md:text-5xl font-bold mb-5 leading-tight"
              style={{ color: project.accent }}
            >
              {project.title}
            </h2>

            {/* Description */}
            <p className="text-base leading-relaxed mb-6 max-w-lg" style={{ color: project.accent, opacity: 0.75 }}>
              {project.description}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-medium rounded-full"
                  style={{
                    background: `${project.accent}18`,
                    color: project.accent,
                    border: `1px solid ${project.accent}30`,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => { setShowModal(true); setGalleryIndex(0); }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{ background: project.accent }}
              >
                Explore Project
                <ArrowUpRight className="w-4 h-4" />
              </button>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-100"
                  style={{ color: project.accent, opacity: 0.55 }}
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot navigation — vertical */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setCurrent(i);
                accumulatedDelta.current = 0;
                lastNavigatedAt.current = Date.now();
                setTimeout(() => setIsTransitioning(false), 700);
              }
            }}
            className="flex items-center justify-center"
            aria-label={`Go to project ${i + 1}`}
          >
            <motion.div
              animate={{
                height: i === current ? 28 : 6,
                opacity: i === current ? 1 : 0.35,
              }}
              transition={{ duration: 0.3 }}
              className="w-1.5 rounded-full"
              style={{ background: project.accent }}
            />
          </button>
        ))}
      </div>

      {/* Scroll hint */}
      <AnimatePresence>
        {current === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1"
            style={{ color: project.accent, opacity: 0.4 }}
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.4 }}
            >
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Counter */}
      <div
        className="absolute bottom-6 right-6 z-20 text-xs font-bold tabular-nums"
        style={{ color: project.accent, opacity: 0.4 }}
      >
        {String(current + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(40,75,99,0.55)', backdropFilter: 'blur(10px)' }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 24 }}
              animate={{ scale: 1, opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] } }}
              exit={{ scale: 0.92, opacity: 0, y: 24, transition: { duration: 0.25 } }}
              className="bg-white rounded-2xl shadow-2xl max-w-xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Gallery image */}
              <div className="relative h-52 rounded-t-2xl overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={galleryIndex}
                    src={project.gallery?.[galleryIndex] || project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>
                <div
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(to top, ${project.accent}cc, transparent 60%)` }}
                />
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Thumbnails */}
              {project.gallery && (
                <div className="flex gap-2 px-5 pt-3 overflow-x-auto">
                  {project.gallery.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setGalleryIndex(i)}
                      className={`flex-none w-14 h-10 rounded-lg overflow-hidden border-2 transition-all ${
                        i === galleryIndex ? 'border-[#3c6e71]' : 'border-transparent opacity-50 hover:opacity-80'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              <div className="p-5">
                <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: project.accent, opacity: 0.6 }}>
                  {project.subtitle}
                </p>
                <h3 className="text-2xl font-bold mb-3" style={{ color: project.accent }}>{project.title}</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: project.accent, opacity: 0.75 }}>
                  {project.longDescription}
                </p>

                {project.features && (
                  <div className="mb-5">
                    <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: project.accent }}>
                      Key Features
                    </p>
                    <ul className="space-y-1.5">
                      {project.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm" style={{ color: project.accent, opacity: 0.75 }}>
                          <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-none" style={{ background: project.accent }} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 text-xs rounded-full font-medium"
                      style={{ background: `${project.accent}15`, color: project.accent }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold transition-all hover:scale-105"
                    style={{ background: project.accent }}
                  >
                    <Github className="w-4 h-4" />
                    View on GitHub
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
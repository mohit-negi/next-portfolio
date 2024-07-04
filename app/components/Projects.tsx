'use client';

import { useState, useEffect } from 'react';
import { urlFor } from '@/sanity/lib/client';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/utils/types';

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   if (projects.length > 0) {
  //     setIsLoading(false);
  //   }
  // }, [projects]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 5000);
  
    return () => clearInterval(interval);
  }, [projects.length]);

  const handleManualNavigation = (direction: 'left' | 'right') => {
    setCurrentIndex((prevIndex) => {
      if (direction === 'left') {
        return (prevIndex - 1 + projects.length) % projects.length;
      } else {
        return (prevIndex + 1) % projects.length;
      }
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen relative flex flex-col justify-center items-center px-4 py-16 md:py-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 opacity-20 transform scale-[0.80] rounded-full blur-3xl" />

      <h3 className="mb-8 md:mb-12 uppercase tracking-[10px] md:tracking-[20px] text-gray-500 text-lg md:text-2xl">
        projects
      </h3>

      <div className="relative w-full max-w-4xl">
        <button 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-30 text-white text-4xl bg-black bg-opacity-30 rounded-full p-2"
          onClick={() => handleManualNavigation('left')}
        >
          &#8249;
        </button>

        <button 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-30 text-white text-4xl bg-black bg-opacity-30 rounded-full p-2"
          onClick={() => handleManualNavigation('right')}
        >
          &#8250;
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.3 }} 
            className="flex flex-col items-center space-y-4 md:space-y-6"
          >
            <h4 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center text-white">
              <span className="text-sm md:text-base lg:text-lg font-normal block mb-2">
                Project {currentIndex + 1} of {projects.length}
              </span>
              {projects[currentIndex].title}
            </h4>

            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
              {projects[currentIndex].technologies &&
                projects[currentIndex].technologies.map((technology) => (
                  <Image
                    className="w-6 h-6 md:w-8 md:h-8 object-contain"
                    key={technology._id}
                    width={32}
                    height={32}
                    src={urlFor(technology.image).url()}
                    alt={technology.title}
                  />
                ))}
            </div>

            <div className="max-h-48 md:max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 pr-2">
              <p className="text-sm md:text-base text-center max-w-2xl text-white">
                {projects[currentIndex].summary}
              </p>
            </div>

            {projects[currentIndex].linkToBuild && (
              <Link
                href={projects[currentIndex].linkToBuild}
                target="_blank"
                className="text-[#F7AB0A] underline text-base md:text-lg hover:text-[#F7AB0A]/80 transition-colors duration-200 mt-2"
              >
                View Project
              </Link>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Projects;
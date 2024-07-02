'use client';

import { urlFor } from '@/sanity/lib/client';
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
} from 'framer-motion';
import './Projects.css';
import Image from 'next/image';
import { LinkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import Link from 'next/link';
import { Project } from '@/utils/types';

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  const motionValue = useMotionValue(0);
  const [animationComplete, setAnimationComplete] = useState(false);

  useMotionValueEvent(motionValue, 'animationStart', () => {
    setAnimationComplete(false);
  });

  useMotionValueEvent(motionValue, 'animationComplete', () => {
    setAnimationComplete(true);
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden text-left max-w-full justify-evenly items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center pt-10 lg:pt-20 px-10 h-screen"
          >
            <div className="relative">
              <motion.img
                style={{ y: motionValue }}
                initial={{ y: -200, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src={urlFor(project.image).url()}
                alt={project.title}
                className="object-cover w-[360px] h-[200px] lg:w-[450px] lg:h-[250px]"
              />
              {animationComplete && project.linkToBuild && (
                <Link
                  href={project.linkToBuild}
                  target="_blank"
                  className="absolute flex items-center justify-center top-0 opacity-0 hover:opacity-100 bg-black/70 transition-opacity duration-150 ease-in w-full h-full z-2 cursor-pointer"
                >
                  <LinkIcon className="w-10 h-10" />
                </Link>
              )}
            </div>

            <div className="flex flex-col items-center space-y-5 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>{' '}
                {project.title}
              </h4>

              <div className="flex items-center space-x-2 justify-center">
                {project.technologies &&
                  project.technologies.map((technology) => (
                    <Image
                      className="h-10 w-10 object-contain"
                      key={technology._id}
                      width={500}
                      height={500}
                      src={urlFor(technology.image).url()}
                      alt={technology.title}
                    />
                  ))}
              </div>

              <p className="summary overflow-hidden text-justify text-sm md:text-base lg:text-lg md:text-left max-w-4xl">
                {project.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;

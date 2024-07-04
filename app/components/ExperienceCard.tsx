import { urlFor } from '@/sanity/lib/client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Experience } from '@/utils/types';

type Props = { experience: Experience };

const ExperienceCard = ({ experience }: Props) => {
  return (
    <motion.article 
      className="flex flex-col rounded-lg items-center space-y-4 sm:space-y-7 w-full snap-center bg-gradient-to-br from-blue-400/10 to-teal-400/10 p-5 backdrop-blur-sm hover:backdrop-blur-md cursor-pointer transition-all duration-300 overflow-hidden border border-blue-500/20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >

      <div className="px-0 w-full">
        <h4 className="text-xl sm:text-2xl font-semibold text-teal-400">
          {experience.jobTitle}
        </h4>
        <p className="font-bold text-base sm:text-lg mt-1 text-blue-300">
          {experience.company}
        </p>
        <div className="flex space-x-2 my-2">
          {/* {experience?.technologies?.map((technology) => (
            <Image
              key={technology._id}
              width={500}
              height={500}
              className="h-8 w-8 object-contain sm:h-10 sm:w-10 lg:w-12 lg:h-12 rounded-full bg-blue-100/10 p-1"
              src={urlFor(technology.image).url()}
              alt={technology.title}
            />
          ))} */}
        </div>
        <p className="uppercase py-3 text-sm text-gray-400">
          {new Date(experience.dateStarted).toDateString()} -{' '}
          {experience.isCurrentlyWorkingHere
            ? 'Present'
            : experience.dateEnded
              ? new Date(experience.dateEnded).toDateString()
              : 'Date not available'}
        </p>

        <ul className="list-disc list-outside text-sm space-y-2 max-h-64 overflow-y-auto scrollbar-thin scrollbar-track-blue-100/10 scrollbar-thumb-teal-500/50 pr-4">
          {experience?.points?.map((point, i) => (
            <li className="text-gray-300" key={i}>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
};

export default ExperienceCard;
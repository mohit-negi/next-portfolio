"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import ExperienceCard from "./ExperienceCard"
import { Experience } from "@/utils/types";
import { useRef } from "react";

type Props = {
  experiences: Experience[];
};
const mockExperiences = [
	{
	  _id: "1",
	  _type: "experience",
	  jobTitle: "Frontend Developer",
	  companyImage: { url: "https://www.shutterstock.com/shutterstock/photos/2470972255/display_1500/stock-photo-realistic-banner-background-comparing-two-saudi-companies-modern-corporate-office-setting-sleek-2470972255.jpg" },
	  company: "Tech Corp",
	  dateStarted: "2020-01-15T00:00:00.000Z",
	  dateEnded: "2022-06-30T00:00:00.000Z",
	  isCurrentlyWorkingHere: false,
	  technologies: [
		{ name: "JavaScript", level: "Advanced" },
		{ name: "React", level: "Advanced" },
		{ name: "CSS", level: "Advanced" },
	  ],
	  points: [
		"Developed and maintained the frontend of the company's main web application.",
		"Implemented responsive design for better mobile experience.",
		"Collaborated with backend developers to integrate APIs."
	  ]
	},
	{
	  _id: "2",
	  _type: "experience",
	  jobTitle: "Software Engineer",
	  companyImage: { url: "https://www.shutterstock.com/shutterstock/photos/2470973397/display_1500/stock-photo-realistic-banner-background-comparing-two-saudi-companies-modern-corporate-office-setting-sleek-2470973397.jpg" },
	  company: "Dev Solutions",
	  dateStarted: "2018-03-01T00:00:00.000Z",
	  dateEnded: "2019-12-31T00:00:00.000Z",
	  isCurrentlyWorkingHere: false,
	  technologies: [
		{ name: "Java", level: "Intermediate" },
		{ name: "Spring Boot", level: "Intermediate" },
		{ name: "MySQL", level: "Intermediate" },
	  ],
	  points: [
		"Designed and developed RESTful APIs using Spring Boot.",
		"Optimized database queries to improve performance.",
		"Participated in code reviews and agile development processes."
	  ]
	},
	{
	  _id: "3",
	  _type: "experience",
	  jobTitle: "Full Stack Developer",
	  companyImage: { url: "https://www.shutterstock.com/shutterstock/photos/2480319021/display_1500/stock-photo-bright-blue-and-green-colour-business-company-2480319021.jpg" },
	  company: "Web Innovations",
	  dateStarted: "2022-07-01T00:00:00.000Z",
	  dateEnded: null,
	  isCurrentlyWorkingHere: true,
	  technologies: [
		{ name: "JavaScript", level: "Advanced" },
		{ name: "React", level: "Advanced" },
		{ name: "Node.js", level: "Intermediate" },
		{ name: "MongoDB", level: "Intermediate" },
	  ],
	  points: [
		"Developing scalable web applications with a focus on user experience.",
		"Implementing server-side logic and database management.",
		"Leading a team of developers in an agile environment."
	  ]
	}
  ];
  
const WorkExperience = ({ experiences }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <motion.div
      ref={containerRef}
      style={{ opacity, scale }}
      className="min-h-screen flex flex-col relative overflow-hidden text-left max-w-full mx-2 sm:mx-10 justify-center items-center"
    >
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 opacity-10 transform scale-[0.80] rounded-full blur-3xl" />

      <h3 className="text-2xl md:text-3xl font-bold mb-10 uppercase tracking-[10px] text-gray-300 z-10">
        Experience
      </h3>

      <motion.div 
        className="w-full flex flex-col space-y-5 overflow-y-auto max-h-[70vh] p-2 scrollbar-thin scrollbar-track-blue-100 scrollbar-thumb-teal-500"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8}}
		viewport={{ once: true }}

      >
        {experiences?.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default WorkExperience;
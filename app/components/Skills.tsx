"use client";

import { Skill } from "@/utils/types";
import { motion } from "framer-motion";
import SkillComp from "./SkillComp";

type Props = {
	skills: Skill[];
};

const Skills = ({ skills }: Props) => {
	return (
		<div className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 h-screen justify-center items-center">
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				Skills
			</h3>

			<h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
				Hover over a skill for currency proficiency
			</h3>

			<motion.div
				initial={{ opacity: 0, y: 200 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				viewport={{ once: true }}
				className="mt-20 grid grid-cols-4 gap-5"
			>
				{skills.map((skill) => (
					<SkillComp key={skill._id} skill={skill} />
				))}
			</motion.div>
		</div>
	);
};

export default Skills;

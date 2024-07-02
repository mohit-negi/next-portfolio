"use client";

import { motion } from "framer-motion";
import { Skill } from "@/utils/types";
import SkillComp from "./SkillComp";

type Props = {
	skills: Skill[];
	xValue: number;
};

const SkillsRows = ({ skills, xValue }: Props) => {
	return (
		<motion.div
			initial={{
				x: xValue,
				opacity: 0,
			}}
			transition={{ duration: 1 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true }}
			className="grid grid-cols-4 gap-5"
		>
			{skills.map((skill) => (
				<SkillComp key={skill._id} skill={skill} />
			))}
		</motion.div>
	);
};

export default SkillsRows;

import { urlFor } from "@/sanity/lib/client";
import { motion } from "framer-motion";
import Image from "next/image";
import "./ExperienceCard.css";
import { Experience } from "@/utils/types";

type Props = { experience: Experience };

const ExperienceCard = ({ experience }: Props) => {
	return (
		<article className="flex flex-col rounded-lg items-center space-y-4 sm:space-y-7 flex-shrink-0 w-full lg:w-[800px] xl:w-[900px] snap-center bg-[#292929] p-5 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
			<motion.img
				initial={{
					y: -100,
					opacity: 0,
				}}
				transition={{ duration: 1.2 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className="w-20 h-20 rounded-full xl:w-32 xl:h-32 object-contain"
				src={urlFor(experience.companyImage).url()}
			/>

			<div className="px-0">
				<h4 className="text-xl sm:text-2xl font-light">
					{experience.jobTitle}
				</h4>
				<p className="font-bold text-base sm:text-base mt-1">
					{experience.company}
				</p>
				<div className="flex space-x-2 my-2">
					{experience?.technologies?.map((technology) => (
						<Image
							key={technology._id}
							width={500}
							height={500}
							className="h-8 w-8 object-contain sm:h-10 sm:w-10 lg:w-12 lg:h-12 rounded-full"
							src={urlFor(technology.image).url()}
							alt={technology.title}
						/>
					))}
				</div>
				<p className="uppercase py-5 text-sm text-gray-300">
					{new Date(experience.dateStarted).toDateString()} -{" "}
					{experience.isCurrentlyWorkingHere
						? "Present"
						: new Date(experience.dateEnded).toDateString()}
				</p>

				<ul className="list-disc list-outside text-xs md:text-sm space-y-4 max-h-96 overflow-y-auto scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80">
					{experience?.points?.map((point, i) => (
						<li className="text text-justify" key={i}>
							{point}
						</li>
					))}
				</ul>
			</div>
		</article>
	);
};

export default ExperienceCard;

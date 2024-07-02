
import { Skill } from "@/utils/types";
import { urlFor } from "@/sanity/lib/client";

type Props = {
	skill: Skill;
};

const SkillComp = ({ skill }: Props) => {
	return (
		<div className="relative group flex cursor-pointer">
			{skill.image && <img
				src={urlFor(skill.image).url()}
				className="rounded-full border border-gray-500 object-cover w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 filter group-hover:grayscale transition duration-300 ease-in-out"
			/>}
			<div className="absolute opacity-0 group-hover:opacity-80 transition duration-200 ease-in-out group-hover:bg-white w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full z-0">
				<div className="flex items-center justify-center h-full">
					<p className="text-xl sm:text-2xl md:text-3xl font-bold text-black opacity-100">
						{skill.progress}%
					</p>
				</div>
			</div>
		</div>
	);
};

export default SkillComp;

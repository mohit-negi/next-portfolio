import { Skill } from "@/utils/types";
import { urlFor } from "@/sanity/lib/client";
import Image from "next/image";

type Props = {
  skill: Skill;
};

const SkillComp = ({ skill }: Props) => {
  return (
    <div className="flex flex-col items-center group">
      <div className="relative w-20 h-23 md:w-28 md:h-32 mb-2 transition-all duration-300 ease-in-out group-hover:shadow-lg">
        <div className="h-full w-full relative overflow-hidden p-10" style={{clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"}}>
          {skill.image && (
            <Image
              src={urlFor(skill.image).url()}
              alt={skill.title || "Skill image"}
              layout="fill"
            //   objectFit="cover"
              className="group-hover:scale-110 transition-transform duration-300 ease-in-out "
            />
          )}
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
          <div className="bg-black bg-opacity-70 px-3 py-1 rounded">
            <p className="text-white font-semibold text-sm md:text-base">
              {skill.progress}%
            </p>
          </div>
        </div>
      </div>
      <p className="text-center text-sm font-medium text-gray-400 group-hover:text-primary-600 transition-colors duration-300">
        {skill.title}
      </p>
    </div>
  );
};

export default SkillComp;
"use client";

import { urlFor } from "@/sanity/lib/client";
import { PageInfo } from "@/utils/types";
import { motion } from "framer-motion";

type Props = {
	pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
		>
			<h3 className="absolute top-20 sm:top-24 uppercase tracking-[20px] -mr-[20px] text-gray-500 text-2xl">
				About
			</h3>

			<motion.img
				initial={{ x: -200, opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				transition={{ duration: 1.2 }}
				viewport={{ once: true }}
				src={urlFor(pageInfo.profilePic).url()}
				className="mt-10 sm:mt-20 -mb-20 md:mb-0 flex-shrink-0 w-40 h-40 rounded-full object-cover object-top md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[500px] xl:object-cover"
			/>

			<div className="space-y-5 sm:space-y-10 px-0 md:px-10">
				<h4 className="text-2xl sm:text-4xl font-semibold whitespace-nowrap">
					Here is a{" "}
					<span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
					background
				</h4>
				<p className="text-xs text-justify sm:text-center md:text-sm lg:text-base">
					{pageInfo.backgroundInformation}
				</p>
			</div>
		</motion.div>
	);
};

export default About;

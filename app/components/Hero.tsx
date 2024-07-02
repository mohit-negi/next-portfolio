"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PageInfo } from "@/utils/types";
import { urlFor } from "@/sanity/lib/client";

type Props = {
	pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
	const [text, count] = useTypewriter({
		words: [
			`Hi, The Name's ${pageInfo.name}`,
			"Guy-who-loves-Coffee.tsx",
			"<ButLovesToCodeMore />",
		],
		loop: true,
		delaySpeed: 2000,
	});

	return (
		<motion.div
			initial={{ opacity: 0 }}
			transition={{ duration: 1.2 }}
			whileInView={{ opacity: 1 }}
			className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden"
		>
			<BackgroundCircles />
			<Image
				className="relative rounded-full h-32 w-32 mx-auto object-cover"
				height={400}
				width={400}
				src={urlFor(pageInfo.heroImage).url()}
				alt="hero image"
			/>

			<div className="z-20 flex flex-col items-center">
				<h2 className="text-sm md:text-base lg:text-lg uppercase text-gray-500 pb-5 tracking-[8px] md:tracking-[12px] lg:tracking-[15px]">
					{pageInfo.role}
				</h2>

				<h1 className="flex items-center">
					<span className="mr-1 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
						{text}
					</span>
					<Cursor
						cursorColor="#F7AB0A"
						cursorStyle={
							<div className="inline text-2xl md:text-3xl lg:text-4xl xl:text-6xl">
								|
							</div>
						}
					/>
				</h1>

				<div className="pt-10">
					<Link href="#about">
						<button className="heroButton">About</button>
					</Link>
					<Link href="#experience">
						<button className="heroButton">Experience</button>
					</Link>
					<Link href="#skills">
						<button className="heroButton">Skills</button>
					</Link>
					<Link href="#projects">
						<button className="heroButton">Projects</button>
					</Link>
				</div>
			</div>
		</motion.div>
	);
};

export default Hero;

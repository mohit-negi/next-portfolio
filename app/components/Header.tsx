"use client";

import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Social } from "@/utils/types";

type Props = {
	socials: Social[];
};

const Header = ({ socials }: Props) => {
	return (
		<header className="sticky bg-[rgb(36,36,36)] top-0 z-20 p-5">
			<div className="flex items-start justify-between max-w-7xl mx-auto xl:items-center">
				<motion.div
					initial={{ x: -500, opacity: 0, scale: 0.5 }}
					animate={{ x: 0, opacity: 1, scale: 1 }}
					transition={{
						duration: 1.5,
					}}
					className="flex items-center"
				>
					{socials.map((social) => (
						<SocialIcon
							key={social._id}
							url={social.url}
							fgColor="gray"
							bgColor="transparent"
							target="_blank"
							className="!h-[40px] !w-[40px] sm:!h-[50px] sm:!w-[50px]"
						/>
					))}
				</motion.div>

				<motion.div
					initial={{ x: 500, opacity: 0, scale: 0.5 }}
					animate={{ x: 0, opacity: 1, scale: 1 }}
					transition={{
						duration: 1.5,
					}}
					className="flex items-center cursor-pointer"
				>
					<SocialIcon
						url="#contact"
						network="email"
						className="cursor-pointer !h-[40px] !w-[40px] sm:!h-[50px] sm:!w-[50px]"
						fgColor="gray"
						bgColor="transparent"
					/>
					<p className="uppercase hidden md:inline-flex text-sm text-gray-400">
						Get In Touch
					</p>
				</motion.div>
			</div>
		</header>
	);
};

export default Header;

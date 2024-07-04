"use client";

import { PageInfo } from "@/utils/types";
import { motion } from "framer-motion";

type Props = {
    pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
    // Memoize the Meteors component
    
    return (
        <div className="relative flex flex-col items-center py-20 bg-gray-900 overflow-hidden">
<div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 opacity-10 transform scale-[0.80] rounded-full blur-3xl" />
        
            <h3 className="uppercase tracking-[20px] text-gray-500 text-4xl mb-10 relative z-10">
                About
            </h3>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 flex flex-col md:flex-row max-w-7xl px-10 justify-between mx-auto items-center rounded-2xl shadow-2xl overflow-hidden bg-gray-800/50 backdrop-blur-md border border-gray-700"
            >
                <div className="space-y-5 md:space-y-10 px-8 py-12 md:px-12 max-w-3xl">
                    <h4 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                        Here is a{" "}
                        <span className="underline decoration-yellow-900">little</span>{" "}
                        background
                    </h4>
                    <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
                        {pageInfo.backgroundInformation}
                    </p>
                    <div className="mt-8">
                        <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full text-sm font-semibold hover:from-blue-600 hover:to-teal-600 transition-colors duration-300 cursor-pointer">
                            Learn More
                        </span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default About;
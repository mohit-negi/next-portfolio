// components/Hero.tsx
"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
import { motion } from "framer-motion";
import { PageInfo } from "@/utils/types";
import { urlFor } from "@/sanity/lib/client";
import { Meteors } from "./Meteors";

type Props = {
  pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
  const [text] = useTypewriter({
    words: [
      `Hi, The Name's ${pageInfo.name}`,
      "Guy-who-loves-Coffee.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 20000,
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1 }}
      className="relative h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden bg-gray-900"
    >
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 opacity-20 transform scale-[0.80] rounded-full blur-3xl" />
      <div className="relative z-10">
        <Image
          className="rounded-full h-32 w-32 mx-auto object-cover"
          height={400}
          width={400}
          src={urlFor(pageInfo.heroImage).url()}
          alt="hero image"
        />

        <div className="z-20 flex flex-col items-center mt-4">
          <h2 className="text-sm md:text-base lg:text-lg uppercase text-gray-500 pb-5 tracking-[8px] md:tracking-[12px] lg:tracking-[15px]">
            {pageInfo.role}
          </h2>

          <h1 className="flex items-center text-white">
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
        </div>
      </div>
      <Meteors number={20} />
    </motion.div>
  );
};

export default Hero;
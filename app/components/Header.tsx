"use client";

import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Social } from "@/utils/types";
import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {
  socials: Social[];
};

const Header = ({ socials }: Props) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    setIsMounted(true);

    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY) { // scroll down
          setIsVisible(false);
        } else { // scroll up
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // Cleanup
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  if (!isMounted) {
    return null;
  }

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-20 transition-all duration-300 ease-in-out p-3 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-b-2xl shadow-lg p-8">
          <motion.div
            initial={{ x: -500, opacity: 0, scale: 0.5 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="flex items-center space-x-2"
          >
            {socials.map((social) => (
              <SocialIcon
                key={social._id}
                url={social.url}
                fgColor="white"
                bgColor="transparent"
                target="_blank"
                className="hover:opacity-75 transition-opacity duration-200 !h-8 !w-8 sm:!h-10 sm:!w-10"
              />
            ))}
          </motion.div>

          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="hidden md:flex space-x-4"
          >
            {["about", "experience", "skills", "projects"].map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </motion.nav>

          <motion.div
            initial={{ x: 500, opacity: 0, scale: 0.5 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="flex items-center"
          >
            <Link
              href="#contact"
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
            >
              <SocialIcon
                network="email"
                fgColor="currentColor"
                bgColor="transparent"
                className="cursor-pointer !h-8 !w-8 sm:!h-10 sm:!w-10"
              />
              <span className="hidden md:inline text-sm font-medium">
                Get In Touch
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
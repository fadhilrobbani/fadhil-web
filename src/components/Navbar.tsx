import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-20 mx-auto flex max-w-7xl items-start justify-between p-5 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          fgColor="gray"
          bgColor="transparent"
          url="https://www.linkedin.com/in/fadhillailham/"
        />
        <SocialIcon
          fgColor="gray"
          bgColor="transparent"
          url="https://github.com/fadhilrobbani"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex cursor-pointer flex-row items-center"
      >
        <SocialIcon
          className="cursor-pointer"
          fgColor="gray"
          bgColor="transparent"
          network="email"
        />

        <p className="hidden text-sm uppercase text-gray-400 md:inline-flex">
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
};

export default Navbar;

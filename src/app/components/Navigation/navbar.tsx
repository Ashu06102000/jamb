"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { navlogo } from "../../data/mock-data";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4 xl:py-8 px-3 xl:px-0 max-w-1436 mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          layout="intrinsic"
          alt="Company Logo"
          src={navlogo.logo}
          width={108}
          height={45}
          className="cursor-pointer"
        />
      </motion.div>

      <div className="flex gap-6 items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <Image
            alt="Search Icon"
            src="/assets/search-icon.svg"
            width={24}
            height={26}
            className="cursor-pointer"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <Image
            alt="Mail Icon"
            src="/assets/mail-icon.svg"
            width={32}
            height={22}
            className="cursor-pointer"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <Image
            alt="Hamburger Menu Icon"
            src="/assets/hamburger-icon.svg"
            width={32}
            height={22}
            className="cursor-pointer"
          />
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
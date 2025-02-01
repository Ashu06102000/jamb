"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { navlogo } from "../../data/mock-data";

const Navbar = () => {
  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className="flex items-center justify-between py-4 xl:py-8 px-3 xl:px-0 max-w-1436 mx-auto"
    >
      <Image
        layout="intrinsic"
        alt="Company Logo"
        src={navlogo.logo}
        width={108}
        height={45}
        className="cursor-pointer"
        aria-label="Company Logo jamb"
      />

      <div className="flex gap-6 items-center">
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          <Image
            alt="Search Icon"
            src="/assets/search-icon.svg"
            width={24}
            height={26}
            className="cursor-pointer"
            aria-label="Search"
          />
        </motion.div>

        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          <Image
            alt="Mail Icon"
            src="/assets/mail-icon.svg"
            width={32}
            height={22}
            className="cursor-pointer"
            aria-label="Mail"
          />
        </motion.div>

        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          <Image
            alt="Hamburger Menu Icon"
            src="/assets/hamburger-icon.svg"
            width={32}
            height={22}
            className="cursor-pointer"
            aria-label="Menu"
          />
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;

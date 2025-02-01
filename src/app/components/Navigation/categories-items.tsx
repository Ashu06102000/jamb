"use client";

import { CategoryItemsProps } from "@/app/Interface/interface";
import { motion } from "framer-motion";
const CategoryItems = ({ index, category }: CategoryItemsProps) => {
  return (
    <>
      <motion.div
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        whileTap={{ scale: 0.9 }}
        className={`flex items-center gap-2 ${index > 0 && "border-l-2 border-customGray  pl-3 "} animate-fade-in`}
        >
        <a href={`#${category}-section`} className="font-medium text-customGray text-base leading-none hover:text-black transition-all duration-500 relative link-border-onhover">{category}</a>
       
      </motion.div>
    </>
  );
};
export default CategoryItems;

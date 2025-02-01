"use client";
import { motion } from "framer-motion";
const ScaleButton = ({ text, style }: { text: string; style: string }) => {
  return (
    <motion.button
      className={style}
      whileHover={{ scale: 1.05, color: "black", borderColor: "black" }}
      aria-label={text} 
      tabIndex={0}
    >
      {text}
    </motion.button>
  );
};
export default ScaleButton;

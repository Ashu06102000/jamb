"use client";
import { motion } from "framer-motion";
const ScaleButton = ({ text, style }: { text: String; style: string }) => {
  return (
    <motion.button
      className={style}
      whileHover={{ scale: 1.05, color: "black", borderColor: "black" }}
    >
      {text}
    </motion.button>
  );
};
export default ScaleButton;

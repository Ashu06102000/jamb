"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const LoadingAnimation = () => {
  const [progress, setProgress] = useState(0);
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    let interval: any;
    if (progress < 100) {
      interval = setInterval(() => {
        setProgress((prev) => Math.min(prev + 1, 100));
      }, 15); 
    } else {
      setIsLoadingComplete(true);
    }

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-white flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      animate={{
        opacity: isLoadingComplete ? 1 : 1,
        y: isLoadingComplete ? -1000 : 0,
      }}
      transition={{ duration: 1, ease: "easeInOut" }}
      style={{ display: isLoadingComplete ? "block" : "block" }}
    >
      
      <motion.div
        className="absolute left-6 bottom-6 text-[10em] font-medium  italic text-primaryColor"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoadingComplete ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        {progress}%
      </motion.div>

      
      <motion.div
        className="text-8xl text-black font-medium flex h-full w-full justify-center items-center"
        initial={{ opacity: 1, y: 0 }}
        animate={{
          opacity: isLoadingComplete ? 0 : 1,
          y: isLoadingComplete ? -100 : 0,
        }}
        transition={{ duration: 1, delay: 2 }}
      >
        Jamb
      </motion.div>

    
      <motion.div className="absolute left-0 bottom-0 w-full h-1 bg-gray-300">
        <motion.div
          className="h-full bg-primaryColor"
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
};

export default LoadingAnimation;

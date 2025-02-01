"use client";

import { HeroImage } from "../data/mock-data";
import Image from "next/image";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    const imageContainer: any = document.querySelector(".image-container");
    const circle: any = document.querySelector(".cursor-circle");
    let timer: any = null;

    const handleMouseEnter = () => {
      circle.classList.add("in");
    };

    const handleMouseLeave = () => {
      circle.classList.remove("in");
    };

    const handleMouseMove = (e: any) => {
      const { left, top, width, height } =
        imageContainer.getBoundingClientRect();
      const { clientX, clientY } = e;

      if (
        clientX >= left &&
        clientY >= top &&
        clientX <= left + width &&
        clientY <= top + height
      ) {
        circle.style.left = `${clientX - left}px`;
        circle.style.top = `${clientY - top}px`;

       
        if (timer) {
          clearTimeout(timer);
        }

        
        circle.classList.add("in");

        
        timer = setTimeout(() => {
          circle.classList.remove("in");
        }, 500);
      }
    };

    imageContainer.addEventListener("mouseenter", handleMouseEnter);
    imageContainer.addEventListener("mouseleave", handleMouseLeave);
    imageContainer.addEventListener("mousemove", handleMouseMove);

    return () => {
      imageContainer.removeEventListener("mouseenter", handleMouseEnter);
      imageContainer.removeEventListener("mouseleave", handleMouseLeave);
      imageContainer.removeEventListener("mousemove", handleMouseMove);
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, []);

  return (
    <div className="max-w-1436 mx-auto relative">
      <div
        className="relative image-container"
      >
        <Image
          alt="Hero Image relative"
          src={HeroImage.Image}
          height={768}
          width={1436}
        />
      </div>
      <div className="cursor-circle">Jamb</div>
    </div>
  );
};

export default Hero;

"use client";

import { HeroImage } from "../data/mock-data";
import Image from "next/image";
import { useEffect } from "react";
import { CircleOnHover } from "../utils/utils";

const Hero = () => {
  useEffect(() => {
    CircleOnHover({imageClass:"image-container"});
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

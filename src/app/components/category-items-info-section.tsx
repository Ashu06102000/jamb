import Image from "next/image";
import { CategoryInfoSectionProps } from "@/app/Interface/interface";
import { motion } from "framer-motion";
import ScaleButton from "./scale-button";
const CatergoryItemInfoSection = ({
  name,
  sell_button_text,
  explore_button_text,
  image,
  description,
  title,
}: CategoryInfoSectionProps) => {
  return (
    <>
      <div
        id={name + "-section"}
        className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-12 max-h-screen"
      >
        <div className="flex flex-col items-center gap-6 w-full sm:w-1/2 xl:max-w-md xl:w-auto  animate-fade-up">
          <div className="flex flex-col items-center gap-4 ">
            <h1 className="text-base font-medium leading-6">{title}</h1>
            <h2 className="text-3xl xl:text-34 font-medium text-center leading-12">
              {name}
            </h2>
            <p className="text-gray-600 xl:text-base text-sm text-center font-400 leading-6">
              {description}
            </p>
          </div>

          <div className="flex flex-col gap-3 items-center">
            <ScaleButton
              text={explore_button_text}
              style={
                "border border-primaryColor px-4 py-2 text-primaryColor leading-none xl:leading-6 font-400"
              }
            />
            {sell_button_text && (
              <ScaleButton
                text={sell_button_text}
                style="border border-primaryColor px-4 py-2 text-primaryColor leading-none xl:leading-6 font-400"
              />
            )}
          </div>
        </div>

        <div className="md:w-auto sm:w-1/2 w-full max-w-max xl:w-auto animate-card-up">
          <Image
            src={image || "/assets/fireplaces.jpg"}
            alt={name}
            width={500}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
};
export default CatergoryItemInfoSection;

import { CatergoryInfo } from "@/app/data/mock-data";
import CatergoryItemInfoSection from "./category-items-info-section";

const CategoryInfoSection = () => {
  return (
   
      <div className="px-4 sm:px-6 xl:px-24.5 mt-6 xl:mt-16.5 flex flex-col gap-12 xl:gap-20 justify-between max-w-1436 mx-auto sm:pb-32 pb:16">
        {CatergoryInfo.filter(
          (category) =>
            category.name === "Fireplaces" || category.name === "Lighting"
        ).map(
          (category, index) => (
           
            (
              <div key={index}>
                <CatergoryItemInfoSection
                  name={category.name}
                  description={category.description}
                  sell_button_text={category.sell_button_text}
                  explore_button_text={category.explore_button_text}
                  image={category?.image}
                />
              </div>
            )
          )
        )}
      </div>
 
  );
};

export default CategoryInfoSection;

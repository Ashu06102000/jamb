
import { CatergoryInfo } from "../data/mock-data";
import CatergoryItemInfoSection from "./category-items-info-section";

const GrandCollectionSection = () => {
  return (
    <div className=" bg-cream">
      <div className="px-4 sm:px-6 xl:px-24.5  flex flex-col gap-12 xl:gap-20 justify-between max-w-1436 mx-auto sm:py-32 py-16">
        {CatergoryInfo.filter((category) => category.title === "Journal").map(
          (category, index) => (
            <div key={index}>
              <CatergoryItemInfoSection
                name={category.name}
                description={category.description}
                sell_button_text={category.sell_button_text}
                explore_button_text={category.explore_button_text}
                image={category?.image}
                title={category?.title}
              />
            </div>
          )
        )}
      </div>{" "}
    </div>
  );
};

export default GrandCollectionSection;

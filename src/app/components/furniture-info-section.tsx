import { CatergoryInfo } from "../data/mock-data"
import CatergoryItemInfoSection from "./category-items-info-section"

const FurnitureInfoSection = () => {
    return(
        <div className="px-4 sm:px-6 xl:px-24.5 flex flex-col gap-12 xl:gap-20 justify-between max-w-1436 mx-auto sm:py-32 py-16">
        {CatergoryInfo.filter(
          (category) =>
            category.name === 'Furniture'
        ).map(
          (category, index) => (
            console.log(category, "we"),
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
    )
}
export default FurnitureInfoSection
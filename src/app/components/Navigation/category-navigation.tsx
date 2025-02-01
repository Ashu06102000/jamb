import { Categories } from "@/app/data/mock-data";
import CategoryItems from "./categories-items";
import { div } from "framer-motion/client";
const CategoryNavigation = () => {
  return (
    <div className="flex gap-3 items-center justify-center py-7 lg:px-0 px-4">
      {Categories.map((category, index) => (
        <div key={index}>
          <CategoryItems index={index} category={category.name} />
        </div>
      ))}
    </div>
  );
};
export default CategoryNavigation;

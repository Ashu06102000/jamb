
import { Products } from "../data/mock-data";
import ProductsDisplay from "./product/products-list";

const LatestStories = () => {
  return (
    <div className="bg-secondryColor">
      <ProductsDisplay
        products={Products.latest_stories}
        title="See more of our latest stories"
        cardCss={"xl:grid-cols-5"}
        imageStyling="aspect-[0.7499] w-48"
      />
    </div>
  );
};

export default LatestStories;

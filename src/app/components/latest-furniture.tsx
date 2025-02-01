import { Products } from "../data/mock-data";
import ProductsDisplay from "./product/products-list";

const LatestFurniture = () => {
    return (
        <div className="bg-secondryColor px-4">
            <ProductsDisplay
                products={Products.latest_furniture}
                title="See more of our latest Furniture"
                cardCss={"xl:grid-cols-5 justify-items-center"}
              imageStyling="aspect-4/3 !object-contain sm:object-cover sm:aspect-auto"
            />
        </div>
    );
};
export default LatestFurniture
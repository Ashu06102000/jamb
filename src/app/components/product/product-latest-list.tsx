
import { Products } from '@/app/data/mock-data';
import ProductsDisplay from './products-list';


const ProductsLatestList = () => {
  return (
    <div className="container bg-secondryColor mx-auto">
      <ProductsDisplay
        products={Products.chimney_products}
        title="Our latest chimneypieces"
        cardCss={'xl:grid-cols-4 p-4 w-full'} 
        imageStyling={'w-full'}
      />
      <ProductsDisplay
        products={Products.lighting_products}
        title="Our latest Lighting"
        cardCss={'xl:grid-cols-5'} 
        imageStyling={'w-auto aspect-1.6'}
 
      />
    </div>
  );
};

export default ProductsLatestList;

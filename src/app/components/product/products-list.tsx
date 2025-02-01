import { ProductsDisplayProps } from '@/app/Interface/interface';
import ProductCard from './product-card';

const ProductsDisplay = ({ products, title, cardCss, imageStyling }: ProductsDisplayProps) => {

  return (
    <div className="flex flex-col gap-10 max-w-1436 mx-auto py-10">
      <h2 className="text-xl leading-4 font-medium text-center">{title}</h2>
      <div className={`grid grid-cols-1 gap-8 justify-items-center place-items-center sm:grid-cols-3 ${cardCss}`}>
        {products.map((product, index) => (
          <ProductCard imageStyling={imageStyling} key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsDisplay;

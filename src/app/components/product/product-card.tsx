import { ProductCardProps } from "@/app/Interface/interface";


const ProductCard = ({ product, imageStyling }: ProductCardProps) => {
  return (
    <div className="text-center flex flex-col gap-3 animate-image-zoom w-full items-center">
      <img
        src={product.image}
        alt={product.name}
        className={`object-cover ${imageStyling}`}
        aria-label={`Image of ${product.name}`}
      />

      <div className="flex flex-col">
        <h3 className="font-semibold  text-primaryColor">{product.name}</h3>
        <p className="text-sm text-primaryColor">{product.subtitle}</p>
      </div>
    </div>
  );
};

export default ProductCard;

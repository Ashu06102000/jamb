export interface CategoryItemsProps {
  category: string;
  index: number;
}
export interface CategoryInfoSectionProps {
  title?:string;
  name: string;
  description: string;
  sell_button_text?: string;
  explore_button_text: string;
  image?: string;
}
export interface Product {
  name: string;
  subtitle: string;
  image: string;
}

export interface ProductCardProps {
  product: Product;
  imageStyling?: string;
 
}
export interface ProductsDisplayProps {
  products: Product[];
  title: string;
  cardCss?: string;
  imageStyling?: string;
}
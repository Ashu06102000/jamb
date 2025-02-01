import Hero from "./components/hero";
import CategoryInfoSection from "./components/category-info-section";
import CategoryNavigation from "./components/Navigation/category-navigation";
import LoadingAnimation from "./components/loading";
import ProductsLatestList from "./components/product/product-latest-list";
import FurnitureInfoSection from "./components/furniture-info-section";
import GrandCollectionSection from "./components/grand-collection-section";
import SubscribeJournel from "./components/subscribe-journel";
import LatestStories from "./components/latest-stories-section";
import LatestFurniture from "./components/latest-furniture";

export default function Home() {
  return (
    <div className="">
      {/* <LoadingAnimation/> */}
      <Hero />
      <CategoryNavigation/>
      <CategoryInfoSection/>
      <ProductsLatestList/>
      <FurnitureInfoSection/>
      <LatestFurniture/>
      <GrandCollectionSection/>
      <LatestStories/>
      <SubscribeJournel/>
    </div>
  );
}

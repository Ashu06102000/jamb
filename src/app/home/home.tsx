import CategoryInfoSection from "../components/category-info-section";
import FurnitureInfoSection from "../components/furniture-info-section";
import GrandCollectionSection from "../components/grand-collection-section";
import Hero from "../components/hero";
import LatestFurniture from "../components/latest-furniture";
import LatestStories from "../components/latest-stories-section";
import CategoryNavigation from "../components/Navigation/category-navigation";
import ProductsLatestList from "../components/product/product-latest-list";
import SubscribeJournel from "../components/subscribe-journel";

const HomePage = () => {
  return (
    <>
        <Hero />
        <CategoryNavigation />
        <CategoryInfoSection />
        <ProductsLatestList />
        <FurnitureInfoSection />
        <LatestFurniture />
        <GrandCollectionSection />
        <LatestStories />
        <SubscribeJournel />
    </>
  );
};
export default HomePage;
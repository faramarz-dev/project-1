import OfferFoods from "../_components/foods/offer-foods/offer-foods";
import HowWork from "../_components/how-work/how-work";
import PopularItems from "../_components/foods/popular-items/popular-items";
import FeaturedRestaurants from "../_components/restaurants/featured-restaurants/featured-restaurants";
import { FoodsGroups } from "../_components/foods/foods-groups";
import MainBanner from "../_components/main-banner/main-banner";
import { Blogs } from "../_components/blogs";

export default function Home() {
  return (
    <>
      <section>
        <section>
          <OfferFoods />
        </section>
        <section>
          <HowWork />
        </section>
        <section>
          <PopularItems />
        </section>
        <section>
          <FeaturedRestaurants />
        </section>
        <section>
          <FoodsGroups />
        </section>
        <section>
          <MainBanner />
        </section>
        <section>
          <Blogs />
        </section>
      </section>
    </>
  );
}

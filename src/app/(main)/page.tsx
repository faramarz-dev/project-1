import OfferFoods from "../_components/foods/offer-foods/offer-foods";
import HowWork from "../_components/how-work/how-work";
import PopularItems from "../_components/foods/popular-items/popular-items";


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
      </section>
    </>
  );
}

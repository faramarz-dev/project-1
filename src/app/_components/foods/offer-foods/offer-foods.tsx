"use client";

import { OfferFoodsData } from "@/data/offerFoods.data";
import OfferFoodsCard from "./offer-foods-card/offer-foods-card";

export default function OfferFoods() {
  return (
    <>
        <div className="flex px-2 gap-10 items-center w-full justify-evenly   py-20 overflow-auto">
          {OfferFoodsData.map((item) => (
            <OfferFoodsCard
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              duration={item.duration}
              discount={item.discount}
            />
          ))}
        </div>
    </>
  );
}

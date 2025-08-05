"use client";

import { FeaturedRestaurantsData } from "@/data/featuredRestaurants.data";
import FeaturedRestaurantsCard from "./featured-restaurants-card/featured-restaurants-card";
import Link from "next/link";

export default function FeaturedRestaurants() {
  return (
    <div className="w-full flex flex-col text-center items-center py-32">
      <h2 className="text-3xl font-bold">Featured Restaurants</h2>
      <div className="flex flex-wrap gap-5 items-center justify-center w-[80%] mt-16 ">
        {FeaturedRestaurantsData.map((restaurant) => (
          <FeaturedRestaurantsCard
            key={restaurant.id}
            image={restaurant.image}
            logo={restaurant.logo}
            name={restaurant.name}
            ratingnumber={restaurant.ratingnumber}
            discountTag={restaurant.discountTag}
            openingTime={restaurant.openingTime}
          />
        ))}
      </div>

      <Link
        href={"/"}
        className="bg-amber-500 text-white py-3 px-8 rounded-md shadow-4 shadow-amber-500 mt-14 hover:shadow-1 hover:shadow-amber-600 hover:text-lg"
      >
        View All
      </Link>
    </div>
  );
}

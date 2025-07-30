import React from "react";
import Image from "next/image";
import { IOfferFoodsCard } from "./offer-foods-card.types";

const OfferFoodsCard: React.FC<IOfferFoodsCard> = ({
  title,
  image,
  duration,
  discount,
}) => {
  return (
    <>
      <div>
        <div className="relative">
          <Image
            src={image}
            alt="food"
            width={300}
            height={100}
            className="rounded-xl "
          />
          <span className="px-4 py-2 bg-amber-500 text-white font-bold text-4xl rounded-tr-2xl absolute bottom-0">
            {discount}%
          </span>
        </div>
        <div className="flex flex-col gap-4 mt-6">
          <span className="text-xl font-bold text-gray-600">{title}</span>
          <span className="bg-amber-600/25 text-orange-500 px-2 rounded-md text-md font-bold w-48 ">{duration} Days Remaining</span>
        </div>
      </div>
    </>
  );
};

export default OfferFoodsCard;

import React from "react";
import Image from "next/image";
import { IPopularItemCard } from "./popular-item-card.types";

const PopularItemCard: React.FC<IPopularItemCard> = ({
  name,
  image,
  location,
  price,
}) => {
  return (
    <>
      <div className="">
        <div className="">
          <Image
            src={image}
            alt="popular item"
            width={300}
            height={300}
            className="rounded-lg w-full h-48"
          />
        </div>
        <div className="flex flex-col gap-2 py-3">
          <h2 className="font-bold">{name}</h2>
          <p className="flex items-center gap-1 text-amber-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 "
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0C6.686 0 4 2.686 4 6c0 5.25 6 14 6 14s6-8.75 6-14c0-3.314-2.686-6-6-6zM10 8a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
            {location}
          </p>

          <p className="font-bold">${price}</p>
        </div>
        <div>
        
          <button className="bg-amber-600 text-white text-sm px-4 py-2 rounded-md w-full font-bold cursor-pointer">
            Order Now
          </button>
        </div>
      </div>
    </>
  );
};

export default PopularItemCard;

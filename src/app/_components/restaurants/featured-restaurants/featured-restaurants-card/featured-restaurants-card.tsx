import React from "react";
import Image from "next/image";
import { IFeaturedRestaurantsCard } from "./featured-restaurants-card.types";

const FeaturedRestaurantsCard: React.FC<IFeaturedRestaurantsCard> = ({
  name,
  image,
  discountTag,
  logo,
  openingTime,
  ratingnumber,
}) => {
  return (
    <>
      <div className="flex flex-col mb-12 relative">
        <div>
          <Image
            src={image}
            alt="foodworld"
            width={300}
            height={100}
            className="rounded-lg"
          />
          <div className="items-center flex gap-4 text-white text-lg font-bold absolute top-0 m-7">
            <div className="bg-amber-500 flex items-center px-2 rounded-md ">
              <span>
                <svg
                  className="w-10 h-10 text-white "
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.93 13.18L10.82 18.07C10.92 18.17 11.08 18.17 11.18 18.07L17.43 11.82C17.47 11.78 17.5 11.71 17.5 11.65V8.1C17.5 7.17 16.83 6.5 16 6.5H12.35C12.29 6.5 12.22 6.53 12.18 6.57L5.93 12.82C5.83 12.92 5.83 13.08 5.93 13.18Z"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  <line
                    x1="11.5"
                    y1="15"
                    x2="11.5"
                    y2="10.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="1"
                  />
                  <circle
                    cx="9.5"
                    cy="12.75"
                    r="0.75"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  <circle
                    cx="13.5"
                    cy="12.75"
                    r="0.75"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </svg>
              </span>
              <p>{discountTag}% off</p>
            </div>
            <div className="flex bg-amber-700 items-center px-2 rounded-md">
              <span>
                <svg
                  className="w-10 h-10 text-white"
                  viewBox="0 0 30 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="12"
                    y1="6"
                    x2="12"
                    y2="12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="12"
                    y1="12"
                    x2="16.24"
                    y2="16.24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>

              <p className=" text-white">Fast</p>
            </div>
          </div>
        </div>
        <div className="flex gap-5 items-center mt-5">
          <div>
            <Image src={logo} alt="reataurat logo" width={50} height={50} />
          </div>
          <div>
            <h4 className="text-lg font-bold ">{name}</h4>
            <span className=" text-amber-400 flex gap-2 items-center text-lg">
              <svg
                viewBox="0 2 20 24"
                className="w-6 h-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.24 4.17C11.48 3.51 11.59 3.18 11.76 3.08C11.91 3 12.09 3 12.24 3.08C12.41 3.18 12.52 3.51 12.76 4.17L14.29 8.58C14.35 8.77 14.39 8.86 14.44 8.93C14.5 9 14.56 9.04 14.64 9.07C14.73 9.11 14.83 9.11 15.03 9.11L19.69 9.21C20.39 9.22 20.74 9.23 20.88 9.36C21 9.48 21.06 9.65 21.03 9.82C21 10.01 20.71 10.22 20.15 10.65L16.44 13.46C16.28 13.58 16.2 13.64 16.15 13.72C16.11 13.79 16.08 13.87 16.08 13.95C16.07 14.04 16.1 14.14 16.16 14.33L17.51 18.79C17.71 19.47 17.81 19.8 17.73 19.98C17.65 20.13 17.51 20.24 17.34 20.26C17.15 20.28 16.86 20.08 16.28 19.68L12.46 17.02C12.29 16.9 12.21 16.85 12.12 16.82C12.04 16.8 11.96 16.8 11.88 16.82C11.79 16.85 11.71 16.9 11.54 17.02L7.72 19.68C7.14 20.08 6.85 20.28 6.66 20.26C6.49 20.24 6.35 20.13 6.27 19.98C6.19 19.8 6.29 19.47 6.5 18.79L7.85 14.33C7.9 14.14 7.93 14.04 7.93 13.95C7.92 13.87 7.89 13.79 7.85 13.72C7.8 13.64 7.72 13.58 7.56 13.46L3.85 10.65C3.29 10.22 3.01 10.01 2.97 9.82C2.94 9.65 3 9.48 3.12 9.36C3.26 9.23 3.61 9.22 4.32 9.21L8.98 9.11C9.18 9.11 9.28 9.11 9.36 9.07C9.44 9.04 9.5 9 9.56 8.93C9.62 8.86 9.65 8.77 9.71 8.58L11.24 4.17Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {ratingnumber}
            </span>
          </div>
        </div>
        <div className="mt-10 text-left">
          <span
            className={`font-bold rounded-lg p-3 ${
              openingTime === "Open Now"
                ? "bg-green-200 text-green-700"
                : "text-red-400 bg-red-200"
            }`}
          >
            {openingTime}
          </span>
        </div>
      </div>
    </>
  );
};

export default FeaturedRestaurantsCard;

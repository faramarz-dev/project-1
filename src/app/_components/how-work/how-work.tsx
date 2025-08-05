import React from "react";
import Image from "next/image";

export default function HowWork() {
  return (
    <>
      <div className="h-auto bg-gradient-to-b from-orange-50 to-white text-center py-20">
        <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold text-amber-600">
          How does it work
        </h2>
        <div className="mt-16 flex flex-wrap justify-center lg:gap-10 xs:gap-24 w-[90%] mx-auto">
          {/* کارت ۱ */}
          <div className="w-72 flex flex-col items-center text-center">
            <Image
              src={"/images/icons/icon-location.png"}
              alt="Select location icon"
              width={150}
              height={50}
              className="h-52"
            />
            <h3 className="text-xl font-bold -mt-8">Select location</h3>
            <p className="text-sm text-gray-400 mt-2 px-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit lorem
              dolor velit similique harum ea dolorem
            </p>
          </div>

          {/* کارت ۲ */}
          <div className="w-72 flex flex-col items-center text-center">
            <Image
              src={"/images/icons/icon-order.png"}
              alt="Choose order icon"
              width={150}
              height={50}
              className="h-52"
            />
            <h3 className="text-xl font-bold -mt-8">Choose order</h3>
            <p className="text-sm text-gray-400 mt-2 px-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit lorem
              dolor velit similique harum ea dolorem
            </p>
          </div>

          {/* کارت ۳ */}
          <div className="w-72 flex flex-col items-center text-center">
            <Image
              src={"/images/icons/icon-pay.png"}
              alt="Pay advanced icon"
              width={150}
              height={50}
              className="h-52"
            />
            <h3 className="text-xl font-bold -mt-8">Pay advanced</h3>
            <p className="text-sm text-gray-400 mt-2 px-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit lorem
              dolor velit similique harum ea dolorem
            </p>
          </div>

          {/* کارت ۴ */}
          <div className="w-72 flex flex-col items-center text-center">
            <Image
              src={"/images/icons/icon-meals.png"}
              alt="Enjoy meals icon"
              width={150}
              height={50}
              className="h-52"
            />
            <h3 className="text-xl font-bold -mt-8">Enjoy meals</h3>
            <p className="text-sm text-gray-400 mt-2 px-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit lorem
              dolor velit similique harum ea dolorem
            </p>
          </div>
        </div>
      </div>
      <hr className="mt-20 lg:hidden " />
    </>
  );
}

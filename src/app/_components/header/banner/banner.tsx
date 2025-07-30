"use client";

import React, { useState } from "react";
import Image from "next/image";

const Banner = () => {
  const [address, setAddress] = useState("");

  return (
    <div className="relative w-full h-[600px] bg-gradient-to-br from-amber-300 to-amber-500 ">
      {/* تصویر سمت راست پایین */}
      <div className="absolute bottom-0 right-0">
        <Image
          src="/images/header/banner/banner.png"
          alt="Food Banner"
          width={850}
          height={100}
          className="object-cover max-w-full h-auto sm:w-[600px] md:w-[700px] lg:w-[850px]"
          priority
        />
      </div>

      {/* محتوای روی تصویر با لایه تار */}
      <div className="absolute inset-0 bg-black/15 px-4 sm:px-10 md:px-20 flex items-center ">
        <div className="max-w-5xl w-full flex flex-col gap-6">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold">
            Are you starving?
          </h1>

          <p className="text-sm sm:text-base md:text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>

          {/* فرم وارد کردن آدرس با دکمه و آیکون لوکیشن */}
          <div className="bg-white w-full sm:w-[90%] md:w-[80%] lg:w-[60%] rounded-2xl px-4 py-6">
            {/* انتخاب نوع سفارش */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 pb-4 border-b border-gray-300">
              <h3 className="p-2 bg-amber-200 text-amber-600 font-bold rounded-lg text-center">
                Delivery
              </h3>
              <h3 className="p-2 rounded-lg text-center">Pickup</h3>
            </div>

            {/* فیلد آدرس با آیکون داینامیک */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-6">
              <div className="relative flex-grow w-full sm:w-[80%]">
                {/* آیکون لوکیشن فقط وقتی فیلد خالیه نمایش داده می‌شه */}
                {address.trim() === "" && (
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600 dark:text-pink-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 11.75a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7-7.5 11.25-7.5 11.25S4.5 17.5 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </span>
                )}

                {/* input آدرس با کنترل مقدار و فاصله از آیکون */}
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter your Address"
                  className="bg-gray-200 pl-10 rounded-lg p-2 focus:border-amber-600 outline-none border-2 border-gray-400 w-full " 
                />
              </div>

              {/* دکمه جستجوی غذا */}
              <button className="bg-amber-700 lg:text-md text-xs text-white p-2 rounded-lg font-bold cursor-pointer hover:bg-amber-800 w-full xs:w-auto">
                Find Food
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
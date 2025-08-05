"use client";

import React, { useRef, useEffect } from "react";
import { PopularItemsData } from "@/data/popularItems.data";
import PopularItemCard from "./popular-item-card/popular-item-card";

export default function PopularItems() {
  const originalItems = PopularItemsData;

  // ساختن آرایه تکراری با حلقه واقعی
  const repeatCount = 10; // عدد بزرگ برای شبیه‌سازی بی‌نهایت
  const repeatedItems = Array(repeatCount).fill(originalItems).flat();

  const containerRef = useRef<HTMLDivElement>(null);
  const itemWidth = 300;
  const gap = 20;
  const totalWidth = repeatedItems.length * (itemWidth + gap);
  const resetPoint = totalWidth / 2; // مرکز لیست تکراری

  // تنظیم scroll به وسط در ابتدا
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = resetPoint;
    }
  }, [resetPoint]);

  // برگشت به مرکز در صورت رسیدن به ابتدا یا انتها
  const handleScroll = () => {
    const scrollLeft = containerRef.current?.scrollLeft || 0;
    if (scrollLeft <= 0 || scrollLeft >= totalWidth - itemWidth * 4) {
      if (containerRef.current) {
        containerRef.current.scrollLeft = resetPoint;
      }
    }
  };

  // کنترل دکمه‌ها
  const handleNext = () => {
    containerRef.current?.scrollBy({
      left: itemWidth + gap,
      behavior: "smooth",
    });
  };

  const handlePrev = () => {
    containerRef.current?.scrollBy({
      left: -(itemWidth + gap),
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="w-full ">
        <h3 className="text-3xl font-bold py-20 text-center mt-10">
          Popular Items
        </h3>

        <div className="group flex items-center justify-center gap-8 ">
          {/* دکمه ← */}
          <button
            onClick={handlePrev}
            className="cursor-pointer bg-amber-500 text-white rounded-full w-16 h-16 text-3xl z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            &#11164;
          </button>

          {/* اسلایدر */}
          <div className="overflow-hidden lg:w-2/3 xs:w-full">
            <div
              ref={containerRef}
              onScroll={handleScroll}
              className="flex gap-5 overflow-x-auto scroll-smooth scrollbar-hide"
              style={{ scrollBehavior: "smooth" }}
            >
              {repeatedItems.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  style={{ minWidth: `${itemWidth}px` }}
                >
                  <PopularItemCard {...item} />
                </div>
              ))}
            </div>
          </div>

          {/* دکمه → */}
          <button
            onClick={handleNext}
            className="cursor-pointer bg-amber-500 text-white rounded-full w-16 h-16 text-3xl z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            &#11166;
          </button>
        </div>
      </div>
      <hr className="mt-20 lg:hidden " />
    </>
  );
}

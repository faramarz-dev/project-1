"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import Banner from "./banner/banner";
import { navItems } from "@/data/navItems.data";
import { NavLink } from "./navLink/navLink";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 w-full z-50 border-b-2 border-gray-300 bg-white">
        <div className="flex justify-between xl:justify-evenly 2xl:justify-between items-center py-4 px-6">
          {/* لوگو */}
          <div>
            <Link href="/">
              <Image
                src="/images/icons/Logo.png"
                alt="logo"
                width={300}
                height={50}
              />
            </Link>
          </div>

          {/* دکمه منوی متحرک برای موبایل */}
          <div className="xl:hidden">
            <div
              className="flex flex-col justify-between w-6 h-5 cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span
                className={`block h-0.5 bg-amber-600 transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 bg-amber-600 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 bg-amber-600 transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </div>
          </div>

          {/* منو دسکتاپ */}
          <div className="hidden xl:flex items-center gap-6 text-sm md:text-base text-gray-700 text-center">
            {navItems.map((item, index) => (
              <NavLink href={item.href} key={index}>
                {item.label}
              </NavLink>
            ))}

            {/* سرچ */}
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
                  />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search food"
                className="w-48 pl-10 border px-3 py-2 rounded-2xl border-gray-300 outline-none focus:border-amber-600 focus:border-2"
              />
            </div>
          </div>
          <div className="hidden xl:block text-center p-2 rounded-xl shadow-2 shadow-amber-600 text-amber-600 font-bold hover:shadow-lg hover:shadow-amber-500 hover:bg-orange-100 whitespace-nowrap">
            <Link href="/">
              <p>Login / SignUp</p>
            </Link>
          </div>
        </div>

        {/* منوی موبایل */}
        {isMenuOpen && (
          <div className="flex flex-col lg:hidden px-4 py-3 gap-3 ">
            {navItems.map((item, index) => (
              <NavLink href={item.href} key={index}>
                {item.label}
              </NavLink>
            ))}

            {/* سرچ موبایل */}
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
                  />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search food"
                className="w-full pl-10 border px-3 py-2 rounded-2xl border-gray-300 outline-none focus:border-amber-600 focus:border-2"
              />
            </div>
            {/* لاگین */}
            <div className="text-center p-2 rounded-xl shadow-2 shadow-amber-600 text-amber-600 font-bold hover:shadow-lg hover:shadow-amber-500 hover:bg-orange-100 whitespace-nowrap">
              <Link href="/">
                <p>Login / SignUp</p>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* بنر */}
      <div>
        <Banner />
      </div>
    </>
  );
};

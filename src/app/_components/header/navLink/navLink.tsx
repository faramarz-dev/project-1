"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`group relative m-2 w-[80px] text-start text-md transition-colors duration-100
        ${isActive
          ? "font-bold text-amber-600 border-b border-amber-600 shadow-2 shadow-amber-600  scale-y-125"
          : "text-shop-gray-900  hover:text-amber-600 "}
        lg:mt-0 lg:text-center`}
    >
      {children}

      {/* فقط وقتی لینک فعال نیست افکت نمایشی زیرش بیاد */}
      {!isActive && (
        <span
          className="absolute bottom-0 left-0 h-[2px] w-full bg-amber-600 
          transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"
        ></span>
      )}
    </Link>
  );
};
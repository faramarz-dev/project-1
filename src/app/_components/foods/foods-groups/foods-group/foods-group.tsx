"use client";

import Image from "next/image";
import { FC } from "react";
import { IFoodsGroup } from "./foods-group.types";

export const FoodsGroup: FC<IFoodsGroup> = ({ name, image, slug }) => {
  return (
    <>
      <div className="text-center ">
        <Image
          src={image}
          alt=""
          width={300}
          height={100}
          className="rounded-full lg:w-full xs:w-32 hover:scale-125 duration-300"
        />
        <h2 className="text-sm lg:text-xl font-bold mt-5">{name}</h2>
      </div>
    </>
  );
};

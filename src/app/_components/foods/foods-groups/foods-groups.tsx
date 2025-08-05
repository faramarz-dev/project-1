"use client";
import React from "react";
import { FoodsGroup } from "./foods-group";
import { FoodsGroupsData } from "@/data/foodsGroups.data";

export const FoodsGroups = () => {
  return (
    <>
      <div className="w-full bg-amber-50 ">
        <div className="w-[80%] mx-auto py-5 ">
          <div className="text-3xl font-bold py-20">
            <h3>Search By Food</h3>
          </div>
          <div className="flex gap-10 justify-center items-center flex-wrap mb-10">
            {FoodsGroupsData.map((foodsGroup) => {
              return <FoodsGroup key={foodsGroup.id} {...foodsGroup} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

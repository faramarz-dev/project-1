import Image from "next/image";
import React from "react";
import { IBlogsCard } from "./blogs-card.types";
import Link from "next/link";

const BlogsCard: React.FC<IBlogsCard> = ({
  name,
  title,
  description,
  image,
}) => {
  return (
    <>
      <div className="">
        <div className="lg:grid lg:grid-cols-3 shadow-3 rounded-2xl ">
          <Image
            src={image}
            alt=""
            width={800}
            height={500}
            className="col-span-2 w-full lg:rounded-l-2xl lg:rounded-r-none rounded-t-2xl"
          />
          <div className=" flex flex-col py-20 px-5 gap-5">
            <h2 className="font-bold text-4xl text-gray-800">
              {title}
              <span className="text-amber-600"> {name}</span>
            </h2>
            <p className="text-gray-500 text-sm">{description}</p>
            <Link href={"/"} className="mt-10 bg-amber-500 w-fit p-2 rounded-lg text-white font-bold">Proceed To Order &gt;</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogsCard;

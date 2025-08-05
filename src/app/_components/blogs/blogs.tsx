import React from "react";
import { BlogsData } from "@/data/blogs.data";
import BlogsCard from "./blogs-card/blogs-card";

export const Blogs = () => {
  return (
    <>
      <div className="flex flex-col gap-20 mt-32 w-[80%] mx-auto">
        
          {BlogsData.map((blog) => (
            <BlogsCard
              key={blog.id}
              name={blog.name}
              title={blog.title}
              description={blog.description}
              image={blog.image}
            />
          ))}
        
      </div>
    </>
  );
};

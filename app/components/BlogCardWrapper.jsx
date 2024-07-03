import React from "react";
import BlogCard from "./BlogCard";
import { fetchBlogs } from "../lib/fetchBlogs";

const BlogCardWrapper = async () => {
  const data = await fetchBlogs();
  const allBlogs = data.allBlogs;

  return (
    <div className="flex flex-col gap-14 mt-20 mr-16">
      {allBlogs?.map((blog) => (
        <BlogCard blog={blog} />
      ))}
    </div>
  );
};

export default BlogCardWrapper;

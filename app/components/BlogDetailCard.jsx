import Image from "next/image";
import React from "react";
import { formatDate } from "../lib/formatDate";

const BlogDetailCard = ({ blog}) => {
  return (
    <div className="border-1 border-black p-20">
      <div>
        <p className="text-xs mb-10">{formatDate(blog?.createdAt)}</p>
        <p className="text-4xl font-bold mb-8">{blog?.title}</p>
        <p className="text-base font-semibold mb-10">
          {blog?.smallDescription}
        </p>
        <div className="relative w-[100%] h-[500px]">
          <Image src={blog?.imageUrl} height={1000} width={1000} alt="blog-detail" priority/>
        </div>
        {blog?.quote && (
          <div className="border-l-4 border-b-0 border-t-0 border-r-0 border-green-700 pl-7 my-10 pr-10 py-3">
            <p className="text-xl italic tracking-wide leading-8">
              {blog?.quote}
            </p>
          </div>
        )}
        <p className="text-base mt-14 text-gray-600">
          {blog?.completeDescription}
        </p>
      </div>
    </div>
  );
};

export default BlogDetailCard;

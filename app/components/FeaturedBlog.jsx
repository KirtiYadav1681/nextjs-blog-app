// "use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { formatDate } from "@/app/lib/formatDate";
import { fetchBlogs } from "../lib/fetchBlogs";

const FeaturedBlog = async () => {
  const data = await fetchBlogs();
  const featuredBlog = data.allBlogs[0];

  return (
    <div className="relative w-[900px]">
      <Image
        src={featuredBlog?.imageUrl}
        alt="Featured image"
        height={900}
        width={900}
        className="mt-3 border-1 border-black border-b-0"
      />
      <div className="absolute top-0 bg-white py-3 px-14 border-1 border-black">
        <p className="tracking-[8px] text-xl uppercase">Featured Post</p>
      </div>
      <div className="border-1 border-black border-t-0 px-14 pt-7">
        <p className="text-xs">{formatDate(featuredBlog?.createdAt)}</p>
        <Link href="/blog-detail/5" className="hover:text-blue-900">
          <p className="text-2xl font-bold mt-7">{featuredBlog?.title}</p>
          <p className="mt-3 text-gray-600 text-base pb-10 hover:text-blue-900">
            {`${featuredBlog?.completeDescription.slice(0, 160)} . . .`}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedBlog;

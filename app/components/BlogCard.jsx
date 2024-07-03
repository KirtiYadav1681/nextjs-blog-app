import Image from "next/image";
import Link from "next/link";
import React from "react";
import { formatDate } from "../lib/formatDate";

const BlogCard = ({ blog }) => {
  return (
    <Link
      href={`/blog-detail/${blog?._id}`}
      className="flex flex-row gap-8 border-1 border-black hover:shadow-lg h-[350px]"
    >
      <div className="w-4/5 h-full relative">
        <Image
          src={blog?.imageUrl}
          layout="fill"
          objectFit="cover"
          // height={350}
          // width={300}
          alt="blog-1-img"
          quality={100}
        />
      </div>
      <div className="flex flex-col pr-10">
        <p className="text-xs mt-8">{formatDate(blog?.createdAt)}</p>
        <p className="text-2xl font-bold mt-7">{blog?.title}</p>
        <p className="text-gray-600 text-base mt-4">
          {`${blog?.completeDescription.slice(0, 70)} . . .`}
        </p>
      </div>
    </Link>
  );
};

export default BlogCard;

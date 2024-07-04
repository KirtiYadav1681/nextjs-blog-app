// SERVER SIDE RENDERING
import React from "react";
import BlogDetailCard from "@/app/components/BlogDetailCard";
import { fetchBlogDetail } from "@/app/lib/fetchBlogs";
import ErrorPage from "@/app/components/ErrorPage";

const BlogDetailPage = async ({ params }) => {
  const { id } = params;
  const data = await fetchBlogDetail(id);

  if (!data.success) {
    return <ErrorPage message={data.message}/>;
  }

  return (
    <div className="w-[70%] mx-[15%] my-[150px]">
      <BlogDetailCard blog={data.blog} />
    </div>
  );
};

export default BlogDetailPage;

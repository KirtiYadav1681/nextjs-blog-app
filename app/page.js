import Image from "next/image";
import FeaturedBlog from "./components/FeaturedBlog";
import Link from "next/link";
import BlogCardWrapper from "./components/BlogCardWrapper";

export default function Home() {
  return (
    <div className="w-[80%] mx-[10%] mt-[50px]">
      <div className="text-center uppercase py-14 flex flex-col">
        <p className="tracking-[9px] text-lg">
          Blogging is a conversation, not a code
        </p>
        <Link href="/" className="text-7xl font-bold pt-10">
          The Blog
        </Link>
      </div>
      <div className="flex flex-row items-center justify-center pt-[20px] pb-[50px]">
        <FeaturedBlog />
      </div>
      <div className="mx-[5%] py-[50px] flex flex-row">
        <div className="w-[60%] pt-[30px]">
          <p className="tracking-[8px] text-2xl uppercase">MORE BLOGS</p>
          <BlogCardWrapper />
        </div>
        <div className="w-[40%] border-l border-b-0 border-t-0 border-r-0 pt-[30px] border-1 border-black">
          <p className="tracking-[8px] text-2xl uppercase pl-[50px]">ABOUT US</p>
        </div>
      </div>
    </div>
  );
}

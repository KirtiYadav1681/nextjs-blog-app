"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { id: 0, name: "Home", path: "/" },
  { id: 1, name: "Technology", path: "/technologyBlogs" },
  { id: 2, name: "Travel", path: "/travelBlogs" },
  { id: 3, name: "Inspiration", path: "/inspirationBlogs" },
  { id: 4, name: "About", path: "/about" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="border-solid border-1 border-black flex flex-row items-center justify-center fixed top-0 w-full flex-wrap bg-white z-10">
      <div className="flex flex-row items-center justify-center border-l-0 border-r border-t-0 border-b-0 border-1 border-black">
        {items.map((item) => {
          return (
            <div key={item.id} className="w-[200px] py-3 text-center border-l border-r-0 border-t-0 border-b-0 border-1 border-black text-black">
              <Link
                href={item.path}
                className={`text-base  underline-none ${
                  item.path === pathname ? "text-blue-700 font-bold" : ""
                }`}
              >
                {item.name}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;

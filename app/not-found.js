import Link from "next/link";
import React from "react";
import { FaSkullCrossbones } from "react-icons/fa";

const notFound = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <FaSkullCrossbones className="text-6xl mx-auto mb-4 text-red-500" />
      <h1 className="text-3xl font-bold mb-5">Page not found</h1>
      <Link
        href="/"
        className="text-base bg-black hover:bg-blue-600 py-3 px-10 text-white rounded-3xl"
      >{`Go to Home Page`}</Link>
    </div>
  );
};

export default notFound;

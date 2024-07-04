import React from "react";
import { FaRegSadCry } from "react-icons/fa";
import Link from "next/link";

const ErrorPage = ({ message }) => {
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <FaRegSadCry className="text-6xl mx-auto mb-4 text-red-500" />
      <h1 className="text-3xl font-bold mb-5">{message}</h1>
      <Link
        href="/"
        className="text-base bg-black hover:bg-blue-600 py-3 px-10 text-white rounded-3xl"
      >{`Go to Home Page`}</Link>
    </div>
  );
};

export default ErrorPage;

import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutMeCard = () => {
  return (
    <div className="w-[70%]">
      <p className="tracking-[8px] text-2xl uppercase text-left">ABOUT US</p>
      <Image
        src="/user.jpg"
        alt="user-img"
        height={300}
        width={350}
        className="mt-20 border-1 border-black"
      />
      <p className="text-base mt-14 text-gray-600 mx-4 mb-8">
        {" "}
        I'm a paragraph. Click here to add your own text and edit me. It’s easy.
        Just click “Edit Text” or double click me to add your own content and
        make changes to the font. I’m a great place for you to tell a story and
        let your users know a little more about you.
      </p>
      <Link
        href="/about"
        className="ml-4 text-sm hover:text-blue-900"
      >{`Read More >`}</Link>
      <div className="border-b-1 border-black mt-16"></div>
    </div>
  );
};

export default AboutMeCard;

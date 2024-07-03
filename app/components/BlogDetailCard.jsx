import Image from "next/image";
import React from "react";

const BlogDetailCard = () => {
  return (
    <div className="border-1 border-black p-20">
      <div>
        <p className="text-xs mb-10">Mar 23, 2024</p>
        <p className="text-4xl font-bold mb-8">Bard vs Chat gpt, Whats the difference?</p>
        <p className="text-base font-semibold mb-10">this is the small description section</p>
        <Image
          src="/featured-bg.jpeg"
          height={500}
          width={600}
          alt="blog-detail"
        />
        <p>
          Welcome to your blog post. Use this space to connect with your readers
          and potential customers in a way that’s current and interesting. Think
          of it as an ongoing conversation where you can share updates about
          business, trends, news, and more.{" "}
        </p>
        <p>
          "Do you have a design in mind for your blog? Whether you prefer a
          trendy postcard look or you’re going for a more editorial style blog -
          there’s a stunning layout for everyone."
        </p>
        <p>
          Writing a blog is a great way to position yourself as an authority in
          your field and captivate your readers’ attention. Do you want to
          improve your site’s SEO ranking? Consider topics that focus on
          relevant keywords and relate back to your website or business. You can
          also add hashtags (#vacation #dream #summer) throughout your posts to
          reach more people, and help visitors search for relevant content.
          Blogging gives your site a voice, so let your business’ personality
          shine through. Choose a great image to feature in your post or add a
          video for extra engagement. Are you ready to get started? Simply
          create a new post now.
        </p>
      </div>
    </div>
  );
};

export default BlogDetailCard;

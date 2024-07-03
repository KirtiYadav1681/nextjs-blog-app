"use client"

import React, {useEffect, useState} from 'react'
import { usePathname } from 'next/navigation'
import BlogDetailCard from '@/app/components/BlogDetailCard';

const page = () => {
  const pathName = usePathname();
  const id = pathName.split("/")[2];
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    const getBlogDetail = async () => {
      const res = await fetch(`/api/blog-details/${id}`);
      const data = await res.json();
      if(data.success){
        setBlogData(data.blog)
      } else{
        alert(data.message);
      }
    }
    getBlogDetail();
  },[])

  return (
    <div className='w-[70%] mx-[15%] mt-[150px]'>
      <BlogDetailCard />
    </div>
  )
}

export default page
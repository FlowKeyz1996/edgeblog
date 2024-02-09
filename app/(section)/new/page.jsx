"use client";
import { latests } from '@/constants/Index';
import React from 'react'

const newBlogs = () => {
  return (
    <div>
      <div className="">
        {latests.map((latest, index) => (
            <div className="flex  m-10 flex-row items-center justify-center">
            <div className="m-5">
              <img src="/popularone.svg" alt="" />
              <p>hello</p>
            </div>
            <div>
             <img src="/populartwo.svg" alt="" />
            <p>hello</p>
           </div>
        </div>

        ))}
       
    </div>
    </div>
  )
}

export default newBlogs
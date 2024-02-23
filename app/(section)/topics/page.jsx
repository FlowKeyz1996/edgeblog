import React from 'react';
import { topics } from '@/constants/Index';

const topicsPage = () => {
  return (
    <div>
        <div className="p-10 max-w-79">
            <h1 className="font-bold text-3xl">Topics</h1>
            <p className="max-w-[35rem] text-[#000000] pt-5" >Topics Find everything from design inspiration to best practices, freelancing tips to tools.</p>
        </div>
        <div className=" flex sm:flex col">
          {topics.map((topic, index) => (
            <div key={topic.id}>
              <p>{topic.topicParagraph}</p>
      
          </div>
          ))}
        </div>

    </div>
  )
}

export default topicsPage
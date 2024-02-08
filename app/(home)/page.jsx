import React from 'react';
import { feeds, } from '@/constants/Index';


const home = () => {
  return (
    <div className="">
        {feeds.map((feed, index) => (
            <div className="flex  m-10 flex-col items-center justify-center" key={feed.id}>
               <img
                  src={feed.imageUrl}
                  alt={feed.author_name}
                  className='w-1/2 h-1/2 object-contain'
                />
            <div className="justify-start md:m-3 text-sm">
              <p><span className="md:mr-1 text-[#808080]">{feed.path}</span>{feed.author_name}<span className="md:ml-1 mr-1 text-[#808080]">{feed.in}</span>{feed.resource}</p>
              
           </div>
           <h1>{feed.title}</h1>
            </div>
        
         
              
          ))}
       </div>
  
  )
}

export default home
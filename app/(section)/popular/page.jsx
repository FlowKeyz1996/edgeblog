import Reader from '@/components/Reader'
import { readings } from '@/constants/Index'
import React from 'react'

const page = () => {
  return (
    <div>
        <div>
        <div className="mt-[5rem]">
            <h1 class="font-bold text-3xl">Reading list</h1>
        </div>

        <div className="flex max-w-7xl mx-auto m-10 flex-col items-center justify-center">
            {readings.map((reading, index) =>(
                <div className="flex items-center justify-center m-10" key={reading.id}>
               
                <div className="bg-white w-[39rem] h-[21rem] p-7 rounded-md shadow-2xl">
                    <h1 className="text-2xl mb-5">{reading.number}</h1>
                    <h2 className="text-3xl capitalize leading-10 mx-auto mb-5">{reading.title}</h2>
                    <p className="capitalize text-secondary">{reading.sub_title}</p>
                    
                </div>
                <div>
                    <img src={reading.image} alt="" className="rounded-md"/>
                </div>
            </div>

            ))}
            <Reader/>
            

        </div>
        </div>
    </div>
  )
  

 
      
 
}

export default page
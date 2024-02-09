import React from 'react'

const Reader = () => {
  return (
    <div>
        <div className="flex  m-10 flex-col items-center justify-center">
        <div className="flex items-center justify-center space-x-[50rem]">
            <h2 className="font-bold text-3xl">Reading Lists</h2>
            <p className="text-primary text-lg">view all</p>
        </div>
        <img src="/popularone.svg" alt="" />
        <p>UI design</p>
        </div>
    </div>
  )
}

export default Reader
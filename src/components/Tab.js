import React from 'react'

const Tab = ({ imageUrl, heading, details }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mt-16">
      <div className="w-full sm:w-10/12 md:w-6/12 relative">
        <img src={imageUrl} alt="" className="w-full"/>
      </div>
      <div className="md:w-5/12 sm:w-8/12 md:text-left text-center mt-20 md:mt-0 w-full relative">
        <h2 className="text-2xl text-gray-800 font-bold">{heading}</h2>
        <p className="mt-6 mb-7 text-gray-400 leading-6">{details}</p>  
        <button className="lg:py-2 lg:px-5 md:px-4 px-5 py-3 shadow-md rounded-md mr-4 md:mb-4 text-sm text-bold text-gray-100 bg-primaryblue border-2 border-primaryblue hover:bg-transparent hover:text-primaryblue transition-all duration-300">More info</button>
      </div>
    </div>
  )
}

export default Tab

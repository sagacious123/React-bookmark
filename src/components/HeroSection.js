import React from 'react';

const HeroSection = () => {
  return (
    <section className="py-16 relative after:absolute after:h-24 after:w-28 after:bg-blue-600 after:bottom-0 after:right-0 after:z-10">
      <div className="absolute lg:h-72 lg:w-2/5 md:h-48 md:w-4/12 sm:h-72 h-44 w-9/12 bg-primaryblue sm:top-36 lg:top-48 top-28 right-0 rounded-l-full"></div>
      <div className="container w-10/12 m-auto">
        <div className="flex justify-between items-center md:flex-row flex-col-reverse w-full">
          <div className="relative text-center md:text-left lg:w-5/12 md:w-6/12 mt-6 sm:mt-36 md:mt-16 lg:mt-0 w-full">
            <h1 className="lg:text-4xl md:text-3xl text-2xl font-semibold">A Simple Bookmark Manager</h1>
            <p className="mt-6 mb-7 text-gray-400 leading-6">A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
            <div className="flex justify-between sm:block max-w-full w-80 m-auto sm:w-full sm:m-0">
              <button className="lg:py-3 lg:px-6 md:px-4 px-5 py-3 shadow-md rounded-md mr-4 md:mb-4 text-sm text-bold text-gray-100 bg-primaryblue border-2 border-primaryblue hover:bg-transparent hover:text-primaryblue transition-all duration-300">Get it on Chrome</button>
              <button className="lg:py-3 lg:px-6 px-5 py-3 shadow-md rounded-md text-sm text-bold bg-gray-100 border-2 border-gray-100 hover:bg-transparent hover:border-gray-700 hover:text-gray-700 transition-all duration-300">Get it on Firefox</button>
            </div>
          </div>
          <div className="w-11/10 h-72 md:w-7/12 relative lg:-right-20 md:-right-16 right-0 top-0">
            <img src="/images/illustration-hero.svg" alt="hero illustration" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection;
import React from 'react'

const ExtensionsSection = () => {
  return(
    <section className="py-16 relative">
      <div className="container w-10/12 m-auto mb-10">
        <div className="w-full text-center mx-auto sm:w-10/12 md:w-8/12 lg:w-6/12">
          <h2 className="text-2xl text-gray-800 font-bold">Download the extension</h2>
          <p className="mt-6 mb-7 text-gray-400 leading-6">We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.</p>
        </div>
        <div className="flex justify-between flex-col md:flex-row w-full sm:w-7/12 md:w-full lg:w-9/12 mt-8 m-auto text-center">
          <div className="w-full md:w-3/10 mb-8 md:mb-0 px-4 pt-12 rounded-md shadow-lg relative overflow-hidden">
            <img src="/images/logo-chrome.svg" alt="logo-chrome" className="h-24 w-24 mb-9 block m-auto" />
            <div className="my-5">
              <h3 className="text-xl mb-0 text-gray-800 font-bold">Add to Chrome</h3>
              <p className="mt-1 mb-9 text-gray-400 text-sm leading-6">Minimum version 62</p>
            </div>
            <img src="/images/bg-dots.svg" className="absolute w-full left-0" alt="bg-dots"/>
            <button className="lg:py-3 lg:px-2 md:px-4 px-5 py-3 w-full shadow-md rounded-md my-6 md:my-5 text-sm sm:text-xs text-bold text-gray-100 bg-primaryblue border-2 border-primaryblue hover:bg-transparent hover:text-primaryblue transition-all duration-300">Add & Install Extension</button>
          </div>
          <div className="w-full md:w-3/10 mb-8 md:mb-0 px-4 pt-12 rounded-md shadow-lg relative md:top-8 overflow-hidden">
            <img src="/images/logo-firefox.svg" alt="logo-chrome" className="h-24 w-24 mb-9 block m-auto" />
            <div className="my-5">
              <h3 className="text-xl mb-0 text-gray-800 font-bold">Add to Firefox</h3>
              <p className="mt-1 mb-9 text-gray-400 text-sm leading-6">Minimum version 55</p>
            </div>
            <img src="/images/bg-dots.svg" className="absolute w-full left-0" alt="bg-dots"/>
            <button className="lg:py-3 lg:px-2 md:px-4 px-5 py-3 w-full shadow-md rounded-md my-6 md:my-5 text-sm sm:text-xs text-bold text-gray-100 bg-primaryblue border-2 border-primaryblue hover:bg-transparent hover:text-primaryblue transition-all duration-300">Add & Install Extension</button>
          </div>
          <div className="w-full md:w-3/10 mb-8 md:mb-0 px-4 pt-12 rounded-md shadow-lg relative md:top-16 overflow-hidden">
            <img src="/images/logo-opera.svg" alt="logo-chrome" className="h-24 w-24 mb-9 block m-auto" />
            <div className="my-5">
              <h3 className="text-xl mb-0 text-gray-800 font-bold">Add to Opera</h3>
              <p className="mt-1 mb-9 text-gray-400 text-sm leading-6">Minimum version 46</p>
            </div>
            <img src="/images/bg-dots.svg" className="absolute left-0" alt="bg-dots"/>
            <button className="lg:py-3 lg:px-2 md:px-4 px-5 py-3 w-full shadow-md rounded-md my-6 md:my-5 text-sm sm:text-xs text-bold text-gray-100 bg-primaryblue border-2 border-primaryblue hover:bg-transparent hover:text-primaryblue transition-all duration-300">Add & Install Extension</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExtensionsSection
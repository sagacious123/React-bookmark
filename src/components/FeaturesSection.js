import React, { useState } from 'react'
import Tab from './Tab'

const FeaturesSection = () => {

  const [tabIndex, setTabIndex] = useState(1);

  const showTab = (index) => {
    setTabIndex(index);
  }

  return (
    <section className="py-16 relative">
      <div className="absolute lg:h-72 lg:w-5/12 md:h-64 md:w-4/12 sm:w-8/12 sm:h-72 h-44 w-9/12 bg-primaryblue sm:bottom-80 md:bottom-16 bottom-84 left-0 rounded-r-full"></div>
      <div className="container w-10/12 m-auto mb-10">
        <div className="w-full text-center mx-auto sm:w-10/12 md:w-7/12 lg:w-6/12">
          <h2 className="text-2xl text-gray-800 font-bold">Features</h2>
          <p className="mt-6 mb-7 text-gray-400 leading-6">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
        </div>
        <div>
          <div className="w-full sm:w-11/12 lg:w-8/12 m-auto flex flex-col sm:flex-row">
            <button onClick={() => showTab(1)} className={`px-6 sm:px-5 py-5 w-full md:w-4/12 text-gray-400 hover:text-red-500 border-b border-solid border-gray-300 focus:outline-none ${tabIndex === 1 && "border-b-3 border-red-500"}`}>Simple bookmarking</button>
            <button onClick={() => showTab(2)} className="px-6 sm:px-5 py-5 w-full md:w-4/12 text-gray-400 hover:text-red-500 border-b border-solid border-gray-300 focus:outline-none">Speedy searching</button>
            <button onClick={() => showTab(3)} className="px-6 sm:px-5 py-5 w-full md:w-4/12 text-gray-400 hover:text-red-500 border-b border-solid border-gray-300 focus:outline-none">Easy sharing</button>
          </div>
          <>
            {tabIndex === 1 
              && 
              <Tab 
                imageUrl="/images/illustration-features-tab-1.svg" 
                heading="Bookmark in one click" 
                details="Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites." 
              /> 
            }
            {tabIndex === 2 
              && 
              <Tab 
                imageUrl="/images/illustration-features-tab-2.svg" 
                heading="Intelligent search" 
                details="Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all your bookmarks" 
              />
            }
            {tabIndex === 3 
              && 
              <Tab 
                imageUrl="/images/illustration-features-tab-3.svg" 
                heading="Share your bookmarks" 
                details="Easily share your bookmarks and collections with others. Create a sharable link that you can share at the click of a button." 
              />
            }
          </>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection

import React, { useState, useRef } from 'react';

const Faq = () => {

  const [active, setActive] = useState(false);
  const [height, setHeight] = useState("0px");

  const content = useRef(null);

  const toggleActive = () => {
    setActive(!active);
    setHeight(active ?  "0px" : `${content.current.scrollHeight}px`);
  }

  return(
    <section className="py-12 relative">
      <div className="container w-10/12 m-auto mb-10 flex flex-col items-center justify-center">
        <div className="w-full text-center mx-auto sm:w-10/12 md:w-8/12 lg:w-6/12">
          <h2 className="text-2xl text-gray-800 font-bold">Frequently Asked Questions</h2>
          <p className="mt-6 mb-7 text-gray-400 leading-6">Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.</p>
        </div>
        <div className="w-full mx-auto mt-10 sm:w-10/12 md:w-8/12 lg:w-6/12">
          <button onClick={toggleActive} className={`pl-2 relative border-t border-gray-300 w-full focus:outline-none text-left py-5 md:hover:text-red-500 ${active && "bg-gray-100"}`}><span>What is Bookmark?</span> <i className={`fa fa-chevron-down text-xl absolute right-4 top-4 transition-transform duration-300 ${active ? "transform rotate-180 text-red-500" : "rotate-0  text-primaryblue"}`}></i> </button>
          <div ref={content} style={{maxHeight: `${height}`}} className="text-gray-400 leading-8 pl-4 max-h-0 overflow-hidden transition-all duration-300">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro ex illo a dignissimos nemo commodi. Cum, dolorum laborum nesciunt sapiente, suscipit dolore, perspiciatis possimus obcaecati error ut veniam tempora nisi ex neque asperiores perferendis. Harum distinctio dolore amet quod tenetur!</p>
          </div>
          <button onClick={toggleActive} className={`pl-2 relative border-t border-gray-300 w-full focus:outline-none text-left py-5 md:hover:text-red-500 ${active && "bg-gray-100"}`}><span>What is Bookmark?</span> <i className={`fa fa-chevron-down text-xl absolute right-4 top-4 transition-transform duration-300 ${active ? "transform rotate-180 text-red-500" : "rotate-0  text-primaryblue"}`}></i> </button>
          <div ref={content} style={{maxHeight: `${height}`}} className="text-gray-400 leading-8 pl-4 max-h-0 overflow-hidden transition-all duration-300">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro ex illo a dignissimos nemo commodi. Cum, dolorum laborum nesciunt sapiente, suscipit dolore, perspiciatis possimus obcaecati error ut veniam tempora nisi ex neque asperiores perferendis. Harum distinctio dolore amet quod tenetur!</p>
          </div>
          <button onClick={toggleActive} className={`pl-2 relative border-t border-gray-300 w-full focus:outline-none text-left py-5 md:hover:text-red-500 ${active && "bg-gray-100"}`}><span>What is Bookmark?</span> <i className={`fa fa-chevron-down text-xl absolute right-4 top-4 transition-transform duration-300 ${active ? "transform rotate-180 text-red-500" : "rotate-0  text-primaryblue"}`}></i> </button>
          <div ref={content} style={{maxHeight: `${height}`}} className="text-gray-400 leading-8 pl-4 max-h-0 overflow-hidden transition-all duration-300">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro ex illo a dignissimos nemo commodi. Cum, dolorum laborum nesciunt sapiente, suscipit dolore, perspiciatis possimus obcaecati error ut veniam tempora nisi ex neque asperiores perferendis. Harum distinctio dolore amet quod tenetur!</p>
          </div>
          <button onClick={toggleActive} className={`pl-2 relative border-t border-gray-300 w-full focus:outline-none text-left py-5 md:hover:text-red-500 ${active && "bg-gray-100"}`}><span>What is Bookmark?</span> <i className={`fa fa-chevron-down text-xl absolute right-4 top-4 transition-transform duration-300 ${active ? "transform rotate-180 text-red-500" : "rotate-0  text-primaryblue"}`}></i> </button>
          <div ref={content} style={{maxHeight: `${height}`}} className="text-gray-400 leading-8 pl-4 max-h-0 overflow-hidden transition-all duration-300 border-b  border-gray-300">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro ex illo a dignissimos nemo commodi. Cum, dolorum laborum nesciunt sapiente, suscipit dolore, perspiciatis possimus obcaecati error ut veniam tempora nisi ex neque asperiores perferendis. Harum distinctio dolore amet quod tenetur!</p>
          </div>
        </div>
        <button className="lg:py-2 lg:px-5 md:px-4 px-5 py-3 shadow-md rounded-md mt-10 text-sm text-bold text-gray-100 bg-primaryblue border-2 border-primaryblue hover:bg-transparent hover:text-primaryblue transition-all duration-300">More info</button>
      </div>
    </section>
  )
}

export default Faq
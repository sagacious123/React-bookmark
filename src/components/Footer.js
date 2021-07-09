import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative bg-primaryblue text-white">
      <div className="container w-10/12 m-auto">
        <div className="sm:w-8/12 lg:w-5/12 py-16 m-auto flex flex-col items-center">
          <h5 className="text-sm">35,000+ ALREADY JOINED</h5>
          <h2 className="text-2xl sm:text-3xl text-center leading-8 sm:leading-10 mt-2 mb-8 md:mt-10 md:mb-9">Stay up-to-date with what we're doing</h2>
          <form className="flex w-full sm:w-full justify-between flex-col sm:flex-row">
            <input type="text" placeholder="Enter your email address" className="py-2 px-4 sm:py-2 sm:px-4 w-full sm:w-7/10 rounded-sm md:rounded-md" />
            <input type="submit" value="Contact Us" className="sm:ml-3 mt-4 sm:mt-0 py-2 sm:py-2 px-6 cursor-pointer border-2 border-red-500 bg-red-500 rounded-sm md:rounded-md shadow-md hover:bg-white hover:text-red-500 hover:border-red-500 transition-all duration-300" />
          </form>
        </div>
      </div>
      <div className=" bg-navbg py-10 md:py-7">
        <div className="container w-10/12 m-auto flex justify-between items-center flex-col md:flex-row">
          <nav className="flex items-center flex-col md:flex-row">
            <Link to="/" className="mb-6 md:mb-0 md:mr-7">
              <img src="/images/logo-bookmark2.svg" alt="logo"/>
            </Link>
            <ul className="nav-list flex items-center flex-col md:flex-row">
              <li className="my-4 md:my-0 md:mx-5 transition-all duration-300 text-sm hover:text-red-500">
                <Link className="nav-link" to="/">FEATURES</Link>
              </li>
              <li className="my-4 md:my-0 md:mx-5 transition-all duration-300 text-sm hover:text-red-500">
                <Link className="nav-link" to="/">PRICING</Link>
              </li>
              <li className="my-4 md:my-0 md:mx-5 transition-all duration-300 text-sm hover:text-red-500">
                <Link className="nav-link" to="/">CONTACT</Link>
              </li>
            </ul>
          </nav> 
          <div className="mt-4 md:mt-0">
            <Link to="/" className="mx-5 text-white hover:text-red-500 text-2xl">
              <i className="fa fa-facebook-official"></i>
            </Link>
            <Link to="/" className="mx-5 text-white hover:text-red-500 text-2xl">
              <i className="fa fa-twitter"></i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
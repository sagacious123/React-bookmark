import React, { useState, useEffect } from 'react'
import './Navbar.css'
import '../assets/tailwind.css'
import { Link } from 'react-router-dom'


const Navbar = () => {

  const [click, setClick] = useState(false);
  const [nav, setNav] = useState(true);

  const changeIcon = () => {
    setClick(!click);
  }
  useEffect(() => {
    showNav();
  }, [])

  const showNav = () => {
    if(window.innerWidth <= 960) {
      setNav(false)
    } else {
      setNav(true)
    }
  }

  window.addEventListener("resize", showNav);

  return (
    <header>
      <div className="container w-10/12 m-auto">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className={click ? "opacity-0" : "opacity-100"}>
            <img src="/images/logo-bookmark.svg" alt="logo"/>
          </Link>
          { nav
            && 
            <nav className={`flex justify-between items-center ${click ? "nav-items active" : "nav-items"}`}>
              <ul className="nav-list">
                <li className="inline px-5 py-3 mx-2 transition-all duration-300 text-sm hover:text-red-500">
                  <Link className="nav-link" to="/">FEATURES</Link>
                </li>
                <li className="inline px-5 py-3 mx-2 transition-all duration-300 text-sm hover:text-red-500">
                  <Link className="nav-link" to="/">PRICING</Link>
                </li>
                <li className="inline px-5 py-3 mx-2 transition-all duration-300 text-sm hover:text-red-500">
                  <Link className="nav-link" to="/">CONTACT</Link>
                </li>
              </ul>
              <button className="ml-4 px-7 py-2 transition-all duration-300 text-white border-2 border-solid border-red-500 hover:bg-transparent hover:text-red-500 text-sm bg-red-500 rounded-md">LOGIN</button>
            </nav> 
          }
        
          { !nav 
            &&
            <div className={`menu-icon text-xl z-40 cursor-pointer ${click && "fixed right-4/50"}`} onClick={changeIcon}> 
              <i className={click ? "fa fa-close text-white" : "fa fa-bars"}></i>
            </div> 
          }
        </div>
      </div>
      <div className={`fixed z-20 top-0 pt-7 w-full h-full bg-navbg transition-all duration-300 bg-opacity-90 transform ${click ? "translate-x-0" : "translate-x-full"} ${nav && "translate-x-full"} `}>
        <div className="w-10/12 m-auto">
          <Link to="/">
              <img src="/images/logo-bookmark3.svg" alt="logo"/>
          </Link>
          <nav className="items-center text-center pt-12 flex flex-col">
            <ul className="w-full">
              <li className="w-full transition-all duration-300 border-solid border-t border-opacity-30 border-gray-100 text-lg text-white">
                <Link className="nav-link tracking-widest spacing-md py-4 block hover:bg-white hover:text-red-500 transition-all duration-300" to="/">FEATURES</Link>
              </li>
              <li className="w-full transition-all duration-300 border-solid border-t border-opacity-30 border-gray-100 text-lg text-white">
                <Link className="nav-link tracking-widest py-4 block hover:bg-white hover:text-red-500 transition-all duration-300" to="/">PRICING</Link>
              </li>
              <li className="w-full transition-all duration-300 border-solid border-t border-opacity-30 border-gray-100 border-b text-lg text-white">
                <Link className="nav-link tracking-widest spacing-md py-4 block hover:bg-white hover:text-red-500 transition-all duration-300" to="/">CONTACT</Link>
              </li>

            </ul>
            <button className="px-4 py-2 w-full tracking-widest transition-all duration-300 text-white border-2 border-solid border-white bg-transparent hover:bg-red-500 hover:border-transparent text-lg font-bold mt-6 rounded-md">LOGIN</button>
          </nav>
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-10">
            <Link to="/" className="mx-3 text-white hover:text-red-500 text-2xl">
              <i className="fa fa-facebook-official"></i>
            </Link>
            <Link to="/" className="mx-3 text-white hover:text-red-500 text-2xl">
              <i className="fa fa-twitter"></i>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar

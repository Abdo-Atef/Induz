import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {


  const [NavBarChange, setNavBarChange] = useState(false);
  const [NavBarSlide, setNavBarSlide] = useState(false);


  window.addEventListener('scroll', ()=>{ window.scrollY > 50 ? setNavBarChange(true) : setNavBarChange(false) })
  
  return (
    <nav className={`NavBar ${NavBarChange?'bg-white py-2 shadow-lg':'bg-transparent py-4'} fixed z-50 w-full duration-500 max-sm:px-4`}>
      <div className={`container mx-auto lg:px-16 p-2 flex justify-between items-center`}>
        <h1 className={`${NavBarChange?'text-orange-500':'text-white'} text-4xl font-bold duration-500`}>Induz.</h1>
        <ul className={`${NavBarChange?'*:text-black':'*:text-white'} sm:flex max-sm:hidden gap-4 items-center *:font-semibold *:text-lg *:cursor-pointer *:duration-300`}>
          <li className={`hover:text-orange-500 px-2`}>
            <NavLink to={'/'}>Home</NavLink>
          </li>
          <li className={`hover:text-orange-500 px-2`}>
            <NavLink to={'/About'}>About</NavLink>
          </li>
          <li className={`hover:text-orange-500 px-2`}>
            <NavLink to={'/Services'}>Services</NavLink>
          </li>
          <li className={`hover:text-orange-500 px-2`}>
            <NavLink to={'/Contact'}>Contact</NavLink>
          </li>
        </ul>
        <button className={`mx-2 ${NavBarChange?'text-black':'text-white'} sm:hidden`} onClick={()=>setNavBarSlide(!NavBarSlide)}>
          <i className="fa-solid fa-bars text-2xl"></i>
        </button>
      </div>
      <ul className={`${NavBarSlide ? 'ulHeight' : 'h-0'} overflow-hidden bg-white sm:hidden *:my-2 *:py-2 *:font-semibold *:text-lg *:cursor-pointer *:duration-300 rounded duration-300`}>
        <li className={`hover:text-orange-500 text-center`}>
          <NavLink to={'/'}>Home</NavLink>
        </li>
        <li className={`hover:text-orange-500 text-center`}>
          <NavLink to={'/About'}>About</NavLink>
        </li>
        <li className={`hover:text-orange-500 text-center`}>
          <NavLink to={'/Services'}>Services</NavLink>
        </li>
        <li className={`hover:text-orange-500 text-center`}>
          <NavLink to={'/Contact'}>Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

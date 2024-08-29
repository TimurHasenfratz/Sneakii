
import {Outlet, Link } from "react-router-dom";
import React, { useState } from 'react';
import './App.css'
import './index.css'

function Navbar() {
 
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
   


  <nav className="top-0">
    <ul className=' grid  '>
      <li className=" m-auto flex  ">
      <button onClick={toggleMenu}><img src="menu.png" className="w-10 bg-slate-50 rounded-lg p-2 hover:bg-transparent hover:border-2 border-teal-200" /></button>
      </li>
      {openMenu ? (
      <li className='mt-2 sm:flex grid gap-2 backdrop-blur-xl w-fit m-auto p-4 rounded-lg  '>
        <Link to="/">Home</Link>
        <Link to="Sneaker">Sneaker</Link>
        <Link to="/Login">Login</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
      </li>
           ) : null}
      <Outlet />
    </ul>
  </nav>


    
  )
}

export default Navbar


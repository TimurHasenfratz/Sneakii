
import {Outlet, Link } from "react-router-dom";
import React, { useState } from 'react';
import './App.css'

function Navbar() {
 

  return (
    <main>
  <nav className='  '>
    <ul className='  h-[2rem] '>
      <li className=' hidden  gap-4 p-4 sm:flex'>
        <Link to="/">Home</Link>
        <Link to="Sneaker">Sneaker</Link>
        <Link to="/Login">Login</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
      </li>
      <Outlet />
    </ul>
  </nav>


    </main>
  )
}

export default Navbar


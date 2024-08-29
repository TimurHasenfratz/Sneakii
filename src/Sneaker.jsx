import React, { useState } from 'react';
import SneakerGallery from './SneakerGallery'; 
import './App.css';

function Sneaker({ addToCart }) {
  const sneakers = [

    {
      imageUrl: "Sneaker-White-Custom.webp",
      name: "Nike Air",
      price: 90,
      sizes: [40, 41, 42, 43],
      colors: ["White", "Blue", "Red"],
    },
    {
      imageUrl: "Sneaker-Blue2.webp",
      name: "Nike Air",
      price: 40,
      sizes: [37,38,39,40, 41, 42, 43,44,45],
      colors: ["White", "Blue", "Red"],
    },
    {
      imageUrl: "SneakerBlue-.webp",
      name: "Nike Air",
      price: 55,
      sizes: [40, 41, 42, 43],
      colors: ["White", "Blue", "Red"],
    },
    {
      imageUrl: "SneakerBlue3.webp",
      name: "Nike Air",
      price: 60,
      sizes: [40, 41, 42, 43],
      colors: ["White", "Blue", "Red"],
    },
    {
      imageUrl: "SneakerBlueDark.webp",
      name: "Nike Air",
      price: 20,
      sizes: [40, 41, 42, 43],
      colors: ["White", "Blue", "Red","Orange"],
    },
    {
      imageUrl: "SneakerBlueDark2.webp",
      name: "Nike Air",
      price: 90,
      sizes: [40, 41, 42, 43],
      colors: ["White", "Blue", "Red"],
    },
    {
      imageUrl: "SneakerCustomWhite.webp",
      name: "Nike Air",
      price: 90,
      sizes: [40, 41, 42, 43],
      colors: ["White", "Blue", "Red","Custom"],
    },
    {
      imageUrl: "SneakerOrange.webp",
      name: "Nike Air",
      price: 90,
      sizes: [40, 41, 42, 43],
      colors: ["White", "Blue", "Red"],
    },
    {
      imageUrl: "SneakerOrangeWhite.webp",
      name: "Nike Air",
      price: 90,
      sizes: [40, 41, 42, 43],
      colors: ["White", "Blue", "Red"],
    },
    {
      imageUrl: "SneakerRedDark.webp",
      name: "Nike Air",
      price: 90,
      sizes: [40, 41, 42, 43],
      colors: ["White", "Blue", "Red"],
    },
    {
      imageUrl: "SneakerRedWhite.webp",
      name: "Nike Air",
      price: 90,
      sizes: [40, 41, 42, 43],
      colors: ["White", "Blue", "Red"],
    },
    {
      imageUrl: "SneakerWhite.webp",
      name: "Nike Air",
      price: 90,
      sizes: [40, 41, 42, 43],
      colors: ["White", "Blue", "Red"],
    },

    // ... (weitere Sneaker-Daten)
  ];

  

  return (
    <>
    <div className="sm:text-2xl text-xl  text-center my-32 text-slate-50 grid sm:flex gap-10 mb-[20rem] w-fit m-auto  p-4 h-[10rem] justify-center ">
      <img src="SneakerHeader.png" className="sm:w-[20rem] w-[10rem]  sneak m-auto" />
      <div className=" gap-10 grid m-auto text-center w-full backdrop-blur-xl">
      <h1 className=" ">Find a shoe that fits your lifestyle</h1>
    <h2>Explore our collection</h2>
      </div>
   
    </div>

      <SneakerGallery sneakers={sneakers} addToCart={addToCart} />

    </>
  );
}

export default Sneaker;

import React, { useState } from 'react';
import './App.css';

function SneakerGallery({ sneakers, addToCart }) {
  const [filteredSneakers, setFilteredSneakers] = useState([...sneakers]);
  const [filterType, setFilterType] = useState('');
  const [filterValue, setFilterValue] = useState('');

  const applyFilter = () => {
    if (filterType === 'price') {
      const [minPrice, maxPrice] = filterValue.split('-');
      setFilteredSneakers(sneakers.filter(sneaker => sneaker.price >= parseInt(minPrice) && sneaker.price <= parseInt(maxPrice)));
    } else if (filterType === 'size') {
      setFilteredSneakers(sneakers.filter(sneaker => sneaker.sizes.includes(parseInt(filterValue))));
    } else if (filterType === 'color') {
      setFilteredSneakers(sneakers.filter(sneaker => sneaker.colors.includes(filterValue)));
    }
  };

  return (
    <div className='my-20 sm:mb-[10rem] mb-[22rem] text-center text-2xl text-slate-900 Sneaker '>
      <h2 className='text-4xl my-10 text-teal-50 w-fit m-auto'>{"Sneaker"}</h2>
      <div className='flex w-fit m-auto border-2 gap-4 rounded-xl bg-[#E4F1FF] p-1'>
        <select className='w-fit m-auto bg-transparent text-center hover:bg-teal-100 rounded-lg transition-all ease-in-out border-none' value={filterType} onChange={(e) => setFilterType(e.target.value)}>
          <option value="price">Price</option>
          <option value="size">Size</option>
          <option value="color">Color</option>
        </select>
        {filterType && (
          <select className='w-fit m-auto bg-transparent text-center hover:bg-teal-100 rounded-lg transition-all ease-in-out border-none' value={filterValue} onChange={(e) => setFilterValue(e.target.value)}>
            <option value="">Select</option>
            {filterType === 'price' && (
              <>
                <option value="0-50">$0 - $50</option>
                <option value="50-100">$50 - $100</option>
                <option value="100-200">$100 - $200</option>
              </>
            )}
            {filterType === 'size' && (
              <>
                <option value="37">37</option>
                <option value="38">38</option>
                <option value="39">39</option>
                <option value="40">40</option>
                <option value="41">41</option>
                <option value="42">42</option>
                <option value="43">43</option>
                <option value="44">44</option>
                <option value="45">45</option>
              </>
            )}
            {filterType === 'color' && (
              <>
                <option value="White">White</option>
                <option value="Black">Black</option>
                <option value="Orange">Orange</option>
                <option value="Blue">Blue</option>
                <option value="Red">Red</option>
                <option value="Custom">Custom</option>
              </>
            )}
          </select>
        )}
        <button className='m-auto rounded-lg p-2 hover:bg-teal-100 hover:text-slate-950' onClick={applyFilter}>
          <img src="/search_.svg" alt="" />
        </button>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 sm:grid-cols-1 gap-y-80 sm:gap-y-20 m-auto sneaker-container mt-20'>
        {filteredSneakers.map((sneaker, index) => (
          <div key={index} className='z-20 w-fit shadow-lg rounded-xl snker p-0 hover:shadow-teal-300 m-auto hover:translate-y-[-0.4rem] transition-all ease-in-out hover:transition-all hover:ease-in-out'>
            <img loading='lazy' src={sneaker.imageUrl} alt='Product-Image' width={100} height={100} className='w-[22rem] m-auto rounded-t-xl object-cover h-[20rem] z-20' />
            <div className='bg-[#EEF7FF] text-slate-900 m-auto text-xl grid'>
              <h3 className='w-full mt-4'>{sneaker.name}</h3>
              <br />
              <p className='w-full my-2 text-3xl'>{sneaker.price}$</p>
            </div>
            <div className='flex w-full m-auto'>
              <select name='Size' className='m-auto w-full bg-[#EEF7FF] border-y-4 border-teal-900 p-2 hover:cursor-pointer transition-all ease-in-out'>
                {sneaker.sizes.map((size, sizeIndex) => (
                  <option className='text-slate-950 text-center' key={sizeIndex} value={size}>{size}</option>
                ))}
              </select>
              <select name='Color' className='m-auto w-full hover:cursor-pointer border-y-4 border-teal-900 transition-all ease-in-out bg-[#F3F8FF] p-2'>
                {sneaker.colors.map((color, colorIndex) => (
                  <option className='text-slate-950 text-center' key={colorIndex} value={color}>{color}</option>
                ))}
              </select>
            </div>
            <button onClick={() => addToCart(sneaker)} className='hover:text-slate-50 rounded-b-lg p-2 text-3xl m-auto w-full transition-all ease-in-out hover:bg-[#053B50] bg-slate-50'>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SneakerGallery;

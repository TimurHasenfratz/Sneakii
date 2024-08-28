import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './App.css';

function Slid({ addToCart }) {
  const [selectedOptions, setSelectedOptions] = useState({ color: '', size: '' });
  const [likedSlides, setLikedSlides] = useState({});

  const handleOptionChange = (e) => {
    setSelectedOptions({
      ...selectedOptions,
      [e.target.name]: e.target.value
    });
  };

  const handleLike = (id) => {
    setLikedSlides((prevLikedSlides) => ({
      ...prevLikedSlides,
      [id]: !prevLikedSlides[id]
    }));
  };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "50px",
        }
      }
    ]
  };

  const slidesData = [
    {
      id: 1,
      src: "SneakerWhite.webp",
      alt: "White Air Force 1",
      text: "White Air Force 1",
      price: "50$",
      link: ""
    },
    {
      id: 2,
      src: "SneakerBlue-.webp",
      alt: "Blue Air Jordan",
      text: "Blue Air Jordan",
      price: "60$",
      link: ""
    },
    {
      id: 3,
      src: "Sneaker-Blue2.webp",
      alt: "Blue Air Jordan",
      text: "Blue Air Jordan",
      price: "55$",
      link: ""
    },
    {
      id: 4,
      src: "SneakerOrangeWhite.webp",
      alt: "White Orange Air Jordan",
      text: "White Orange Air Jordan",
      price: "65$",
      link: ""
    },
    {
      id: 5,
      src: "SneakerCustomWhite.webp",
      alt: "Custom Nike",
      text: "Custom Nike",
      price: "70$",
      link: ""
    },
    {
      id: 6,
      src: "Sneaker-White-Custom.webp",
      alt: "Custom Nike",
      text: "Custom Nike",
      price: "75$",
      link: ""
    }
  ];

  return (
    <main className="slider-container gradient-shadow-container my-20">
      <Slider {...settings}>
        {slidesData.map((slide) => (
          <div key={slide.id} className="carousel-slide relative">
            <img src={slide.src} alt={slide.alt} className="carousel-image" />
            <button 
              className="absolute p-2 top-1 right-0"
              onClick={() => handleLike(slide.id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill={likedSlides[slide.id] ? "red" : "none"}
                stroke={likedSlides[slide.id] ? "red" : "currentColor"}
                strokeWidth="2"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                />
              </svg>
            </button>
            <div className="absolute center-elements">
              <p className="carousel-price">{slide.price}</p>
              <button
                className="carousel-button"
                onClick={() => addToCart({ ...slide, ...selectedOptions })}
              >
                Add To Cart
              </button>
            </div>
            <div className="carousel-text-container w-full bg-teal-500 mt-20 grid">
              <p className="carousel-text bg-teal-800 w-full">{slide.text}</p>
              <ul>
                <div className="flex gap-2 p-0 w-full m-auto justify-center">
                  <select
                    className="w-full"
                    name="color"
                    onChange={handleOptionChange}
                  >
                    <option value="">Color</option>
                    <option value="Orange">Orange</option>
                    <option value="Green">Green</option>
                    <option value="White">White</option>
                    <option value="Blue">Blue</option>
                  </select>
                  <select
                    className="w-full"
                    name="size"
                    onChange={handleOptionChange}
                  >
                    <option value="">Size</option>
                    <option value="40">40</option>
                    <option value="41">41</option>
                    <option value="42">42</option>
                    <option value="43">43</option>
                  </select>
                </div>
              </ul>
            </div>
          </div>
        ))}
      </Slider>
    </main>
  );
}

export default Slid;

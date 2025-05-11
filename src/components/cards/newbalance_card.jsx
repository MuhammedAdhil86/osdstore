import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import nb1 from '../contents/card_img/new_balance/nb1.jpeg';
import nb2 from '../contents/card_img/new_balance/nb2.jpeg';
import nb3 from '../contents/card_img/new_balance/nb3.jpeg';

export default function Newbalance_Card() {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  const products = [
    { id: 1, name: "New Balance 740 Red Silver", price: 249, originalPrice: 2999.00, image: nb1 },
    { id: 2, name: "Adidas Ultra Boost", price: 199, originalPrice: 250, image: nb2 },
    { id: 3, name: "New Balance 550", price: 179, originalPrice: 220, image: nb3 },
  ];

  const handleviewProduct = (product) => {
    localStorage.setItem('product-details', JSON.stringify([product]));
    navigate('/product-details');
  };

  return (
    <div className="container mx-auto px-4 overflow-hidden mt-4 h-[30rem] sm:w-[35rem] sm:h-[29rem] md:w-[45rem] lg:w-[70rem]">
      <div className="flex items-center justify-between">
        <div className="flex-grow text-center sm:text-center pb-4">
          <span className="font-serif text-2xl sm:text-2xl md:text-3xl">New Balance</span>
        </div>
        <span className="relative sm:text-md text-lg inline-block transition-transform duration-300 ease-in-out hover:translate-y-1 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-black after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100">
          VIEW ALL
        </span>
      </div>

      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="bg-white">
            <div className="relative w-full rounded-lg">
              <img
                className="h-60 w-full rounded-t-lg object-cover sm:w-[33rem] p-2"
                src={product.image}
                alt={product.name}
              />
              <div className="mt-4 px-5 pb-5">
                <h5 className="text-xl font-semibold tracking-tight text-slate-900">
                  {product.name}
                </h5>
                <div className="flex items-center justify-between mt-3">
                  <p>
                    <span className="text-3xl font-bold text-slate-900">₹{product.price}</span>
                    <span className="text-sm text-slate-900 line-through ml-2">₹{product.originalPrice}</span>
                  </p>
                  <button
                    onClick={() => handleviewProduct(product)}
                    className="flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

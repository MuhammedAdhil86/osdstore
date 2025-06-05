// ProductView.js
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaTruck } from 'react-icons/fa';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import tump1 from '../../img/nb-tumb/add-thumnail(1).jpeg';
import tump2 from '../../img/nb-tumb/add-thumnail (2).jpeg';
import tump3 from '../../img/nb-tumb/add-thumnail (3).jpeg';

export default function ProductView() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [cartItem, setCartItem] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [productImages, setProductImages] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const productFromNav = location.state?.product;

    if (productFromNav) {
      setCartItem(productFromNav);
      setSelectedImage(productFromNav.image);

      const initialImages = [{ id: 'main', name: 'Main', image: productFromNav.image }];
      const additionalImages = [
        { id: 1, name: "Apple", image: tump1 },
        { id: 2, name: "Banana", image: tump2 },
        { id: 3, name: "Orange", image: tump3 },
      ];

      setProductImages([...initialImages, ...additionalImages]);

      localStorage.setItem('cart', JSON.stringify([productFromNav]));
    } else {
      const storedCart = JSON.parse(localStorage.getItem('cart'));
      if (storedCart && storedCart.length > 0) {
        const product = storedCart[0];
        setCartItem(product);
        setSelectedImage(product.image);

        const initialImages = [{ id: 'main', name: 'Main', image: product.image }];
        const additionalImages = [
          { id: 1, name: "Apple", image: tump1 },
          { id: 2, name: "Banana", image: tump2 },
          { id: 3, name: "Orange", image: tump3 },
        ];
        setProductImages([...initialImages, ...additionalImages]);
      }
    }
  }, [location.state]);

  const handleAddToCart = () => {
    const updatedCart = [{ ...cartItem, size: selectedSize }];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    navigate('/cart');
  };

  if (!cartItem) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Your cart is empty.</p>
      </div>
    );
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const shoeSizes = [40, 41, 42, 43, 44, 45, 56];

  return (
    <div className="container text-black flex flex-col md:flex-row items-center md:items-start justify-center p-4 gap-8 lg:mt-40 md:mt-40 mb-10">
      <div className="w-full h-[27rem] md:w-1/2 flex flex-col items-center">
        <div className="hidden md:block">
          <img
            src={selectedImage}
            alt={cartItem.name}
            className="h-[20rem] lg:w-[28rem] sm:w-96 object-cover rounded-md"
          />
        </div>

        <div className="w-full h-full block md:hidden overflow-hidden">
          <Slider {...sliderSettings}>
            {productImages.map((item) => (
              <div key={item.id}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="sm:w-[33rem] sm:h-[23rem] object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>

        <div className="w-full mt-11 hidden md:grid grid-cols-4 gap-2">
          {productImages.map((item) => (
            <button
              key={item.id}
              className={`relative rounded-lg overflow-hidden border-2 transition-all duration-300 ${selectedImage === item.image ? "border-blue-500" : "border-transparent"}`}
              onClick={() => setSelectedImage(item.image)}
            >
              <img src={item.image} alt={`Thumbnail ${item.name}`} className="w-full h-24 object-cover" />
            </button>
          ))}
        </div>
      </div>

      <div className="w-full md:w-1/2 space-y-4">
        <h1 className="text-3xl font-bold lg:w-96">{cartItem.name}</h1>
        <div className="flex items-center space-x-3">
          <span className="text-xl font-bold">Rs. {cartItem.price}</span>
          <span className="bg-red-600 text-xs uppercase px-2 py-1 rounded text-white">Sale</span>
        </div>
        <p className="text-sm text-gray-600">Shipping calculated at checkout.</p>

        <div className="space-y-2">
          <label className="block text-sm font-bold">Size</label>
          <div className="flex gap-3">
            {shoeSizes.map((size) => (
              <button
                key={size}
                className={`px-2 py-2 border rounded-md ${selectedSize === size ? 'bg-black text-white' : 'bg-gray-100'}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <button className="w-full bg-black text-white font-medium py-3 rounded-md" onClick={handleAddToCart}>
            Add to cart
          </button>
          <button className="w-full bg-green-500 text-white font-medium py-3 rounded-md">
            ORDER ON WHATSAPP
          </button>
        </div>

        <div className="w-full max-w-2xl mx-auto p-4 rounded-md border border-gray-400">
          <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <div className="flex items-center gap-2">
              <FaTruck />
              <span className="font-bold">Shipping</span>
            </div>
            <button className="text-black text-xl transform transition-transform duration-300" aria-expanded={isOpen}>
              {isOpen ? '▲' : '▼'}
            </button>
          </div>

          {isOpen && (
            <div className="mt-2 space-y-2 text-sm">
              <p>Note – Please WhatsApp us at <span className="font-bold">8593843621</span> to Confirm the Availability</p>
              <p>Delivery Time – 4 to 5 Working days in state capitals and metro cities.</p>
              <p>5 to 8 Working days in other locality.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

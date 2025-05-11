// src/components/ProductPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const { categoryId } = useParams();  // Get the category ID from the URL
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/v1/category/${categoryId}/products/`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    if (categoryId) {
      fetchProducts();
    }
  }, [categoryId]);

  if (!products.length) {
    return <div>No products available in this category.</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded-md shadow-lg">
          <img
            src={`http://127.0.0.1:8000${product.image1}`}
            alt={product.name}
            className="w-full h-48 object-cover rounded-md"
          />
          <h3 className="text-xl mt-2">{product.name}</h3>
          <p className="text-lg mt-2">${product.price}</p>
          <p className="text-sm mt-1">{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;

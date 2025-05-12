import React, { useState, memo } from 'react';
import { motion } from 'framer-motion';

const ordersMock = [
  {
    id: '5220712134013222',
    date: '04/02/2023 10:50 am',
    status: 'Delivered',
    product: {
      name: 'NUUA S4 Pro 5G Chrome Silver 6GB+128GB',
      price: 299,
      qty: 1,
      image: '/phone.jpg',
    },
  },
  {
    id: '5220712134013223',
    date: '04/02/2023 11:00 am',
    status: 'Shipped',
    product: {
      name: 'NUUA S4 Pro 5G Chrome Silver 6GB+128GB',
      price: 299,
      qty: 1,
      image: '/phone.jpg',
    },
  },
  {
    id: '5220712134013224',
    date: '04/02/2023 11:10 am',
    status: 'Cancelled',
    product: {
      name: 'NUUA S4 Pro 5G Chrome Silver 6GB+128GB',
      price: 299,
      qty: 1,
      image: '/phone.jpg',
    },
  },
  {
    id: '5220712134013225',
    date: '04/02/2023 11:20 am',
    status: 'Returned',
    product: {
      name: 'NUUA S4 Pro 5G Chrome Silver 6GB+128GB',
      price: 299,
      qty: 1,
      image: '/phone.jpg',
    },
  },
];

const statuses = ['All', 'Shipped', 'Delivered', 'Cancelled', 'Returned'];

const OrderList = () => {
  const [selected, setSelected] = useState('All');

  const filteredOrders =
    selected === 'All' ? ordersMock : ordersMock.filter(o => o.status === selected);

  const statusColor = status => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-600';
      case 'Shipped':
        return 'bg-yellow-500';
      case 'Cancelled':
        return 'bg-red-500';
      case 'Returned':
        return 'bg-blue-500';
      default:
        return 'bg-gray-400';
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto lg:mt-36 md:mt-36 sm:mt-16 mt-16 lg:mb-1 md:mb-2 mb-14">
      <h2 className="text-xl font-semibold mb-4">My Orders</h2>

      {/* Filter tabs */}
      <div className="flex space-x-4 mb-6 lg:border-b md:border-b sm:border-b border-b pb-2 ">
        {statuses.map(status => (
          <button
            key={status}
            onClick={() => setSelected(status)}
            className={`px-3 py-1 border-b-2 ${
              selected === status
                ? 'border-black text-black font-semibold'
                : 'border-transparent text-gray-500'
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Orders list */}
      {filteredOrders.map((order, index) => (
        <motion.div
          key={order.id}
          className="border rounded-lg p-4 mb-4 shadow-sm w-full lg:w-full md:w-full sm:w"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 25,
            delay: index * 0.1, // adds a staggered effect for smooth transitions
          }}
        >
          <div className="flex justify-between items-center mb-2">
            <div className={`text-white text-sm px-2 py-1 rounded ${statusColor(order.status)}`}>
              {order.status}
            </div>
          </div>

          <div className="text-sm text-gray-600 mb-2">
            {order.date} | Order No: {order.id}
          </div>

          <div className="flex items-center gap-4">
            <img
              src={order.product.image}
              alt="Product"
              className="w-16 h-16 object-cover rounded"
            />
            <div className="flex-1">
              <div className="font-medium text-gray-900">{order.product.name}</div>
              <div className="text-gray-500 text-sm">
                ${order.product.price} × {order.product.qty}
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600">Total:</div>
              <div className="font-semibold text-lg text-gray-800">
                ${order.product.price}
              </div>
              <button className="mt-2 border px-3 py-1 text-sm rounded hover:bg-gray-100">
                Order Details
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default memo(OrderList);

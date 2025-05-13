import React, { useState, memo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import delivered from '../../img/nb-tumb/add-thumnail (2).jpeg';
import shipped from '../../img/nb-tumb/add-thumnail (3).jpeg';
import cancelled from '../../img/nb-tumb/add-thumnail (4).jpeg';
import returned from '../../img/nb-tumb/add-thumnail(1).jpeg';

// Mock orders
const ordersMock = [
  {
    id: '5220712134013222',
    date: '04/02/2023 10:50 am',
    status: 'Delivered',
    product: {
      name: 'New Balance classic 520',
      price: 299,
      qty: 1,
      image: delivered,
    },
  },
  {
    id: '5220712134013223',
    date: '04/02/2023 11:00 am',
    status: 'Shipped',
    product: {
      name: 'New Balance classic 520',
      price: 299,
      qty: 1,
      image: shipped,
    },
  },
  {
    id: '5220712134013224',
    date: '04/02/2023 11:10 am',
    status: 'Cancelled',
    product: {
      name: 'New Balance classic 520',
      price: 299,
      qty: 1,
      image: cancelled,
    },
  },
  {
    id: '5220712134013225',
    date: '04/02/2023 11:20 am',
    status: 'Returned',
    product: {
      name: 'New Balance classic 520',
      price: 299,
      qty: 1,
      image: returned,
    },
  },
];

// Available status filters
const statuses = ['All', 'Shipped', 'Delivered', 'Cancelled', 'Returned'];

// Mapping order status to step number
const statusStepMap = {
  Placed: 0,
  Packed: 1,
  Trucked: 2,
  Shipped: 2,
  Delivered: 3,
  Returned: 3,
  Cancelled: -1, // special case
};

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
    <div className="p-6 max-w-3xl mx-auto mt-16 mb-16">
      <h2 className="text-xl font-semibold mb-4">My Orders</h2>

      {/* Filter Tabs */}
      <div className="flex space-x-4 mb-6 pb-2">
        {statuses.map(status => (
          <button
            key={status}
            onClick={() => setSelected(status)}
            className={`px-3 py-1 border-b-2 transition-colors ${
              selected === status
                ? 'border-black text-black font-semibold'
                : 'border-transparent text-gray-500'
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Orders List */}
      {filteredOrders.map((order, index) => (
        <motion.div
          key={order.id}
          className="border rounded-lg p-4 mb-4 shadow-sm w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 25,
            delay: index * 0.1,
          }}
        >
          <div className="flex justify-between items-center mb-2">
            <div
              className={`text-white text-sm px-2 py-1 rounded ${statusColor(
                order.status
              )}`}
            >
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
              <div className="font-medium text-gray-900">
                {order.product.name}
              </div>
              <div className="text-gray-500 text-sm">
                ${order.product.price} × {order.product.qty}
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600">Total:</div>
              <div className="font-semibold text-lg text-gray-800">
                ${order.product.price}
              </div>

              {/* Link to Order Tracker with step passed */}
              <Link
                to={`/ordertracker?step=${statusStepMap[order.status] ?? 0}&status=${order.status}&id=${order.id}`}
              >
                <button className="mt-2 border px-3 py-1 text-sm rounded hover:bg-gray-100">
                  Order Details
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default memo(OrderList);

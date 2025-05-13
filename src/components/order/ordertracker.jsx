import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';

const steps = ['Placed', 'Trucked', 'Delivered'];

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const OrderTracker = () => {
  const query = useQuery();
  const currentStep = parseInt(query.get('step') ?? '0');
  const orderCode = query.get('id') ?? 'UNKNOWN';

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-md shadow-sm mt-36">
      <h2 className="text-xl font-semibold mb-4">Track your Order</h2>
      <p className="mb-6 text-gray-700">
        Order Code: <span className="font-mono">{orderCode}</span>
      </p>

      {/* Steps Progress Bar */}
      <div className="relative flex justify-between items-center mb-6">
        {/* Connector Line */}
        <div className="absolute top-3 left-0 w-full h-1 bg-gray-200 z-0" />
        <div
          className="absolute top-3 left-0 h-1 bg-green-400 z-10 transition-all duration-300"
          style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
        />

        {steps.map((step, index) => {
          const isCompleted = index <= currentStep;
          return (
            <div key={index} className="relative z-20 flex flex-col items-center w-1/3">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold ${
                  isCompleted ? 'bg-green-500' : 'bg-gray-300'
                }`}
              >
                {isCompleted ? <FaCheck size={12} /> : ''}
              </div>
              <span
                className={`mt-2 text-sm text-center ${
                  isCompleted ? 'text-green-600' : 'text-gray-400'
                }`}
              >
                {step}
              </span>
            </div>
          );
        })}
      </div>

      {/* Delivery Message */}
      <p className="text-gray-800 font-medium">
        Your order has been{' '}
        <span className="text-green-600 font-semibold">
          {steps[currentStep]?.toLowerCase() ?? 'processing'}
        </span>
        .
      </p>
    </div>
  );
};

export default OrderTracker;

import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';

const steps = ['Placed', 'Packed', 'Trucked', 'Delivered'];

const OrderTracker = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const currentStep = parseInt(searchParams.get('step'), 10);
  const status = searchParams.get('status');
  const orderCode = searchParams.get('id');

  const isCancelled = status === 'Cancelled';

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-md shadow-sm mt-36">
      <h2 className="text-xl font-semibold mb-4">Track your Order</h2>
      <p className="mb-6 text-gray-700">
        Order Code: <span className="font-mono">{orderCode}</span>
      </p>

      {/* Progress bar */}
      <div className="relative flex justify-between items-center mb-6">
        <div className="absolute top-3 left-0 w-full h-1 bg-gray-200 z-0" />
        {!isCancelled && (
          <div
            className="absolute top-3 left-0 h-1 bg-green-400 z-10 transition-all duration-300"
            style={{
              width: `${(currentStep / (steps.length - 1)) * 100}%`,
            }}
          />
        )}
        {steps.map((step, index) => {
          const isCompleted = index <= currentStep && !isCancelled;
          return (
            <div
              key={index}
              className="relative z-20 flex flex-col items-center w-1/4"
            >
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold ${
                  isCancelled
                    ? 'bg-red-400'
                    : isCompleted
                    ? 'bg-green-500'
                    : 'bg-gray-300'
                }`}
              >
                {isCancelled ? '✖' : isCompleted ? <FaCheck size={12} /> : ''}
              </div>
              <span
                className={`mt-2 text-sm text-center ${
                  isCancelled
                    ? 'text-red-500'
                    : isCompleted
                    ? 'text-green-600'
                    : 'text-gray-400'
                }`}
              >
                {step}
              </span>
            </div>
          );
        })}
      </div>

      <p className="text-gray-800 font-medium">
        {isCancelled ? (
          <span className="text-red-600 font-semibold">This order was cancelled.</span>
        ) : (
          <>
            Your order has been{' '}
            <span className="text-green-600 font-semibold">
              {steps[currentStep]?.toLowerCase()}
            </span>
          </>
        )}
      </p>
    </div>
  );
};

export default OrderTracker;

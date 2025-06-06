import React, { useRef, useState, useEffect } from "react";
import spinner from "../../img/loading/spinner.png"; // Replace with actual path

const SneakerLoader = () => {
  const [rotation, setRotation] = useState(0);
  const [progress, setProgress] = useState(0);
  const speedRef = useRef(1);
  const targetSpeedRef = useRef(1);
  const lastTimestamp = useRef(null);
  const animationFrame = useRef(null);

  const baseSpeed = 0.03;

  const animate = (timestamp) => {
    if (!lastTimestamp.current) lastTimestamp.current = timestamp;
    const delta = timestamp - lastTimestamp.current;
    lastTimestamp.current = timestamp;

    const speedDelta = targetSpeedRef.current - speedRef.current;
    speedRef.current += speedDelta * 0.1;

    setRotation((prev) => prev + delta * baseSpeed * speedRef.current);

    setProgress((prev) => {
      const next = prev + delta * 0.05;
      return next >= 100 ? 0 : next;
    });

    animationFrame.current = requestAnimationFrame(animate);
  };

  const handlePointerDown = () => {
    targetSpeedRef.current = 12;
  };

  const handlePointerUp = () => {
    targetSpeedRef.current = 1;
  };

  useEffect(() => {
    animationFrame.current = requestAnimationFrame(animate);
    window.addEventListener("pointerup", handlePointerUp);
    return () => {
      cancelAnimationFrame(animationFrame.current);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-4 bg-white/50 backdrop-blur-sm z-50"
    >
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 flex flex-col items-center gap-6">
        
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl sm:text-xl font-bold text-gray-800 mb-1">
            Loading Your Kicks...
          </h1>
        
        </div>

        {/* Spinner */}
        <div
          className="w-32 h-32 sm:w-36 sm:h-36 cursor-pointer active:cursor-grabbing"
          onPointerDown={handlePointerDown}
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: "transform 0.05s linear",
          }}
        >
          <img
            src={spinner}
            alt="Loading Spinner"
            className="w-full h-full object-contain pointer-events-none drop-shadow-lg"
          />
        </div>

        {/* Instruction */}
        <p className="text-center text-sm text-gray-600 italic animate-pulse">
          Touch and hold to spin faster!
        </p>

        {/* Progress Bar */}
        <div className="w-full h-4 rounded-full bg-black overflow-hidden relative">
          <div
            className="h-full transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
          <div className="absolute inset-0 animate-shine bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes shine {
          0% { background-position: -100% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shine {
          background-size: 200% 100%;
          animation: shine 2s linear infinite;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
};

export default SneakerLoader;

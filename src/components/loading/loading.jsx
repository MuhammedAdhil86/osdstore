export default function SneakerLoader() {
    return (
      <div className="h-screen w-screen bg-white flex flex-col items-center justify-center overflow-hidden">
        {/* Running Sneaker */}
        <div className="relative w-full h-40 overflow-hidden mb-6">
          <img
            src="/sneaker.png"
            alt="Running Sneaker"
            className="w-24 h-24 object-contain absolute animate-runner"
          />
        </div>
  
        {/* Loading Text */}
        <p className="text-gray-700 text-xl font-semibold tracking-wide animate-pulse">
          Loading your kicks...
        </p>
      </div>
    )
  }
  
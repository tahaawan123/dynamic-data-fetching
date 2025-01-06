
const Loader = () => {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-800">
        <div className="relative">
          {/* Outer Ring */}
          <div className="w-16 h-16 border-4 border-transparent border-t-purple-600 rounded-full animate-spin"></div>
  
          {/* Inner Glow */}
          <div className="absolute top-2 left-2 w-12 h-12 border-4 border-transparent border-t-purple-400 rounded-full animate-spin-slow"></div>
  
          {/* Center Dot */}
          <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-purple-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg"></div>
        </div>
      </div>
    );
  };
  
  export default Loader;
  
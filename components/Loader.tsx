

import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen  bg-black">
      <div className="relative flex items-center justify-center w-20 h-20">
        <div className="absolute w-20 h-20 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin-reverse"></div>
      </div>
    </div>
  );
};




export default Loader





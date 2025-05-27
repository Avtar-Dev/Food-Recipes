import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-3 space-y-6">
      <div
        className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500
         via-purple-500 to-blue-500 h-11">
        Loading
      </div>

      <div className="flex space-x-3">
        <span className="w-4 h-4 bg-pink-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
        <span className="w-4 h-4 bg-purple-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
        <span className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></span>
      </div>
      {/* <div className="text-4xl font-bold flex justify-center items-center mt-10">
        Loading
      </div>

      <div className="flex items-center justify-center  space-x-2">
        <span className="w-4 h-4 bg-pink-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
        <span className="w-4 h-4 bg-purple-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
        <span className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></span>
      </div> */}

      {/* <div className="flex items-center justify-center h-screen">
        <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
      </div> */}

      {/* <div className="flex justify-center items-center h-screen">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-t-transparent 
        border-r-pink-500 border-b-purple-500 border-l-blue-500"></div>
      </div> */}

      {/* <div className="flex justify-center items-center h-screen">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-blue-500 animate-ping"></div>
          <div className="absolute inset-0 rounded-full border-4 border-blue-700"></div>
        </div>
      </div> */}
    </div>
  );
};

export default Loader;

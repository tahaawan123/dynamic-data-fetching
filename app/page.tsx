import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="w-full min-h-screen bg-black flex flex-col justify-center items-center">
      <h1 className="text-center text-white  font-bold text-lg sm:text-6xl  font-serif pt-4">
        Server & Client Side Data Fetching...
      </h1>

      {/* Description */}
      <p className="text-center text-gray-300 text-lg mt-4 px-4">
        Learn how to fetch data effectively using Server-Side and Client-Side techniques. Explore the differences and benefits of each approach through hands-on examples.
      </p>

      {/* Decorative Divider */}
      <div className="flex justify-center mt-6">
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-600 rounded-full"></div>
      </div>

      {/* Buttons */}
      <div className="flex justify-center items-center flex-wrap gap-6 mt-12 pb-12 font-mono font-semibold">
        <button
          type="button"
          className="w-[200px] h-[50px] bg-gradient-to-r from-blue-500 to-green-600 shadow-lime-300 shadow-md hover:scale-95 transition-transform duration-300 rounded-md"
        >
          <Link href={"/Server"}>Server Side Data Fetching</Link>
        </button>

        <button
          type="button"
          className="w-[200px] h-[50px] bg-gradient-to-r from-blue-500 to-green-600 shadow-lime-300 shadow-md hover:scale-95 transition-transform duration-300 rounded-md"
        >
          <Link href={"/Client"}>Client Side Data Fetching</Link>
        </button>
      </div>
    </div>
  );
};

export default HomePage;

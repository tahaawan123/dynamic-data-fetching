"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Loader from "@/components/Loader";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

interface Products {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const Client = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Products[]>([]);
  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const parsedResponse: Products[] = await response.json();
      console.log(parsedResponse);
      setData(parsedResponse);
      setLoading(false);
    };
    fetchData();
  }, []);
  
  if (loading){
    return  <Loader/>;
  
  }
  return (
    <div className=" pt-8  bg-black min-h-screen">
      <h1 className="text-center text-3xl font-bold mb-8  bg-gradient-to-r from-blue-500 to-green-600 shadow-md shadow-lime-300 font-mono md:text-5xl ">Client Side Data Fetching</h1>
      
      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-6  gap-6 mb-11">
        {data.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg px-4 pt-4 shadow-md bg-gradient-to-r from-blue-500 to-green-600 hover:scale-105 transition-transform flex flex-col "
          >
           
  
           
               {/* Image Section */}
            <div className="mt-2 h-40 w-full flex justify-center">
              <Image
                src={item.image}
                alt={item.title}
               
                width={250}
                height={250}
                 className="w-auto h-full object-contain rounded-md"
              />
            </div>
              <h3 className="text-lg font-semibold ">{item.title}</h3>
              <p className="text-sm text-white">{item.category}</p>
              <p className="text-md font-bold ">${item.price}</p>
              <p className="text-sm text-gray-800 line-clamp-2 ">{item.description}</p>
              <div className="mt-2">
                <span className="text-yellow-500">⭐ {item.rating.rate}</span>
     
     
     
     
     
     
     
                 <span className="text-gray-900 ml-2">({item.rating.count})</span>
              </div>
              <Link href ={`/Client/${item.id}`}>
      <button className="w-[100px] h-[40px] rounded-lg text-white bg-blue-700 hover:bg-blue-500">Check out</button>
      </Link>
            </div>
          
        ))}
      </div>
      <Button/>
      <Footer/>
    </div>
  );
}  

export default Client;

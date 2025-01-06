

"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Loader from "@/components/LoaderTwo";

import { useParams } from "next/navigation";

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

  const productDetail = ()=>{
      const {id} = useParams();
      const [product, setProduct] = useState<Products | null>(null);
      

      useEffect(()=>{
        const fetchData = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const parsedResponse: Products = await response.json();
            
            setProduct(parsedResponse);
          };
          if (id) {
            fetchData();
          }
        }, [id]);
      
        if (!product) {
          return <Loader/>
        }


        return(
            <div className="p-6 bg-gradient-to-r from-blue-500 to-green-600 transform transition duration-300  h-auto">
               <div className="flex flex-col md:flex-row gap-6">
                             <Image
                               src={product.image}
                               alt={product.title}
                              
                               width={5000}
                               height={250}
                                className="w-auto h-full object-contain rounded-md"
                             />
                           </div>
                           <div className="flex flex-col gap-4">
                             <h3 className="text-3xl font-semibold ">{product.title}</h3>
                             <p className="text-sm text-white">{product.category}</p>
                             <p className="text-md font-bold ">${product.price}</p>
                             <p className=" text-gray-800 text-sm md:text-2xl lg:text-3xl   ">{product.description}</p>
                             <div className="mt-2">
                               <span className="text-yellow-500">⭐ {product.rating.rate}</span>
                                  </div>

                    
                    
            
                                <span className="text-gray-900 ml-2">({product.rating.count})</span>


                                
           <Link href={"#"}><button className="w-[150px] h-[60px] bg-blue-700 hover:bg-blue-600 rounded-lg text-white">Add to cart</button></Link>
    

                             </div>
                           
             </div>
             )
    

          
    }

  




    export default productDetail;
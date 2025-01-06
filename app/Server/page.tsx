
import React from 'react'
import Button from '@/components/Button';
import Footer from '@/components/Footer';
interface IBook {
    id: number;
    name: string;
    type: string;
    available: boolean;
  }
const Server =async () => {
    const response = await fetch("https://simple-books-api.glitch.me/books/")
    const parsedResponse:IBook[] = await response.json()
    console.log(parsedResponse)
  return (
    <div className='  bg-black'>
             <h1 className="text-center font-bold font-serif text-4xl md:text-5xl lg:text-7xl text-white py-8 lg:py-14">Server Side Data Fetching</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-8 lg:px-12'>
         {parsedResponse.map((data,index)=>
          <div key={index} className= 'border border-black w-full max-w-md mx-auto h-auto p-6 bg-gradient-to-r from-blue-500 to-green-600 transform transition duration-300 hover:translate-x-2 hover:translate-y-2 space-y-4 rounded-lg shadow-lg'>

           
            <p className='font-bold text-xl lg:text-2xl font-mono'>{data.name}</p>
            <p><span className='font-semibold font-mono'>type:</span> {data.type}</p>
            <p><span className='font-semibold font-mono'>available: </span> {`${data.available}`}</p>
          </div>
        )}
    </div>
    <Button/>
  <Footer/>
    </div>
  )
}

export default Server
   
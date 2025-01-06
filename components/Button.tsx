import React from 'react'
import Link from 'next/link'
const Button = () => {
  return (
    <div className='flex justify-center items-center py-6'>
    <button type='button' className='w-[250px] md:w-[300px] h-[40px] md:h-[50px] bg-gradient-to-r from-blue-500 to-green-600 shadow-lime-300 shadow-md hover:scale-95 rounded-md font-mono font-semibold text-lg md:text-2xl' ><Link href={"./"}>Back to Home Page</Link></button>

    </div>
  )
}

export default Button

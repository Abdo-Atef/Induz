import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-black py-5 px-2'>
      <div className="container mx-auto text-white">
        <div className='flex justify-center items-center gap-2'>
          <a href="#" className='group'>
            <span className='bg-gray-100 flex justify-center items-center size-9 text-sm rounded-full group-hover:bg-orange-600 duration-300'>
              <i className="fa-brands fa-facebook-f text-orange-500 group-hover:text-white duration-300"></i>
            </span>
          </a>
          <a href="#" className='group'>
            <span className='bg-gray-100 flex justify-center items-center size-9 text-sm rounded-full group-hover:bg-orange-600 duration-300'>
              <i className="fa-brands fa-x-twitter text-orange-500 group-hover:text-white duration-300"></i>
            </span>
          </a>
          <a href="#" className='group'>
            <span className='bg-gray-100 flex justify-center items-center size-9 text-sm rounded-full group-hover:bg-orange-600 duration-300'>
              <i className="fa-brands fa-dribbble text-orange-500 group-hover:text-white duration-300"></i>
            </span>
          </a>
          <a href="#" className='group'>
            <span className='bg-gray-100 flex justify-center items-center size-9 text-sm rounded-full group-hover:bg-orange-600 duration-300'>
              <i className="fa-brands fa-google text-orange-500 group-hover:text-white duration-300"></i>
            </span>
          </a>
        </div>
        <div className='text-center mt-4 text-gray-400'>© 2024 <span className='text-white'>Abdo Atef</span>. All Rights Reserved | Theme by W3Layouts.</div>
      </div>
    </footer>
  )
}

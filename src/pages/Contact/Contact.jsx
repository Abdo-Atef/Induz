import React from 'react'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'

export default function Contact() {
  return <>
    <header className={`${styles.headerSection} relative md:py-48`}>
      <div className="absolute bottom-1/4 w-full text-center">
        <h1 className='text-white text-4xl font-bold'>Contact Us</h1>
        <div className='text-white mt-4'>
          <Link to={'/'} className='text-gray-300 font-semibold hover:text-orange-500 duration-300'>Home</Link>
          <i className="fa-solid fa-angles-right text-xs mx-1"></i>
          <span className='text-gray-200 font-semibold'>Contact page</span>
        </div>
      </div>
    </header>
    <div className="py-20 bg-slate-100">
      <div className="container mx-auto lg:px-16 px-5">
        <h3 className="relative font-medium p-2 pl-3 text-lg z-20 before:[content:''] before:bg-orange-500 before:h-full before:w-10 before:absolute before:-z-10 before:top-0 before:left-0">Contact Our Team</h3>
        <h4 className="text-4xl font-bold my-2 max-sm:text-3xl ml-1">Get in Touch with Us</h4>
        <p className='text-lg text-neutral-500 mt-4'>If you have a question regarding our services, feel free to contact us using the form below.</p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-7 pt-8">
          <div className='bg-white rounded p-8 relative'>
            <h2 className='font-semibold text-xl'>Address</h2>
            <address className='text-lg mt-3 text-gray-500'>#302, 5th Floor, ALHK-2247 ek, <br /> Settlers Lane, New York.</address>
            <span className='absolute bottom-2 right-3 rotate-12'>
              <i className="fa-solid fa-location-dot text-5xl opacity-30"></i>
            </span>
          </div>
          <div className='bg-white rounded p-8 relative'>
            <h2 className='font-semibold text-xl mb-3'>Email</h2>
            <a href="#" className='block text-lg text-gray-500'>mailone@example.com</a>
            <a href="#" className='block text-lg text-gray-500'>mailtwo@example.com</a>
            <span className='absolute bottom-2 right-3 rotate-12'>
              <i className="fa-solid fa-envelope text-5xl opacity-30"></i>
            </span>
          </div>
          <div className='bg-white rounded p-8 relative'>
            <h2 className='font-semibold text-xl mb-3'>Phone</h2>
            <span className='text-lg mt-3 text-gray-500'>+12 324-016-695</span>
            <br />
            <span className='text-lg mt-3 text-gray-500'>+44 224-058-545</span>
            <span className='absolute bottom-2 right-3 rotate-12'>
              <i className="fa-solid fa-phone text-5xl opacity-30"></i>
            </span>
          </div>
        </div>
        <form className='mt-20 lg:px-20 lg:mx-20'>
          <div className='grid sm:grid-cols-2 gap-3'>
            <input className='bg-white my-1 w-full rounded p-3 px-4 placeholder:text-gray-600 outline-none border border-solid border-white focus:border-orange-500 focus:bg-slate-100' type="text" placeholder='Your Name *' required/>
            <input className='bg-white my-1 w-full rounded p-3 px-4 placeholder:text-gray-600 outline-none border border-solid border-white focus:border-orange-500 focus:bg-slate-100' type="text" placeholder='Enter Subject' />
            <input className='bg-white my-1 w-full rounded p-3 px-4 placeholder:text-gray-600 outline-none border border-solid border-white focus:border-orange-500 focus:bg-slate-100' type="text" placeholder='Your Email *' required/>
            <input className='bg-white my-1 w-full rounded p-3 px-4 placeholder:text-gray-600 outline-none border border-solid border-white focus:border-orange-500 focus:bg-slate-100' type="text" placeholder='Your Phone Number *'required />
          </div>
          <textarea rows={'5'} className='bg-white mt-3 w-full rounded p-3 px-4 placeholder:text-gray-600 outline-none border border-solid border-white focus:border-orange-500 focus:bg-slate-100' type="text" placeholder='Type your query here' />
          <button className="text-white border-orange-500 border-2 rounded font-semibold text-lg p-2 mt-8 px-6 bg-orange-500 hover:text-orange-500 hover:bg-transparent duration-500">Submit Message</button>
        </form>
      </div>
    </div>
  </>
}

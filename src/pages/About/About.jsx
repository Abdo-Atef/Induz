import React from 'react'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import ourStoryImg from '../../assets/About_Imgs/ourStoryImg.jpg'

export default function About() {
  return (
    <>
      <header className={`${styles.headerSection} relative md:py-48`}>
        <div className="absolute bottom-1/4 w-full text-center">
          <h1 className='text-white text-4xl font-bold'>About</h1>
          <div className='text-white mt-4'>
            <Link to={'/'} className='text-gray-300 font-semibold hover:text-orange-500 duration-300'>Home</Link>
            <i className="fa-solid fa-angles-right text-xs mx-1"></i>
            <span className='text-gray-200 font-semibold'>About page</span>
          </div>
        </div>
      </header>
      <div className="container mx-auto lg:px-16 max-sm:px-5">
        {/*Start Our History */}
        <div className='bg-white py-20 grid md:grid-cols-2 grid-cols-1 gap-12 md:gap-5'>
          <article>
            <h3 className="relative font-medium p-2 pl-3 text-lg z-20 before:[content:''] before:bg-orange-500 before:h-full before:w-10 before:absolute before:-z-10 before:top-0 before:left-0">Our History</h3>
            <h4 className="text-4xl max-sm:text-3xl font-bold my-2">Industries 1990-2019</h4>
            <p className="text-lg text-neutral-500 leading-6 mt-6">
            Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel.
            Learn more about our work! Lorem ipsum viverra feugiat.consectetur adipisicing dolor et amet.
            <br /><br />
            Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel.
            Learn more about our work.
            </p>
            <button className="text-white border-orange-500 border-2 rounded font-semibold text-lg p-2 mt-8 px-6 bg-orange-500  hover:text-red-500 hover:bg-transparent duration-500 shadow-lg shadow-orange-600 hover:shadow-none">
              Read More
              <i className="fa-solid fa-angles-right text-sm ml-1"></i>
            </button>
          </article>
          <figure className='rounded-md md:p-8 md:pt-0'>
            <img className='rounded-md' src={ourStoryImg} alt="our Story Img" />
          </figure>
        </div>
      </div>
        {/*End Our History */}
        {/*Start More Info */}
        <div className={`${styles.moreInfo} relative py-20`}>
          <div className="container mx-auto lg:px-16 max-sm:px-5 grid md:grid-cols-2 md:gap-10">
            <div className=" text-white w-full container mx-auto">
              <div className="content max-sm:px-3" style={{maxWidth:'620px'}}>
                <h3 className="relative font-medium p-2 pl-3 text-lg z-20 before:[content:''] before:bg-orange-500 before:h-full before:w-10 before:absolute before:-z-10 before:top-0 before:left-0">More Info</h3>
                <h4 className="text-4xl font-bold my-2 max-sm:text-3xl">We Believe In Building Long Lasting Our Business Relationships.</h4>
                <p className="text-lg leading-6 mt-6 text-gray-200">
                Lorem ipsum dolor sit amet consectetur ipsum elit. Qui eligendi 
                vitae sit.Ea ipsum sed consequuntur illum facere.Lorem ipsum dolor sit amet elit.
                Non quae, fugiat nihil ad. Lorem ipsum dolor sit amet consectetur.
                </p>
                <div>
                  <button className="text-white sm:mr-5 mr-4 border-white border-2 rounded font-semibold sm:text-lg p-2 sm:px-6 px:4 hover:text-red-500 hover:bg-white duration-500">
                  Read More
                  <i className="fa-solid fa-angles-right text-sm ml-1"></i>
                  </button>
                  <button className="text-white border-orange-500 border-2 rounded font-semibold sm:text-lg p-2 mt-8 sm:px-6 px:4 bg-orange-500  hover:text-orange-500 hover:bg-transparent duration-500">
                  Get a qoute
                  <i className="fa-solid fa-angles-right text-sm ml-1"></i>
                  </button>
                </div>
              </div>
            </div>
            <section className='bg-white rounded md:p-10 p-5 xl:mx-24 max-md:mt-10'>
              <h4 className='text-black font-semibold text-3xl'>Request a Quote</h4>
              <p className='text-gray-500 text-lg my-4'>Fill all information details to consult with us to get sevices from us</p>
              <form>
                <input className='bg-slate-100 my-1 w-full rounded p-3 px-4 placeholder:text-gray-600 outline-none border border-solid border-white focus:border-orange-500 focus:bg-white' type="text" placeholder='Your Name' />
                <input className='bg-slate-100 my-1 w-full rounded p-3 px-4 placeholder:text-gray-600 outline-none border border-solid border-white focus:border-orange-500 focus:bg-white' type="text" placeholder='Your Email' />
                <input className='bg-slate-100 my-1 w-full rounded p-3 px-4 placeholder:text-gray-600 outline-none border border-solid border-white focus:border-orange-500 focus:bg-white' type="text" placeholder='Your Phone Number' />
                <button className="text-white w-full border-orange-500 border-2 rounded font-semibold text-lg p-2 mt-8 px-6 bg-orange-500 hover:text-orange-500 hover:bg-transparent duration-500">Get a qoute</button>
              </form>
            </section>
          </div>
        </div>
        {/*End More Info */}
    </>
  )
}

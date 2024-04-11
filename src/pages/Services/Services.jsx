import React from 'react'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import ServicesImg1 from '../../assets/About_Imgs/services1.jpg'
import ServicesImg2 from '../../assets/About_Imgs/services2.jpg'
import ServicesImg3 from '../../assets/About_Imgs/services3.jpg'
import ServicesImg4 from '../../assets/About_Imgs/services4.jpg'
import ServicesImg5 from '../../assets/About_Imgs/services5.jpg'
import ServicesImg6 from '../../assets/About_Imgs/services6.jpg'
import ServicesImg7 from '../../assets/About_Imgs/services7.jpg'
import ServicesImg8 from '../../assets/About_Imgs/services8.jpg'
import ServicesImg9 from '../../assets/About_Imgs/services9.jpg'

export default function Services() {
  return <>
    <header className={`${styles.headerSection} relative md:py-48`}>
    <div className="absolute bottom-1/4 w-full text-center">
      <h1 className='text-white text-4xl font-bold'>Services</h1>
      <div className='text-white mt-4'>
        <Link to={'/'} className='text-gray-300 font-semibold hover:text-orange-500 duration-300'>Home</Link>
        <i className="fa-solid fa-angles-right text-xs mx-1"></i>
        <span className='text-gray-200 font-semibold'>Services page</span>
      </div>
    </div>
  </header>
        {/*start What We Do Section */}
        <div className="container mx-auto bg-white lg:px-16 py-20 pb-14">
        <div className="grid lg:grid-cols-8 lg:gap-9 gap-3">
          <section className="lg:col-span-4 p-5">
            <h3 className="relative font-medium p-2 pl-3 text-lg z-20 before:[content:''] before:bg-orange-500 before:h-full before:w-10 before:absolute before:-z-10 before:top-0 before:left-0">What We Offer</h3>
            <h4 className="text-4xl max-sm:text-3xl font-bold my-2">We perform all types of property maintenance and repair</h4>
            <p className="text-lg text-neutral-500 leading-6 mt-6">
            Lorem ipsum dolor sit amet consectetur ipsum elit. Qui eligendi vitae sit.Ea ipsum sed consequuntur illum facere.
            Lorem ipsum dolor sit amet elit.
            Non quae, fugiat nihil ad. Lorem ipsum dolor sit amet consectetur.
            </p>
            
          </section>
          <section className="lg:col-span-4 p-5 flex flex-col gap-4 pt-12">
            <p>Lorem ipsum dolor sit amet consectetur ipsum elit. Qui eligendi vitae sit.Ea ipsum sed consequuntur illum facere.Lorem ipsum dolor sit amet elit. Non quae, fugiat nihil ad. Lorem ipsum dolor sit amet consectetur.</p>
            <p>Lorem ipsum dolor sit amet consectetur ipsum elit. Qui eligendi vitae sit.Ea ipsum sed consequuntur illum facere.Lorem ipsum dolor sit amet elit. Non quae, fugiat nihil ad. Lorem ipsum dolor sit amet consectetur.</p>
            <button className="text-white w-fit border-orange-500 border-2 rounded font-semibold text-lg p-2 mt-4 px-6 bg-orange-500  hover:text-red-500 hover:bg-transparent duration-500 shadow-lg shadow-orange-600 hover:shadow-none">
              Read More
              <i className="fa-solid fa-angles-right text-sm ml-1"></i>
            </button>
          </section>
        </div>
        <div className="gap-5 py-24 px-2 mx-2 grid lg:grid-cols-4 sm:grid-cols-2 *:max-sm:text-center max-sm:gap-10">
          <div>
            <i className="fa-solid fa-mountain-sun text-4xl text-orange-600"></i>
            <h6 className="text-xl font-bold my-3">Integrity </h6>
            <p className="text-lg text-gray-500">Lorem ipsum dolor sit amet consectetur ipsum elit. Qui eligendi vitae sit.</p>
          </div>
          <div>
            <i className="fa-solid fa-gears text-4xl text-orange-600"></i>
            <h6 className="text-xl font-bold my-3">Automation </h6>
            <p className="text-lg text-gray-500">Lorem ipsum dolor sit amet consectetur ipsum elit. Qui eligendi vitae sit.</p>
          </div>
          <div>
            <i className="fa-solid fa-shuffle text-4xl text-orange-600"></i>
            <h6 className="text-xl font-bold my-3">Tradition </h6>
            <p className="text-lg text-gray-500">Lorem ipsum dolor sit amet consectetur ipsum elit. Qui eligendi vitae sit.</p>
          </div>
          <div>
            <i className="fa-solid fa-shield-halved text-4xl text-orange-600"></i>
            <h6 className="text-xl font-bold my-3">Safety </h6>
            <p className="text-lg text-gray-500">Lorem ipsum dolor sit amet consectetur ipsum elit. Qui eligendi vitae sit.</p>
          </div>
        </div>
      </div>
      {/*End What We Offer */}
      {/*Start Our Services */}
      <div className="py-20 bg-slate-100">
        <div className="container mx-auto lg:px-16 px-5">
          <h3 className="relative font-medium p-2 pl-3 text-lg z-20 before:[content:''] before:bg-orange-500 before:h-full before:w-10 before:absolute before:-z-10 before:top-0 before:left-0">Featured Services</h3>
          <h4 className="text-4xl font-bold my-2 max-sm:text-3xl">Our Services</h4>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-7 pt-8 *:cursor-pointer">
            <article className="group">
              <figure>
                <img className="rounded-md" src={ServicesImg1} alt="post1 img" />
              </figure>
              <div className='flex gap-3 mt-3'>
                <span className='pt-2'>
                  <i className="fa-solid fa-bolt text-2xl text-orange-500"></i>
                </span>
                <div>
                  <h5 className="text-2xl text-orange-500 font-bold group-hover:text-orange-600 duration-300">Power & Energy</h5>
                  <h6 className='text-lg text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicingelit.</h6>
                </div>
              </div>
            </article>
            <article className="group">
              <figure>
                <img className="rounded-md" src={ServicesImg2} alt="post1 img" />
              </figure>
              <div className='flex gap-3 mt-3'>
                <span className='pt-2'>
                  <i className="fa-solid fa-plug text-2xl text-orange-500"></i>
                </span>
                <div>
                  <h5 className="text-2xl text-orange-500 font-bold group-hover:text-orange-600 duration-300">Mechanical Works</h5>
                  <h6 className='text-lg text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicingelit.</h6>
                </div>
              </div>
            </article>
            <article className="group">
              <figure>
                <img className="rounded-md" src={ServicesImg3} alt="post1 img" />
              </figure>
              <div className='flex gap-3 mt-3'>
                <span className='pt-2'>
                  <i className="fa-solid fa-database text-2xl text-orange-500"></i>
                </span>
                <div>
                  <h5 className="text-2xl text-orange-500 font-bold group-hover:text-orange-600 duration-300">Petroleum Refinery</h5>
                  <h6 className='text-lg text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicingelit.</h6>
                </div>
              </div>
            </article>
            <article className="group">
              <figure>
                <img className="rounded-md" src={ServicesImg4} alt="post1 img" />
              </figure>
              <div className='flex gap-3 mt-3'>
                <span className='pt-2'>
                  <i className="fa-solid fa-gas-pump text-2xl text-orange-500"></i>
                </span>
                <div>
                  <h5 className="text-2xl text-orange-500 font-bold group-hover:text-orange-600 duration-300">Oil and Gas</h5>
                  <h6 className='text-lg text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicingelit.</h6>
                </div>
              </div>
            </article>
            <article className="group">
              <figure>
                <img className="rounded-md" src={ServicesImg5} alt="post1 img" />
              </figure>
              <div className='flex gap-3 mt-3'>
                <span className='pt-2'>
                  <i className="fa-solid fa-van-shuttle text-2xl text-orange-500"></i>
                </span>
                <div>
                  <h5 className="text-2xl text-orange-500 font-bold group-hover:text-orange-600 duration-300">Logistics Services</h5>
                  <h6 className='text-lg text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicingelit.</h6>
                </div>
              </div>
            </article>
            <article className="group">
              <figure>
                <img className="rounded-md" src={ServicesImg6} alt="post1 img" />
              </figure>
              <div className='flex gap-3 mt-3'>
                <span className='pt-2'>
                  <i className="fa-solid fa-bolt text-2xl text-orange-500"></i>
                </span>
                <div>
                  <h5 className="text-2xl text-orange-500 font-bold group-hover:text-orange-600 duration-300">General Industry</h5>
                  <h6 className='text-lg text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicingelit.</h6>
                </div>
              </div>
            </article>
            <article className="group">
              <figure>
                <img className="rounded-md" src={ServicesImg7} alt="post1 img" />
              </figure>
              <div className='flex gap-3 mt-3'>
                <span className='pt-2'>
                  <i className="fa-solid fa-database text-2xl text-orange-500"></i>
                </span>
                <div>
                  <h5 className="text-2xl text-orange-500 font-bold group-hover:text-orange-600 duration-300">Industrial</h5>
                  <h6 className='text-lg text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicingelit.</h6>
                </div>
              </div>
            </article>
            <article className="group">
              <figure>
                <img className="rounded-md" src={ServicesImg8} alt="post1 img" />
              </figure>
              <div className='flex gap-3 mt-3'>
                <span className='pt-2'>
                  <i className="fa-solid fa-link text-2xl text-orange-500"></i>
                </span>
                <div>
                  <h5 className="text-2xl text-orange-500 font-bold group-hover:text-orange-600 duration-300">Automotive</h5>
                  <h6 className='text-lg text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicingelit.</h6>
                </div>
              </div>
            </article>
            <article className="group">
              <figure>
                <img className="rounded-md" src={ServicesImg9} alt="post1 img" />
              </figure>
              <div className='flex gap-3 mt-3'>
                <span className='pt-2'>
                  <i className="fa-solid fa-plug text-2xl text-orange-500"></i>
                </span>
                <div>
                  <h5 className="text-2xl text-orange-500 font-bold group-hover:text-orange-600 duration-300">Engineering</h5>
                  <h6 className='text-lg text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicingelit.</h6>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
      {/*End Our Services */}

  </>
}

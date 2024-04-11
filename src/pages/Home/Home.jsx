import React from "react";
import styles from "./style.module.css";
import story_Img from '../../assets/Home_Imgs/g1.jpg'
import post1 from '../../assets/Home_Imgs/post1.jpg'
import post2 from '../../assets/Home_Imgs/post2.jpg'
import post3 from '../../assets/Home_Imgs/post3.jpg'

export default function Home() {
  return (
    <>
      <div className={`${styles.headerSection} flex justify-center items-center`}>
        <div className={`${styles.content} flex flex-col justify-center items-center gap-12`}>
          <h1 className="relative z-10 text-white font-bold text-6xl max-md:text-3xl text-center px-2">
            We Can Help Your Business Grow.
          </h1>
          <button className="text-white border-white border-2 rounded font-semibold text-lg p-2 px-6 hover:text-red-500 hover:bg-white duration-500">
            Read More
            <i className="fa-solid fa-angles-right text-sm ml-1"></i>
          </button>
        </div>
      </div>
      {/*start  About - Story Section */}
      <div className="about_story bg-slate-200 pb-14 lg:px-32 lg:pb-0">
        <div className="container mx-auto lg:grid-cols-7 gap-9 bg-white grid rounded-b-lg sm:p-12 p-5 relative lg:-top-20 lg:rounded-t-lg">
          <section className="lg:col-span-4">
            <h3 className="relative font-medium p-2 pl-3 text-lg z-20 before:[content:''] before:bg-orange-500 before:h-full before:w-10 before:absolute before:-z-10 before:top-0 before:left-0">About Us</h3>
            <h4 className="text-4xl max-sm:text-3xl font-bold my-2">Company history.</h4>
            <p className="text-lg text-neutral-500 leading-6 mt-6">
              Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
              ultrices in ligula. Semper at tempufddfel. Learn more about our
              work! Lorem ipsum viverra feugiat.consectetur adipisicing dolor et
              amet. <br /> <br /> Lorem ipsum dolor sit amet consectetur ipsum elit. Qui
              eligendi vitae sit. Pellen tesque libero ut justo.
            </p>
          </section>
          <section className="lg:col-span-3 *:flex *:gap-6 *:items-center *:my-5 *:cursor-pointer">
            <div className="group">
              <span className="size-16 bg-slate-100 rounded-md flex justify-center items-center group-hover:bg-orange-500 duration-300">
                <i className="text-2xl text-orange-500 fa-solid fa-users group-hover:text-white duration-300"></i>
              </span>
              <p className="text-2xl max-sm:text-xl font-semibold group-hover:text-orange-500 duration-300">The reliable industry takes many forms.</p>
            </div>
            <div className="group">
              <span className="size-16 bg-slate-100 rounded-md flex justify-center items-center group-hover:bg-orange-500 duration-300">
                <i className="text-2xl text-orange-500 fa-solid fa-box group-hover:text-white duration-300"></i>
              </span>
              <p className="text-2xl max-sm:text-xl font-semibold group-hover:text-orange-500 duration-300">Delivering beyond possible solutions</p>
            </div>
            <div className="group">
              <span className="size-16 bg-slate-100 rounded-md flex justify-center items-center group-hover:bg-orange-500 duration-300">
                <i className="text-2xl text-orange-500 fa-solid fa-thumbs-up group-hover:text-white duration-300"></i>
              </span>
              <p className="text-2xl max-sm:text-xl font-semibold group-hover:text-orange-500 duration-300">Success through human resources</p>
            </div>
          </section>
        </div>
        <div className="container mx-auto grid lg:grid-cols-8 lg:gap-9 gap-3 lg:pb-20 max-lg:mt-10">
          <section className="lg:col-span-4 p-5">
            <img className="rounded" src={story_Img} alt="story_Img" />
          </section>
          <section className="lg:col-span-4 p-5">
            <h3 className="relative font-medium p-2 pl-3 text-lg z-20 before:[content:''] before:bg-orange-500 before:h-full before:w-10 before:absolute before:-z-10 before:top-0 before:left-0">Our Story</h3>
            <h4 className="text-4xl max-sm:text-3xl font-bold my-2">Connecting things, It’s all about people.</h4>
            <p className="text-lg text-neutral-500 leading-6 mt-6">
              Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
              ultrices in ligula. Semper at tempufddfel. Learn more about our
              work! Lorem ipsum viverra feugiat.consectetur adipisicing dolor et
              amet. <br /> <br /> Lorem ipsum dolor sit amet consectetur ipsum elit. Qui
              eligendi vitae sit. Pellen tesque libero ut justo.
            </p>
            <button className="text-white border-orange-500 border-2 rounded font-semibold text-lg p-2 mt-8 px-6 bg-orange-500  hover:text-red-500 hover:bg-transparent duration-500 shadow-lg shadow-orange-600 hover:shadow-none">
            Read More
            <i className="fa-solid fa-angles-right text-sm ml-1"></i>
          </button>
          </section>
        </div>
      </div>
      {/*End  About - Story Section */}

      {/*start What We Do Section */}
      <div className="container mx-auto bg-white lg:px-16 py-20 pb-14">
        <div className="grid lg:grid-cols-8 lg:gap-9 gap-3">
          <section className="lg:col-span-4 p-5">
            <h3 className="relative font-medium p-2 pl-3 text-lg z-20 before:[content:''] before:bg-orange-500 before:h-full before:w-10 before:absolute before:-z-10 before:top-0 before:left-0">What We Do</h3>
            <h4 className="text-4xl max-sm:text-3xl font-bold my-2">Why Choose Us</h4>
            <p className="text-lg text-neutral-500 leading-6 mt-6">
            Lorem ipsum dolor sit amet consectetur ipsum elit. Qui eligendi 
            vitae sit.Ea ipsum sed consequuntur illum facere.Lorem ipsum dolor sit amet elit.
            Non quae, fugiat nihil ad. Lorem ipsum dolor sit amet consectetur.
            </p>
            <button className="text-white border-orange-500 border-2 rounded font-semibold text-lg p-2 mt-8 px-6 bg-orange-500  hover:text-red-500 hover:bg-transparent duration-500 shadow-lg shadow-orange-600 hover:shadow-none">
            Read More
            <i className="fa-solid fa-angles-right text-sm ml-1"></i>
          </button>
          </section>
          <section className="lg:col-span-4 p-5 flex flex-col gap-4 pt-12">
            <div>
              <p className="text-lg font-semibold mb-1">Quality Services</p>
              <div className="h-2 bg-slate-100 rounded-full">
                <span className="w-4/5 h-2 relative bg-yellow-300 rounded-full block after:[content:'80%'] after:absolute after:right-0 after:bottom-2 after:font-medium"></span>
              </div>
            </div>
            <div>
              <p className="text-lg font-semibold mb-1">Working Ability</p>
              <div className="h-2 bg-slate-100 rounded-full">
                <span className="w-2/3 h-2 relative bg-yellow-300 rounded-full block after:[content:'65%'] after:absolute after:right-0 after:bottom-2 after:font-medium"></span>
              </div>
            </div>
            <div>
              <p className="text-lg font-semibold mb-1">Machine Power</p>
              <div className="h-2 bg-slate-100 rounded-full">
                <span className="w-6/12 h-2 relative bg-yellow-300 rounded-full block after:[content:'50%'] after:absolute after:right-0 after:bottom-2 after:font-medium"></span>
              </div>
            </div>
            <div>
              <p className="text-lg font-semibold mb-1">Detailed planning</p>
              <div className="h-2 bg-slate-100 rounded-full">
                <span className="w-5/6 h-2 relative bg-yellow-300 rounded-full block after:[content:'83%'] after:absolute after:right-0 after:bottom-2 after:font-medium"></span>
              </div>
            </div>
            <div>
              <p className="text-lg font-semibold mb-1">Improved operating conditions</p>
              <div className="h-2 bg-slate-100 rounded-full">
                <span className="w-11/12 h-2 relative bg-yellow-300 rounded-full block after:[content:'91%'] after:absolute after:right-0 after:bottom-2 after:font-medium"></span>
              </div>
            </div>
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
      {/*End  What We Do Section */}

      {/*Start More Info */}
      <div className={`${styles.moreInfo} lg:px-32 py-20`}>
        <div className=" text-white w-full container mx-auto">
          <div className="content max-sm:px-3" style={{maxWidth:'620px'}}>
            <h3 className="relative font-medium p-2 pl-3 text-lg z-20 before:[content:''] before:bg-orange-500 before:h-full before:w-10 before:absolute before:-z-10 before:top-0 before:left-0">More Info</h3>
            <h4 className="text-4xl font-bold my-2 max-sm:text-3xl">We Believe In Building Long Lasting Our Business Relationships.</h4>
            <p className="text-lg leading-6 mt-6 text-gray-200">
            Lorem ipsum dolor sit amet consectetur ipsum elit. Qui eligendi 
            vitae sit.Ea ipsum sed consequuntur illum facere.Lorem ipsum dolor sit amet elit.
            Non quae, fugiat nihil ad. Lorem ipsum dolor sit amet consectetur.
            </p>
            <button className="text-white mr-5 border-white border-2 rounded font-semibold text-lg p-2 px-6 hover:text-red-500 hover:bg-white duration-500">
            Read More
            <i className="fa-solid fa-angles-right text-sm ml-1"></i>
            </button>
            <button className="text-white border-orange-500 border-2 rounded font-semibold text-lg p-2 mt-8 px-6 bg-orange-500  hover:text-orange-500 hover:bg-transparent duration-500">
            Get a qoute
            <i className="fa-solid fa-angles-right text-sm ml-1"></i>
            </button>
          </div>
        </div>
      </div>
      {/*End More Info */}

      {/*Start Blog Posts */}
      <div className="py-20 bg-slate-100">
        <div className="container mx-auto lg:px-16 px-5">
          <h3 className="relative font-medium p-2 pl-3 text-lg z-20 before:[content:''] before:bg-orange-500 before:h-full before:w-10 before:absolute before:-z-10 before:top-0 before:left-0">Our Posts</h3>
          <h4 className="text-4xl font-bold my-2 max-sm:text-3xl">Blog Posts</h4>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-7 pt-8 *:cursor-pointer">
            <article className="group">
              <figure>
                <img className="rounded-md" src={post1} alt="post1 img" />
              </figure>
              <div className="flex gap-3 my-3 mt-4">
                <span className="text-gray-500 text-sm">
                  <i className="fa-regular fa-user text-orange-600"></i> by Abdo Atef
                </span>
                <span className="text-gray-500 text-sm">
                  <i className="fa-regular fa-clock text-orange-600"></i> December 31, 2021
                </span>
              </div>
              <h6 className="text-xl font-bold group-hover:text-orange-600 duration-300">Hello world!</h6>
            </article>
            <article className="group">
              <figure>
                <img className="rounded-md" src={post2} alt="post2 img" />
              </figure>
              <div className="flex gap-3 my-3 mt-4">
                <span className="text-gray-500 text-sm">
                  <i className="fa-regular fa-user text-orange-600"></i> by Abdo Atef
                </span>
                <span className="text-gray-500 text-sm">
                  <i className="fa-regular fa-clock text-orange-600"></i> December 1, 2021
                </span>
              </div>
              <h6 className="text-xl font-bold group-hover:text-orange-600 duration-300">Dream Big With Gets More Inspiring Solutions From Here.</h6>
            </article>
            <article className="group">
              <figure>
                <img className="rounded-md" src={post1} alt="post1 img" />
              </figure>
              <div className="flex gap-3 my-3 mt-4">
                <span className="text-gray-500 text-sm">
                  <i className="fa-regular fa-user text-orange-600"></i> by Abdo Atef
                </span>
                <span className="text-gray-500 text-sm">
                  <i className="fa-regular fa-clock text-orange-600"></i> December 31, 2021
                </span>
              </div>
              <h6 className="text-xl font-bold group-hover:text-orange-600 duration-300">Dream Big With Gets More Inspiring Solutions From Here.</h6>
            </article>
          </div>
        </div>
      </div>
      {/*End Blog Posts */}

    </>
  );
}

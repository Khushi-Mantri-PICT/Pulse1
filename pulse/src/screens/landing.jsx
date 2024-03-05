import React from "react";
import personanimated from "../assets/personanimated.png";
import Item from "../components/Item";

export default function Landing() {
  return (
    <>
    
      <header className="flex justify-between items-center">
        <div className="pl-20 w-2/5 animate__animated animate__jackInTheBox">
          <h1 className="text-4xl">Welcome to <span className="text-blue-600 font-bold"> Placement Offers  </span></h1>
          <div className="p-5">
            <ul className="font-sans space-y-5">
              <li></li>
              <li><span className="text-slate-900 font-bold"> Are </span> you ready to test your skills against the criteria of the top componies visiting to our college ?</li>
              <li><span className="text-slate-900 font-bold"> Are </span> you ready worried about placements ? Want all the updates about the companies coming on-compus ? </li>
            </ul>
          </div>
          <h3 className="text-xl ">We are here with <span className="text-blue-600 font-bold"> Placement Offers  </span> to help you ! </h3>
          <br></br>
          <button className="relative group overflow-hidden px-8 h-14 rounded-full flex space-x-2 items-center bg-gradient-to-r from-pink-500 to-purple-500 hover:to-purple-600"><a href="home.html">
            <span className="relative text-sm text-white">Get Started</span>
            <div className="flex items-center -space-x-3 translate-x-3">
              <div className="w-2.5 h-[1.6px] rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-white -translate-x-2 transition duration-300 group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div></a></button>
        </div>
        <div className="w-3/5 animate__animated animate__fadeIn  animate__delay-1s">
          <img src={personanimated}/>
        </div>
      </header>
      <section className="pt-20 pb-48 bg-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center text-center mb-24">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold">Here are our Teams</h2>
              <p className="text-lg leading-relaxed m-4 text-gray-600">
                Our team Helps the Students to find their appropriate Jobs and Helps the RecrutiersTo find Appropriate Candidates . We are professionals devlopers with 0+ years experience on this business area. We can make your business grow.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap ">
           
            <Item name="Durvesh" />
            <Item name="Atharva" />
          </div>
        </div>
      </section>
    </>
  );
}

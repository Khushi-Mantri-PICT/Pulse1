import React from "react";
import boy from '../assets/boy.png';

export default function Item({name}) {
  return (
    <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4" data-aos="fade-in" data-aos-delay="400">
      <h1>Hello</h1>
      <div className="px-6">
        {/* <!-- Image --> */}
        <img alt="..." src={boy} className="shadow-lg rounded-full max-w-full mx-auto" style={{ maxWidth: "120px" }} />
        <div className="pt-6 text-center">
          <h5 className="text-xl font-bold">{name}</h5>
          <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">Project lead & Founder</p>
          {/* <!-- Social Media Buttons --> */}
          <div className="mt-6">
            <button className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
              {/* <!-- Icon --> */}
              <i className="fab fa-google"></i>
            </button>
            <button className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
              {/* <!-- Icon --> */}
              <i className="fab fa-facebook-f"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";

import Outside from "../assets/outside.png";
import { FEATURES } from "../api/API";
import { TESTIMONIALS } from "../api/API";
// import Logo from "../assets/logo.png";

function HomePage() {
  console.log("Features", FEATURES);
  console.log("Testimonials", TESTIMONIALS);
  return (
    <>
      <div className="bg-gray-100">
        {/* <div className="content-uno "></div> */}
        <img
          className="w-full aspect-video"
          src={Outside}
          alt="Black youth partying"
        ></img>
        <div className="section-uno heading">
          Host the ultimate hausparti with ease
          <p className="sub-heading">
            Plan, Invite, and Enjoy – We Make It Simple
          </p>
        </div>

        <h1 className="text-3xl font-bold mt-20 text-center mb-8 hover:underline">
          <a href="about">Our Features</a>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
          {FEATURES.map((feature, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 shadow-md transition-transform transform hover:scale-105">
              <div className="text-lg font-bold mb-2">{feature.header}</div>
              <div className="text-gray-700">{feature.content}</div>
            </div>
          ))}
        </div>
        <div className="content-uno ">
          Create engaging and memorable hausPartis in seconds...
        </div>
        <div className="min-h-screen bg-gray-100 mt-20 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-center hover:underline mb-8">
              Testimonials
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center shadow-md transition-transform transform hover:scale-105"
                >
                  <img
                    className="w-24 h-24 rounded-full mb-4"
                    src={testimonial.image}
                    alt={`${testimonial.author} photo`}
                  />
                  <div className="text-center">
                    <p className="text-gray-600 mb-4">{testimonial.role}</p>
                    <p className="text-gray-800">"{testimonial.message}"</p>
                    <h3 className="text-xl font-bold mb-2">
                      {testimonial.author}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* <div className="section-uno about">Testimonial Quotes:</div> */}

        <div className=" section-uno about ">
          <a href="about">About Us</a>
        </div>
        <p className="content">
          At hausparti, we believe that every great party starts with great
          planning. Our platform is designed to help you effortlessly organize
          and host memorable house parties. From creating guest lists to
          managing RSVPs and coordinating party details, we provide all the
          tools you need to throw an unforgettable event."
        </p>
        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div class="md:flex">
            <div class="md:shrink-0">
              <img
                class="h-48 w-full object-cover md:h-full md:w-48"
                src={Outside}
                alt="Modern building architecture"
              />
            </div>
            <div class="p-8">
              <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Company retreats
              </div>
              <a
                href="#"
                class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              >
                Incredible accommodation for your team
              </a>
              <p class="mt-2 text-slate-500">
                Looking to take your team away on a retreat to enjoy awesome
                food and take in some sunshine? We have a list of places to do
                just that.
              </p>
            </div>
          </div>
        </div>

        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
    </>
  );
}

export default HomePage;

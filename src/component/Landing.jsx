import React from "react";
import Navbar from "./Navbar";

const Landing = () => {
  return (
    <div className="bg-white h-250 w-315 ">
        <Navbar/>
      <div className="flex ">
        <div className="mt-20">
          <img
            className="absolute w-[850px] h-[550px] rounded-4xl ml-5"
            src="/image 2.png"
            alt=""
          />
          <h1 className=" relative ml-20 mt-10 text-left">Color of Summer Outfit</h1>
          <p className="relative w-50 ml-20 mt-5 text-left">
            100+ Collections for your outfit inspirations in this summer
          </p>
          <button className="bg-black rounded-4xl w-50 h-10 relative ml-20 mt-5">
            View Collection
          </button>
        </div>

        <div className="  h-[550px]  w-120 ml-150 mt-20  rounded-4xl">
          <div className=" h-[270px] w-120 rounded-4xl">
            <img
              className="h-[270px] w-80 rounded-4xl"
              src="/image 4.png"
              alt=""
            />
          </div>
          <div className=" h-50 w-120">
            <img
              className="h-[270px] w-80 rounded-4xl mt-3"
              src="/Card.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className=" h-68 w-300 flex ml-5 mt-3 ">
        <div className=" h-68 w-100">
          <h1 className="text-left font-light w-10 text-black">
            Casual Inspirations
          </h1>
          <p className="text-left mt-3 text-black">
            Our favorite combinations for casual outfit that can inspire you to
            apply on your daily activity.
          </p>
          <button className="text-black border rounded-4xl w-60 h-10 mt-5 mr-10 ">
            BROWSE INSPIRATION
          </button>
        </div>
        <div className=" h-68 w-100 rounded-4xl ">
          <div className="relative">
            <img
              className="  h-68 w-100 pr-3 rounded-4xl"
              src="/image 7.png"
              alt=""
            />
            <h2 className="absolute bottom-1 w-10 text-4xl ml-5 mb-5">
              Say it with Shirt
            </h2>
          </div>
        </div>
        <div className=" h-68 w-95">
            <div className="relative">
          <img className="h-68 w-95 rounded-4xl" src="/image 8.png" alt="" />
          <h2 className="text-4xl absolute bottom-1 w-50 ml-5 mb-5 text-left">Funky never get old</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

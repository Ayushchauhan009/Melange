import React from "react";
import {
  creativity,
  zoom,
  rotatearrow,
  book,
  people,
  computer,
  nums,
  techHand,
  time,
} from "../../assets/images";

const AboutHead = () => {
  return (
    <div className="pt-12 md:pt-40 pb-12 md:pb-20 font-nunito">
      <div className=" px-4 md:px-24">
        <div className="w-auto md:w-[84%] lg:px-4">
          <h1 className="text-2xl md:text-4xl font-bold">About Us</h1>
          <p className="text-xl my-2 font-extrabold multiverse-text">
            Think of us as your in-house marketing team!
          </p>
          <p className="text-[20px] font-medium">
            At Mélange Digital, we're not just your average marketing agency— we
            are an extension of your brand, working side by side to achieve your
            goals. We take pride in striking the perfect balance between the yin
            and yang of marketing - blending strategy and creativity for your
            brand's success.
          </p>
          <p className="text-[20px] font-medium mt-3">
            Wanderlust fuels our soul and crafting extraordinary customer
            journeys is our sacred mission. We are driven to create meaningful
            experiences that forge deep connections with your customer at every
            touchpoint.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-around ml-28 pt-8 md:pt-24  items-center">
        <div className="w-full md:w-1/2">
          <h1 className="multiverse-text font-extrabold text-lg md:text-2xl">
            We swear by the following principles
          </h1>
          <p className="flex items-center font-bold mt-4 md:mt-9">
            <img src={zoom} alt="" />
            <span className="ml-2 md:ml-8 text-[20px]">
              Devil is in the details
            </span>
          </p>
          <p className="flex items-center font-bold my-4 md:my-8">
            <img src={rotatearrow} alt="" className="w-auto h-auto" />
            <span className="ml-2 md:ml-8 text-[20px]">
              All great ideas start with a scribble{" "}
            </span>
          </p>
          <p className="flex items-center font-bold my-4 md:my-8">
            <img src={book} alt="" />
            <span className="ml-2 md:ml-8 text-[20px]">
              Learning is the only constant
            </span>
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <p className="flex items-center font-bold mt-4 md:mt-16">
            <img src={time} alt="" />
            <span className="ml-2 md:ml-8 text-[20px]">
              Building blueprints that are future ready
            </span>
          </p>
          <p className="flex items-center font-bold my-4 md:my-8">
            <img src={nums} alt="" />
            <span className="ml-2 md:ml-8 text-[20px]">
              Numbers are our best teachers
            </span>
          </p>
          <p className="flex items-center font-bold my-4 md:my-8">
            <img src={techHand} alt="" />
            <span className="ml-2 md:ml-8 text-[20px]">
              Technology is the future
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHead;

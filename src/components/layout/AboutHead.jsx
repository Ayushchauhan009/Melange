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
    <div className="pt-24 md:pt-40 pb-12 md:pb-20 font-nunito">
      <div className=" px-6 md:px-24">
        <div className="w-auto md:w-[84%] lg:px-4">
          <h1 className="text-2xl md:text-4xl font-bold">About Us</h1>
          <p className="text-lg md:text-xl my-2 font-extrabold multiverse-text">
            Think of us as your in-house marketing team!
          </p>
          <p className="text-[18px] md:text-[20px] font-medium">
            At Mélange Digital, we're not just your average marketing agency— we
            are an extension of your brand, working side by side to achieve your
            goals. We take pride in striking the perfect balance between the yin
            and yang of marketing - blending strategy and creativity for your
            brand's success.
          </p>
          <p className="text-[18px] md:text-[20px] font-medium mt-3">
            Wanderlust fuels our soul and crafting extraordinary customer
            journeys is our sacred mission. We are driven to create meaningful
            experiences that forge deep connections with your customer at every
            touchpoint.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-col justify-around ml-0 md:ml-28 pt-8 md:pt-24 items-start">
        <h1 className="multiverse-text font-extrabold text-lg md:text-2xl ml-6 mb-8 md:mb-14 md:ml-0">
          We swear by the following principles
        </h1>
        <div className="w-auto md:w-full grid grid-cols-2 md:grid-cols-2 gap-y-16 gap-x-4 md:gap-x-20 mx-6 md:mx-0">
          <div className="flex items-center font-bold flex-col md:flex-row">
            <img src={zoom} alt="" className="w-10 md:w-auto h-10 md:h-auto" />
            <span className="ml-2 md:ml-8 text-[14px] md:text-[20px] mt-4 md:mt-0 text-center md:text-left">
              Devil is in the details
            </span>
          </div>
          <div className="flex items-center flex-col md:flex-row font-bold">
            <img
              src={rotatearrow}
              alt=""
              className="w-10 md:w-auto h-10 md:h-auto"
            />
            <span className="ml-2 md:ml-8 text-[14px] md:text-[20px] mt-4 md:mt-0 text-center md:text-left">
              All great ideas start with a scribble{" "}
            </span>
          </div>
          <div className="flex items-center flex-col md:flex-row font-bold">
            <img src={book} alt="" className="w-10 md:w-auto h-10 md:h-auto" />
            <span className="ml-2 md:ml-8 text-[14px] md:text-[20px] mt-4 md:mt-0 text-center md:text-left">
              Learning is the only constant
            </span>
          </div>
          <div className="flex items-center flex-col md:flex-row font-bold">
            <img src={time} alt="" className="w-10 md:w-auto h-10 md:h-auto" />
            <span className="ml-2 md:ml-8 text-[14px] md:text-[20px] mt-4 md:mt-0 text-center md:text-left">
              Building blueprints that are future ready
            </span>
          </div>
          <div className="flex items-center flex-col md:flex-row font-bold">
            <img src={nums} alt="" className="w-10 md:w-auto h-10 md:h-auto" />
            <span className="ml-3 md:ml-8 text-[14px] md:text-[20px] mt-4 md:mt- text-center md:text-left">
              Numbers are our best teachers
            </span>
          </div>
          <div className="flex items-center flex-col md:flex-row font-bold">
            <img
              src={techHand}
              alt=""
              className="w-10 md:w-auto h-10 md:h-auto"
            />
            <span className="ml-2 md:ml-8 text-[14px] md:text-[20px] mt-4 md:mt-0 text-center md:text-left">
              Technology is the future
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHead;

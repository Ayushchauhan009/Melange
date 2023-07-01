import React, { useEffect } from "react";
import { Navbar, Footer, ContactButton } from "../../layout";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  zee1,
  zee2,
  zee3,
  zee4,
  relate1,
  relate2,
  relate3,
  costaVideo,
  costa1,
  costa2,
  costa3,
} from "../../../assets/caseImages";
import { Link } from "react-router-dom";

const CostaCruises = () => {
  useEffect(() => {
    const handleScroll = () => {
      const videoElement = document.getElementById("videoElement");
      const scrollY = window.scrollY;
      const scale = 1 + scrollY * 0.0002;

      videoElement.style.transform = `scale(${scale})`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <Navbar />
      <div className="pt-28 md:pt-32 font-nunito pb-14">
        <div className="flex flex-col md:flex-col ">
          <div className="flex flex-col md:flex-row justify-between px-4 md:px-28 items-start md:items-center">
            <div className="mb-10 md:mb-0 mx-4 md:mx-0">
              <h1 className="font-bold text-4xl  md:text-4xl">Costa Cruises</h1>
            </div>
            <div className="flex flex-row justify-start items-start mb-4 sm:mb-0 ml-0 md:ml-0">
              <div className=""></div>
              <div className="mx-4 md:mx-20  md:my-0">
                <h1 className="text-left md:text-center font-extrabold text-2xl md:text-4xl">
                  40%
                </h1>
                <p className="text-left md:text-center font-medium text-[16px] md:text-[20px]">
                  increase in social media followers
                </p>
              </div>
              <div>
                <h1 className="text-left md:text-center font-extrabold text-2xl md:text-4xl">
                  60+
                </h1>
                <p className="text-left md:text-center font-medium text-[16px] md:text-[20px]">
                  press coverage PAN India
                </p>
              </div>
            </div>
          </div>
          <motion.video
            id="videoElement"
            initial={{ scale: 1 }}
            style={{ transform: "scale(1)" }}
            src={costaVideo}
            autoPlay
            loop
            muted
            className="mx-6 my-4 md:my-10  md:mx-28"
          ></motion.video>
        </div>
        <div className="flex flex-col md:flex-row justify-around mx-6 md:mx-28 my-6 md:my-6">
          <div className="mb-8 md:mb-0 md:mr-8">
            <h1 className="multiverse-text text-2xl md:text-3xl font-bold pb-2">
              Objective
            </h1>
            <p className="text-lg md:text-xl w-auto md:w-[80%]">
              Costa Cruises, an international cruise liner, aimed to generate
              buzz and increase bookings for the Nov-Dec season in India as they
              launched their magnificent cruise ship, Costa Serena, for domestic
              sailings.
            </p>
          </div>
          <div>
            <h1 className="font-bold text-xl md:text-2xl pb-2">Services</h1>
            <p className="whitespace-nowrap multiverse-text pb-2 text-lg font-semibold">
              Brand Strategy
            </p>
            <p className="whitespace-nowrap multiverse-text pb-2 text-lg font-semibold">
              Website Development
            </p>
            <p className="whitespace-nowrap multiverse-text pb-2 text-lg font-semibold">
              Social Media
            </p>
            <p className="whitespace-nowrap multiverse-text text-lg font-semibold">
              Influencer Marketing
            </p>
          </div>
        </div>
        <div className="mx-6 md:mx-28 mt-10 md:mt-32">
          <h1 className="multiverse-text font-bold text-2xl md:text-3xl pb-3">
            Our Approach
          </h1>
          <p className="pb-4 md:pb-5 text-base md:text-lg w-auto md:w-[95%]">
            Thorough Market reasearch was conducted to gain an understanding of
            the Indian audience and competitors.
          </p>
          <p className="pb-4 md:pb-5 text-base md:text-lg w-auto md:w-[95%]">
            A strategic launch strategy was executed to create pre-buzz and
            raise awareness of the brand, its luxury, and offerings.
          </p>
          <p className="pb-4 md:pb-5 text-base md:text-lg w-auto md:w-[85%]">
            Influencers collaborations were implemented to increase reach and
            generate buzz around the launch of Costa Serena.
          </p>
          <p className="pb-4 md:pb-5 text-base md:text-lg w-auto md:w-[85%]">
            A PR event was held in the presence of the honorable Minister of
            Ports and Waterways.
          </p>
          <p className="pb-4 md:pb-5 text-base md:text-lg w-auto md:w-[85%]">
            A highly functional and user-friendly website was developed to
            facilitate increased bookings.
          </p>
          <div className="flex flex-col md:flex-row space-x-0 md:space-x-10 space-y-10 md:space-y-0 mt-10 md:mt-28 ">
            <img src={costa1} alt="Image 1" className="h-72 md:h-auto w-auto" />
            <img
              src={costa2}
              alt="Image 2"
              className=" h-72 md:h-auto w-auto"
            />
          </div>
        </div>
        <div className="mx-6 md:mx-28 mt-8 md:mt-20">
          <h1 className="multiverse-text font-bold text-2xl md:text-3xl pb-3">
            Results
          </h1>
          <p className="text-base md:text-xl pb-2 ">
            60+ press coverage PAN India
          </p>
          <p className="text-base md:text-xl">
            Increase Social Media followers by 40% in 3 days.
          </p>
          <img src={costa3} alt="" className="object-cover my-8" />
          <div className="bg-[#CECBCB] h-0.5 w-auto mx-6 md:mx-24 my-16"></div>
          <div className="flex flex-row justify-center items-center">
            <h1 className="multiverse-text font-bold text-lg md:text-3xl mb-0 md:mb-0">
              Let's work together!
            </h1>
            <div className="w-0.5 md:w-0.5 workTogether h-16 mx-3 md:mx-12"></div>
            <ContactButton />
          </div>
        </div>
        <div className="mx-4 md:mx-28 mt-8 md:mt-28">
          <h1 className="font-bold text-2xl md:text-3xl mb-10">
            Related Projects
          </h1>
          <div className="flex flex-col md:flex-row justify-between">
            <Link>
              <img src={relate1} alt="" />
              <div className="flex font-bold my-2 multiverse-text text-[14px] md:text-[13px]">
                <p>Performance Marketing</p>
                <p className="mx-2 md:mx-6">Social Media</p>
                <p>Activations</p>
              </div>
              <h1 className="font-bold text-xl md:text-2xl">
                MakeMyTrip Holidays
              </h1>
            </Link>
            <Link className="my-10 md:my-0 mx-0 md:mx-8">
              <img src={relate2} alt="" />
              <div className="flex font-bold my-2 multiverse-text text-[14px] md:text-[13px]">
                <p>Thought Leadership</p>
                <p className="mx-2 md:mx-6">Performance Marketing</p>
              </div>
              <h1 className="font-bold text-xl md:text-2xl">
                Sportz Village XP
              </h1>
            </Link>
            <Link>
              <img src={relate3} alt="" />
              <div className="flex font-bold my-2 multiverse-text text-[14px] md:text-[13px]">
                <p>B2C Launch</p>
                <p className="mx-2 md:mx-6">Performance Marketing</p>
                <p>Social Media</p>
              </div>
              <h1 className="font-bold text-xl md:text-2xl">Dhruvak</h1>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CostaCruises;

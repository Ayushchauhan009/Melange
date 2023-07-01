import React, { useEffect } from "react";
import { Navbar, Footer, ContactButton } from "../../layout";
import {
  zee1,
  zee2,
  zee3,
  zee4,
  relate1,
  relate2,
  relate3,
  zee5Banner,
} from "../../../assets/caseImages";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Zee5 = () => {
  useEffect(() => {
    const handleScroll = () => {
      const videoElement = document.getElementById("imageElement");
      const scrollY = window.scrollY;
      const scale = 1 + scrollY * 0.0002;
      const screenWidth = window.innerWidth;

      if (scale < screenWidth) {
        videoElement.style.transform = `scale(${scale})`;
      } else {
        videoElement.style.transform = `scale(${screenWidth})`;
      }
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
              <h1 className="font-bold text-4xl  md:text-4xl">ZEE5</h1>
            </div>
            <div className="flex flex-row justify-start items-start mb-4 sm:mb-0 ml-5 md:ml-0">
              <div className="">
                <h1 className="text-left md:text-center font-extrabold text-2xl md:text-4xl">
                  7M+
                </h1>
                <p className="text-left md:text-center font-medium text-[16px] md:text-[20px]">
                  paid subscribers
                </p>
              </div>
              <div className="mx-4 md:mx-20  md:my-0">
                <h1 className="text-left md:text-center font-extrabold text-2xl md:text-4xl">
                  1Bn+
                </h1>
                <p className="text-left md:text-center font-medium text-[16px] md:text-[20px]">
                  impressions
                </p>
              </div>
              <div>
                <h1 className="text-left md:text-center font-extrabold text-2xl md:text-4xl">
                  10M+
                </h1>
                <p className="text-left md:text-center font-medium text-[16px] md:text-[20px]">
                  video views
                </p>
              </div>
            </div>
          </div>
          <motion.img
            id="imageElement"
            initial={{ scale: 1 }}
            style={{ transform: "scale(1)" }}
            src={zee5Banner}
            alt=""
            className="mx-6 my-4 md:my-10  md:mx-28"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-around mx-6 md:mx-28 my-6 md:my-6">
          <div className="mb-8 md:mb-0 md:mr-8">
            <h1 className="multiverse-text text-2xl md:text-3xl font-bold pb-2">
              Objective
            </h1>
            <p className="text-lg md:text-xl w-auto md:w-[72%]">
              ZEE5 is an Indian subscription video on-demand and over-the-top
              streaming service with content in 12 languages. They wanted to
              boost its paid subscriber count by promoting their new offer price
              of INR 499 per year.
            </p>
          </div>
          <div>
            <h1 className="font-bold text-xl md:text-2xl pb-2">Services</h1>
            <p className="whitespace-nowrap multiverse-text pb-2 text-lg font-semibold">
              Social Media
            </p>
            <p className="whitespace-nowrap multiverse-text text-lg font-semibold">
              Performance Marketing
            </p>
          </div>
        </div>
        <div className="mx-6 md:mx-28 mt-10 md:mt-32">
          <h1 className="multiverse-text font-bold text-2xl md:text-3xl pb-3">
            Our Approach
          </h1>
          <p className="pb-4 md:pb-5 text-base md:text-lg w-auto md:w-[85%]">
            An integrated marketing campaign called 'Anytime Manoranjan (ATM)'
            was executed, featuring popular TV stars in 6 languages across 13
            states.
          </p>
          <p className="pb-4 md:pb-5 text-base md:text-lg w-auto md:w-[85%]">
            The gap between traditional TV viewership and the OTT audience was
            bridged, introducing them to a world of authentic and engaging
            Indian stories available on the platform.
          </p>
          <p className="pb-4 md:pb-5 text-base md:text-lg w-auto md:w-[85%]">
            The campaign was also rolled out across owned social media platforms
            and to drive conversations through influencer marketing to further
            amplify the proposition.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-10 md:mt-36">
            <div>
              <img
                src={zee1}
                alt="Image 1"
                className="w-full h-auto col-span-1"
              />
            </div>
            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:ml-0.5 mt-4 md:mt-8 space-x-0 md:space-x-14">
              <img src={zee2} alt="Image 2" className="w-full h-72 md:h-auto" />
              <img src={zee3} alt="Image 3" className="w-full h-72 md:h-auto" />
              <img src={zee4} alt="Image 4" className="w-full h-72 md:h-auto" />
            </div>
          </div>
        </div>
        <div className="mx-6 md:mx-28 mt-8 md:mt-20">
          <h1 className="multiverse-text font-bold text-2xl md:text-3xl pb-3">
            Results
          </h1>
          <p className="text-base md:text-xl">
            The campaign resulted in 7M+ paid subscribers and garnered 1Bn+
            impressions and 10M+ video views.
          </p>
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

export default Zee5;

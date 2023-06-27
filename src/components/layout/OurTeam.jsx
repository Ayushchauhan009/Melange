import React, { useState } from "react";
import {
  person1,
  person2,
  person3,
  person4,
  person5,
  person6,
  person7,
  person8,
  person10,
  linkedin2,
  person9,
  plus,
} from "../../assets/team";

const OurTeam = () => {
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);
  const [isFlipped4, setIsFlipped4] = useState(false);
  const [isFlipped5, setIsFlipped5] = useState(false);
  const [isFlipped6, setIsFlipped6] = useState(false);
  const [isFlipped7, setIsFlipped7] = useState(false);
  const [isFlipped8, setIsFlipped8] = useState(false);
  const [isFlipped9, setIsFlipped9] = useState(false);
  const [isFlipped10, setIsFlipped10] = useState(false);

  const handleClick = (photoIndex) => {
    switch (photoIndex) {
      case 1:
        setIsFlipped1(!isFlipped1);
        break;
      case 2:
        setIsFlipped2(!isFlipped2);
        break;
      case 3:
        setIsFlipped3(!isFlipped3);
        break;
      case 4:
        setIsFlipped4(!isFlipped4);
        break;
      case 5:
        setIsFlipped5(!isFlipped5);
        break;
      case 6:
        setIsFlipped6(!isFlipped6);
        break;
      case 7:
        setIsFlipped7(!isFlipped7);
        break;
      case 8:
        setIsFlipped8(!isFlipped8);
        break;
      case 9:
        setIsFlipped9(!isFlipped9);
        break;
      case 10:
        setIsFlipped10(!isFlipped10);
        break;
    }
  };

  return (
    <div className="bg-[#1a1a1a] font-nunito py-16 px-8 md:px-24">
      <h1 className="text-white font-bold text-4xl text-center mb-3">
        Meet the Guardians of Our Multiverse
      </h1>
      <p className="multiverse-text font-semibold text-lg text-center mb-3">
        We are a small team with a big heart and a long list of capabilities
      </p>
      <p className="mb-10 font-normal text-md text-white text-center w-[80%] mx-auto">
        Our team is designed categorically with diverse skills that allow us to
        cross-pollinate learnings from our experiences across different
        industries and apply them to solve our clients' problems with innovative
        and cost-effective solutions.
      </p>
      <div className="media-scroller">
        <div className={`media-element`}>
          <div
            className={`w-auto h-64 bg-contain items-center flex justify-center parent ${
              isFlipped1 ? "flipped1 " : "flippedBack1"
            }`}
            onClick={() => handleClick(1)}
          >
            <img
              src={plus}
              alt=""
              className={`absolute image right-2 top-2 ${
                isFlipped1 ? "hidden  " : "visible"
              }`}
            />
          </div>

          <div className="flex justify-between mt-2 items-center mr-2">
            <h1 className="font-bold text-[18px]">Sanket Bolinjkar</h1>
            <a
              href="https://www.linkedin.com/in/sanket-bolinjkar-743ba224"
              target="_blank"
            >
              <img src={linkedin2} alt="" className="w-5 ml-1 h-5" />
            </a>
          </div>
          <p className="text-white font-bold text-[14px]">Founder & CEO</p>
        </div>
        <div className={`media-element `}>
          <div
            className={`w-auto h-64 bg-contain items-center flex parent justify-center ${
              isFlipped2 ? "flipped2 " : "flippedBack2"
            }`}
            onClick={() => handleClick(2)}
          >
            <img
              src={plus}
              alt=""
              className={`absolute right-2 image top-2 ${
                isFlipped2
                  ? "hidden  transform transition-all duration-75 "
                  : "visible"
              }`}
            />
          </div>
          <div className="flex justify-between mt-2 items-center mr-2">
            <h1 className="font-bold text-[18px]">Saswat Mahapatra</h1>
            <a href="https://www.linkedin.com/in/smahapatra" target="_blank">
              <img src={linkedin2} alt="" className="w-5 ml-1 h-5" />
            </a>
          </div>

          <p className="text-white font-bold text-[14px]">
            Chief Creative Officer
          </p>
        </div>

        <div className="media-element">
          <div
            className={`w-auto h-64 bg-contain items-center flex parent justify-center ${
              isFlipped3 ? "flipped3 " : "flippedBack3"
            }`}
            onClick={() => handleClick(3)}
          >
            <img
              src={plus}
              alt=""
              className={`absolute image right-2 top-2 ${
                isFlipped3
                  ? "hidden  transform transition-all duration-75 "
                  : "visible"
              }`}
            />
          </div>
          <div className="flex justify-between mt-2 items-center mr-2">
            <h1 className="font-bold text-[18px]">Mrityunjay Kumar</h1>
            <a href="#" className="">
              <img src={linkedin2} alt="" className=" ml-1 h-5" />
            </a>
          </div>

          <p className="text-white font-bold text-[14px]">
            Chief Creative Officer
          </p>
        </div>
        <div className="media-element">
          <div
            className={`w-auto h-64 bg-contain items-center flex parent justify-center ${
              isFlipped4 ? "flipped4 " : "flippedBack4"
            }`}
            onClick={() => handleClick(4)}
          >
            <img
              src={plus}
              alt=""
              className={`absolute right-2 image top-2 ${
                isFlipped4
                  ? "hidden  transform transition-all duration-75 "
                  : "visible"
              }`}
            />
          </div>
          <div className="flex justify-between mt-2 items-center mr-2">
            {" "}
            <h1 className="font-bold text-[18px]">Jason Dias</h1>
            <a href="https://www.linkedin.com/in/jasondias01" target="_blank">
              <img src={linkedin2} alt="" className="w-5 ml-1 h-5" />
            </a>
          </div>

          <p className="text-white font-bold text-[14px]">
            Director - Growth & Strategy
          </p>
        </div>
        <div className="media-element">
          <div
            className={`w-auto h-64 bg-contain items-center parent flex justify-center ${
              isFlipped5 ? "flipped5 " : "flippedBack5"
            }`}
            onClick={() => handleClick(5)}
          >
            <img
              src={plus}
              alt=""
              className={`absolute right-2 image top-2 ${
                isFlipped5
                  ? "hidden  transform transition-all duration-75 "
                  : "visible"
              }`}
            />
          </div>
          <div className="flex justify-between mt-2 items-center mr-2">
            <h1 className="font-bold text-[18px]">Jatin Sevak</h1>
            <a href="https://www.linkedin.com/in/jatinsevak" target="_blank">
              <img src={linkedin2} alt="" className="w-5 ml-1 h-5" />
            </a>
          </div>

          <p className="text-white font-bold text-[14px]">Head - E-Commerce</p>
        </div>

        <div className="media-element">
          <div
            className={`w-auto h-64 bg-contain items-center flex parent justify-center ${
              isFlipped6 ? "flipped6 " : "flippedBack6"
            }`}
            onClick={() => handleClick(6)}
          >
            <img
              src={plus}
              alt=""
              className={`absolute right-2 top-2 image ${
                isFlipped6
                  ? "hidden  transform transition-all duration-75 "
                  : "visible"
              }`}
            />
          </div>
          <div className="flex justify-between mt-2 items-center mr-2">
            <h1 className="font-bold text-[18px]">Ekatrina Bolinjkar</h1>
            <a
              href="https://www.linkedin.com/in/ekaterina-bolinjkar-8bb33720"
              target="_blank"
            >
              <img src={linkedin2} alt="" className="w-5 ml-1 h-5" />
            </a>
          </div>
          <p className="text-white font-bold text-[14px]">
            Head - HR & Analytics
          </p>
        </div>

        <div className="media-element">
          <div
            className={`w-auto h-64 bg-contain items-center flex parent justify-center ${
              isFlipped7 ? "flipped7 " : "flippedBack7"
            }`}
            onClick={() => handleClick(7)}
          >
            <img
              src={plus}
              alt=""
              className={`absolute right-2 image top-2 ${
                isFlipped7
                  ? "hidden  transform transition-all duration-75 "
                  : "visible"
              }`}
            />
          </div>
          <div className="flex justify-between mt-2 items-center mr-2">
            <h1 className="font-bold text-[18px]">Simranjeet Dubey</h1>
            <a
              href="https://www.linkedin.com/in/simranjeetdubey"
              target="_blank"
            >
              <img src={linkedin2} alt="" className="w-5 ml-1 h-5" />
            </a>
          </div>

          <p className="text-white font-bold text-[14px]">
            Senior Brand Strategist
          </p>
        </div>

        <div className="media-element">
          <div
            className={`w-auto h-64 bg-contain items-center flex parent justify-center ${
              isFlipped8 ? "flipped8 " : "flippedBack8"
            }`}
            onClick={() => handleClick(8)}
          >
            <img
              src={plus}
              alt=""
              className={`absolute right-2 image top-2 ${
                isFlipped8
                  ? "hidden  transform transition-all duration-75 "
                  : "visible"
              }`}
            />
          </div>
          <div className="flex justify-between mt-2 items-center mr-2">
            {" "}
            <h1 className="font-bold text-[18px]">Pranjali Vartak</h1>
            <a
              href="https://www.linkedin.com/in/pranjali-vartak"
              target="_blank"
            >
              <img src={linkedin2} alt="" className="w-5 ml-1 h-5" />
            </a>
          </div>

          <p className="text-white font-bold text-[14px]">
            Manager - Brand & Content Marketing
          </p>
        </div>

        <div className="media-element">
          <div
            className={`w-auto h-64 bg-contain items-center flex parent justify-center ${
              isFlipped9 ? "flipped9 " : "flippedBack9"
            }`}
            onClick={() => handleClick(9)}
          >
            <img
              src={plus}
              alt=""
              className={`absolute right-2 image top-2 ${
                isFlipped9
                  ? "hidden  transform transition-all duration-75 "
                  : "visible"
              }`}
            />
          </div>
          <div className="flex justify-between mt-2 items-center mr-2">
            <h1 className="font-bold text-[18px]">Sanchit Chaphekar</h1>
            <a
              href="https://www.linkedin.com/in/sanchit-chaphekar"
              target="_blank"
            >
              <img src={linkedin2} alt="" className="w-5 ml-1 h-5" />
            </a>
          </div>

          <p className="text-white font-bold text-[14px]">
            Assistant Manager- Growth & Performance Marketing
          </p>
        </div>

        <div className="media-element">
          <div
            className={`w-auto h-64 bg-contain items-center flex parent justify-center ${
              isFlipped10 ? "flipped10 " : "flippedBack10"
            }`}
            onClick={() => handleClick(10)}
          >
            <img
              src={plus}
              alt=""
              className={`absolute right-2 image top-2 ${
                isFlipped10
                  ? "hidden  transform transition-all duration-75 "
                  : "visible"
              }`}
            />
          </div>
          <div className="flex justify-between mt-2 items-center mr-2">
            <h1 className="font-bold text-[18px]">Sufiyan Yahiya</h1>
            <a
              href="https://www.linkedin.com/in/mohammed-sufiyan-yahiya-57466b176"
              target="_blank"
            >
              <img src={linkedin2} alt="" className="w-5 ml-1 h-5" />
            </a>
          </div>

          <p className="text-white font-bold text-[14px]">
            Senior Graphic Designer
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;

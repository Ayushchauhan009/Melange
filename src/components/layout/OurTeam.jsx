import React from "react";
import {
  person1,
  person2,
  person3,
  person4,
  person5,
  person7,
  person8,
  person10,
  linkedin2,
  person9,
} from "../../assets/team";

const OurTeam = () => {
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
        <div className="media-element">
          <img src={person2} alt="" />
          <h1 className="font-bold text-[18px]">Sanket Bolinjkar</h1>
          <p className="text-white font-bold text-[14px]">Founder & CEO</p>
          <a
            href="https://www.linkedin.com/in/sanket-bolinjkar-743ba224"
            target="_blank"
          >
            <img src={linkedin2} alt="" className="w-5 ml-1 h-5" />
          </a>
        </div>
        <div className="media-element">
          <img src={person1} alt="" />
          <h1 className="font-bold text-[18px]">Saswat Mahapatra</h1>
          <p className="text-white font-bold text-[14px]">
            Chief Creative Officer
          </p>
          <a href="https://www.linkedin.com/in/smahapatra" target="_blank">
            <img src={linkedin2} alt="" className="w-5 ml-1 h-5" />
          </a>
        </div>
        <div className="media-element">
          <img src={person4} alt="" />
          <h1 className="font-bold text-[18px]">Mrityunjay Kumar</h1>
          <p className="text-white font-bold text-[14px]">
            Chief Creative Officer
          </p>
          <a href="#">
            <img src={linkedin2} alt="" className="w-5 ml-1 h-5" />
          </a>
        </div>
        <div className="media-element">
          <img src={person5} alt="" />
          <h1 className="font-bold text-[18px]">Jason Dias</h1>
          <p className="text-white font-bold text-[14px]">
            Director - Growth & Strategy
          </p>
          <a href="https://www.linkedin.com/in/jasondias01" target="_blank">
            <img src={linkedin2} alt="" className="w-5 ml-1 h-5" />
          </a>
        </div>
        <div className="media-element">
          <img src={person1} alt="" />
          <h1 className="font-bold text-[18px]">Jatin Sevak</h1>
          <p className="text-white font-bold text-[14px]">Head - E-Commerce</p>
          <a href="https://www.linkedin.com/in/jatinsevak" target="_blank">
            <img src={linkedin2} alt="" className="w-5 ml-1 h-5" />
          </a>
        </div>
        <div className="media-element">
          <img src={person7} alt="" />
          <h1 className="font-bold text-[18px]">Ekatrina Bolinjkar</h1>
          <p className="text-white font-bold text-[14px]">
            Head - HR & Analytics
          </p>
          <a
            href="https://www.linkedin.com/in/ekaterina-bolinjkar-8bb33720"
            target="_blank"
          >
            <img src={linkedin2} alt="" className="w-5 ml-1 h-5" />
          </a>
        </div>
        <div className="media-element">
          <img src={person8} alt="" />
          <h1 className="font-bold text-[18px]">Simranjeet Dubey</h1>
          <p className="text-white font-bold text-[14px]">
            Senior Brand Strategist
          </p>
          <a href="https://www.linkedin.com/in/simranjeetdubey" target="_blank">
            <img src={linkedin2} alt="" className="w-5 ml-1 h-5" />
          </a>
        </div>
        <div className="media-element">
          <img src={person1} alt="" />
          <h1 className="font-bold text-[18px]">Pranjali Vartak</h1>
          <p className="text-white font-bold text-[14px]">
            Manager - Brand & Content Marketing
          </p>
          <a href="https://www.linkedin.com/in/pranjali-vartak" target="_blank">
            <img src={linkedin2} alt="" className="w-5 ml-1 h-5" />
          </a>
        </div>
        <div className="media-element">
          <img src={person9} alt="" />
          <h1 className="font-bold text-[18px]">Sanchit Chaphekar</h1>
          <p className="text-white font-bold text-[14px]">
            Assistant Manager- Growth & Performance Marketing
          </p>
          <a
            href="https://www.linkedin.com/in/sanchit-chaphekar"
            target="_blank"
          >
            <img src={linkedin2} alt="" className="w-5 ml-1 h-5" />
          </a>
        </div>
        <div className="media-element">
          <img src={person10} alt="" />
          <h1 className="font-bold text-[18px]">Sufiyan Yahiya</h1>
          <p className="text-white font-bold text-[14px]">
            Senior Graphic Designer
          </p>
          <a
            href="https://www.linkedin.com/in/mohammed-sufiyan-yahiya-57466b176"
            target="_blank"
          >
            <img src={linkedin2} alt="" className="w-5 ml-1 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;

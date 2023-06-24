import React from "react";
import ContactButton from "./ContactButton";
import Logo from "./Logo";

const AboutSummary = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col-reverse md:flex-row justify-between items-center py-10 md:py-16 px-4 md:px-6">
          <div className="w-full md:w-1/2 p-4 md:p-16">
            <Logo />
          </div>
          <div className="w-full md:w-1/2">
            <div>
              <h1 className="multiverse-text text-3xl md:text-4xl pl-1 font-nunito font-extrabold">
                Your Marketing Multiverse
              </h1>
              <p className="font-bold font-nunito mt-1 pl-2">
                The many worlds of marketing, under one roof!
              </p>
            </div>
            <p className="pt-3 pl-2 font-nunito font-semibold w-[80%] text-[#0f0330]">
              We believe that marketing extends beyond just crafting the right
              message, developing artistic creatives, or analyzing data. It's
              about integrating these elements with a{" "}
              <b>well-defined strategy & structure</b>, to build a{" "}
              <b>cohesive brand experience</b>.
            </p>
            <p className="pt-3 pl-2 font-nunito font-semibold w-[80%] text-[#0f0330]">
              With us, you have your very own marketing multiverse, serving as
              your <b>dedicated in-house marketing team</b>.
            </p>
            <div className="pt-3">
              <ContactButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSummary;

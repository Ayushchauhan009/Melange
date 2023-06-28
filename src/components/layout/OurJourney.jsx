import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import ContactButton from "./ContactButton";
import { campaigns, media, reach, clients } from "../../assets/images";

const CountingNumber = ({ value, duration }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = Math.ceil(value / (duration * 60));

      const timer = setInterval(() => {
        if (start >= value) {
          clearInterval(timer);
        } else {
          setCount(start);
          start += increment;
        }
      }, 1000 / 60);
    }
  }, [inView, value, duration]);

  return <span ref={ref}>{count}</span>;
};

const OurJourney = () => {
  return (
    <div className="font-nunito pb-64">
      <h1 className="text-center font-bold text-4xl mt-20 mb-16 md:text-4xl lg:text-4xl">
        Our Journey
      </h1>
      <div className="flex flex-col md:flex-row justify-evenly items-center ">
        <div className="text-center">
          <img src={clients} alt="" className="mb-3  w-20 h-16" />
          <h1 className="font-bold text-4xl md:text-4xl lg:text-4xl">
            <CountingNumber value={51} duration={2} /> <span>+</span>
          </h1>
          <p className="font-bold text-xl md:text-xl">Clients</p>
        </div>

        <div className="text-center">
          <img src={media} alt="" className="ml-6 mb-0 w-20 h-20" />
          <h1 className="font-bold text-4xl md:text-4xl lg:text-4xl">
            <CountingNumber value={101} duration={2} /> <span>Cr+</span>
          </h1>
          <p className="font-bold text-xl md:text-xl">Media Spends</p>
        </div>
        <div className=" text-center">
          <img src={reach} alt="" className="ml-3 mb-3  w-20 h-16" />
          <h1 className="font-bold text-4xl md:text-4xl lg:text-4xl">
            <CountingNumber value={2} duration={2} /> <span>Bn+</span>
          </h1>
          <p className="font-bold text-xl md:text-xl">Reach</p>
        </div>
        <div className="text-center">
          <img src={campaigns} alt="" className="ml-14 mb-3 w-20 h-16" />
          <h1 className="font-bold text-4xl md:text-4xl lg:text-4xl">
            <CountingNumber value={252} duration={3} /> <span>+</span>
          </h1>
          <p className="font-bold text-xl md:text-xl">Campaigns Executed</p>
        </div>
      </div>
    </div>
  );
};

export default OurJourney;

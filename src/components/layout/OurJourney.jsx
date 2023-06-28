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
    <div className="font-nunito pb-10 md:pb-64">
      <h1 className="text-center font-bold text-4xl mt-10 mb-8 md:text-5xl lg:text-6xl">
        Our Journey
      </h1>
      <div className="flex flex-col md:flex-row justify-center md:justify-evenly items-center">
        <div className="text-center mb-10 md:mb-0">
          <img src={clients} alt="" className="mb-3 w-20 h-16 mx-auto" />
          <h1 className="font-bold text-4xl md:text-5xl lg:text-4xl">
            <CountingNumber value={51} duration={2} /> <span>+</span>
          </h1>
          <p className="font-bold text-xl md:text-xl">Clients</p>
        </div>

        <div className="text-center mb-10 md:mb-0">
          <img src={media} alt="" className="mb-0 w-20 h-20 mx-auto" />
          <h1 className="font-bold text-4xl md:text-5xl lg:text-4xl">
            <CountingNumber value={101} duration={2} /> <span>Cr+</span>
          </h1>
          <p className="font-bold text-xl md:text-xl">Media Spends</p>
        </div>
        <div className="text-center mb-10 md:mb-0">
          <img src={reach} alt="" className="mb-3 w-20 h-16 mx-auto" />
          <h1 className="font-bold text-4xl md:text-5xl lg:text-4xl">
            <CountingNumber value={2} duration={2} /> <span>Bn+</span>
          </h1>
          <p className="font-bold text-xl md:text-xl">Reach</p>
        </div>
        <div className="text-center">
          <img src={campaigns} alt="" className="mb-3 w-20 h-16 mx-auto" />
          <h1 className="font-bold text-4xl md:text-5xl lg:text-4xl">
            <CountingNumber value={252} duration={3} /> <span>+</span>
          </h1>
          <p className="font-bold text-xl md:text-xl">Campaigns Executed</p>
        </div>
      </div>
    </div>
  );
};

export default OurJourney;

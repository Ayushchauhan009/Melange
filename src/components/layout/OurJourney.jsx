import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import ContactButton from "./ContactButton";
import { midimage } from "../../assets/images";

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
      <h1 className="text-center font-extrabold text-4xl my-12 md:text-4xl lg:text-4xl">
        Our Journey
      </h1>
      <div className="flex flex-col md:flex-row justify-evenly items-center multiverse-text">
        <div className="flex flex-col justify-evenly mt-8 md:mt-0">
          <div className="text-center">
            <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl">
              <CountingNumber value={51} duration={2} /> <span>+</span>
            </h1>
            <p className="font-bold text-xl md:text-2xl">Clients</p>
          </div>
          <div className="mt-8 md:mt-28 text-center">
            <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl">
              <CountingNumber value={2} duration={2} /> <span>BN+</span>
            </h1>
            <p className="font-bold text-xl md:text-2xl">Reach</p>
          </div>
        </div>
        <div>
          <img src={midimage} alt="" className="mt-8 md:mt-0" />
        </div>
        <div>
          <div className="text-center">
            <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl">
              <CountingNumber value={101} duration={2} /> <span>+</span>
            </h1>
            <p className="font-bold text-xl md:text-2xl">Media Spends</p>
          </div>
          <div className="mt-8 md:mt-28 text-center">
            <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl">
              <CountingNumber value={252} duration={3} /> <span>+</span>
            </h1>
            <p className="font-bold text-xl md:text-2xl">Campaigns executed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurJourney;

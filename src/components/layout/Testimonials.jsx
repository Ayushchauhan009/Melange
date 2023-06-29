import React, { useState, useEffect } from "react";
import {
  amazon,
  meta,
  mixpanel,
  shopify,
  googlePartener,
  dhruvaklogo2,
  kalonlogo,
  comma,
  holiday,
  duvonlogo2,
  kylas,
  proofhub,
  interakt,
  hootsuite,
} from "../../assets/images";

import { useMediaQuery } from "react-responsive";

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [reviews, setReviews] = useState([
    {
      id: 1,
      icon: duvonlogo2,
      name: "Khushboo Shah",
      title: "Business Head- Duvon Disney",
      review:
        "They helped us with a holistic marketing plan which included E-commerce, social media, online campaigns and much more to launch our brand in the digital space ad increase sales exponentially.",
      comma: comma,
    },
    {
      id: 2,
      icon: kalonlogo,
      name: "Vidya Pandit",
      title: "Co-founder- Kalon Organics",
      review:
        "Mélange Digital is like your in-house marketing team who is always ready to support and come up with strategies based on the latest trends and technology.",
      comma: comma,
    },
    {
      id: 3,
      icon: dhruvaklogo2,
      name: "Jitendra Joshi",
      title: "Founder & CEO- Dhruvak",
      review:
        "Mélange helped us with in-depth market research and holistic strategies to launch a new niche of online value education in the overcrowded space of Ed Tech",
      comma: comma,
    },
    {
      id: 4,
      icon: holiday,
      name: "Snehal Kolambe",
      title: "Co-founder- The Holiday Store",
      review:
        "They are the masters when it comes to detailed targeting and campaign strategies. Mélange has helped us bring high quality leads on a continuous basis and build a strong social media presence.",
      comma: comma,
    },
  ]);

  const reviewsPerPage = useMediaQuery({ query: "(min-width: 768px)" }) ? 2 : 1;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextPage = currentPage === totalPages ? 1 : currentPage + 1;
      setCurrentPage(nextPage);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [currentPage, totalPages]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const getPageReviews = () => {
    const startIndex = (currentPage - 1) * reviewsPerPage;
    const endIndex = startIndex + reviewsPerPage;
    return reviews.slice(startIndex, endIndex);
  };

  return (
    <div className="">
      <div>
        <h2 className="font-bold font-nunito text-2xl md:text-4xl text-center px-9 pt-16 pb-4 md:px-52">
          What Our Clients Say About Us
        </h2>
        <div className="reviews flex flex-col md:flex-row justify-center mx-4 sm:mx-0 min-h-96 sm:min-h-64">
          {getPageReviews().map((review) => (
            <div
              key={review.id}
              className="review  md:mx-4 my-6 px-4 py-6 w-full testimonial  rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-56 xl:w-[28rem]"
            >
              <div className="flex flex-col sm:flex-row items-center  sm:items-start">
                <div className="mr-4 -mt-2">
                  <img
                    src={review.icon}
                    alt=""
                    className=" w-20 sm:w-80 h-16"
                  />
                </div>
                <div className="flex ">
                  <div className="flex">
                    <div className="flex flex-col items-center">
                      <h3 className="font-bold">{review.name}</h3>
                      <p className="font-semibold">{review.title}</p>
                      <p className="mt-3 font-sm md:font-normal  ">
                        {review.review}
                      </p>
                    </div>
                    <div className="ml-auto absolute sm:relative right-7 sm:top-0 sm:right-0 ">
                      <img
                        src={review.comma}
                        alt=""
                        className="w-6 sm:w-24 -mt-3"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination flex justify-center items-center my-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`${
                currentPage === index + 1 ? "active" : ""
              } mx-1 rounded-full border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-300`}
              onClick={() => handlePageChange(index + 1)}
            >
              <div className="w-2 h-2 rounded-lg bg-gray-500 hover:bg-blue-500 "></div>
            </button>
          ))}
        </div>
      </div>
      <div className="py-10 px-9">
        <h1 className="text-left md:text-center text-2xl font-nunito md:text-4xl font-bold">
          Proud To Be Partnered With
        </h1>
        <div className="partner-container py-6 px-32">
          <div className="partner-scroll">
            <img src={googlePartener} alt="" className="partner-logo" />
            <img src={shopify} alt="" className="partner-logo" />
            <img src={meta} alt="" className="partner-logo" />
            <img src={mixpanel} alt="" className="partner-logo" />
            <img src={amazon} alt="" className="partner-logo" />
            <img src={kylas} alt="" className="partner-logo w-1 h-2" />
            <img src={interakt} alt="" className="partner-logo" />
            <img src={proofhub} alt="" className="partner-logo" />
            <img src={hootsuite} alt="" className="partner-logo" />
            {/* Repeat the logos as needed for continuous scrolling  */}
            <img src={googlePartener} alt="" className="partner-logo" />
            <img src={shopify} alt="" className="partner-logo" />
            <img src={meta} alt="" className="partner-logo" />
            <img src={mixpanel} alt="" className="partner-logo" />
            <img src={amazon} alt="" className="partner-logo" />
            <img src={kylas} alt="" className="partner-logo w-1 h-2" />
            <img src={interakt} alt="" className="partner-logo" />
            <img src={proofhub} alt="" className="partner-logo proofhub" />
            <img src={hootsuite} alt="" className="partner-logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

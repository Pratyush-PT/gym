import React, { useRef } from "react";
import BannerImg from "../../assets/main.avif";
import About from "../About/About";

const BgStyle = {
  backgroundImage: `url(${BannerImg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};
const Hero = () => {
  return (
    <>
    
    <div
      style={BgStyle}
      className="dark:bg-black dark:text-white duration-300 "
    >
      <div className="bg-white/70  dark:bg-black/20 duration-200 ">
        <div className="container min-h-[620px] flex items-center">
          <div className="w-full md:w-[550px] mx-auto text-center space-y-5">
            <p className="text-primary text-2xl">
              Start Your Fitness Journey
            </p>
            <h1
              className="text-5xl md:text-7xl font-bold"
            >
              Your Fitness Journey Begins!
            </h1>
            <p>
              “The body achieves what the mind believes.”
            </p>
            <a href="#about" 
             data-aos="fade-up"
              data-aos-delay="100" 
              className=" p-2 primary-btn">
              Get Started
              </a>

          </div>
        </div>
      </div>
    </div></>
    
  );
};

export default Hero;

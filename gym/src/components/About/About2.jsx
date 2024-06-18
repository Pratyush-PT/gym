import React, { useEffect } from "react";
import BannerImg from "../../assets/meh2.jpeg";

const About2 = () => {
    
  return (
    <>
    <span id="services"></span>
    
    <div className="py-14 dark:bg-dark bg-white duration-300">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <div data-aos="zoom-in" className="flex items-center gap-4">
                <div className="text-primary/70 text-7xl ">
                  <h1 className="font-bold">02</h1>
                </div>
                <div>
                  <p className="text-primary">Global Fitness</p>
                  <h1 className="text-2xl sm:text-4xl font-bold">Services</h1>
                </div>
              </div>
              <p data-aos="fade-up" className="leading-8 tracking-wide">
              Being a 24/7 gym is one of our best amenities because we can offer our members
               unrestricted freedom of access from sun up to sun down and everywhere in between.
                You no longer have to worry about cramming in gym time before we close!  
                The flexibility of having access to the gym 24/7 makes it easier for your to
                 plan your schedule and cut down on the excuses of not being able to go to the gym.
                  Whether you are an early morning bird and or a night owl, you will find a comfortable 
                  workout environment that will fit your needs anytime of day! Squeezing in a workout before 
                  closing, or missing weekend workouts are now a thing of the past.
              </p>
              <p data-aos="fade-up" data-aos-delay="300">
              </p>
              <p></p>
                <a href="/#join" data-aos="fade-up" className="button-outline">
                Get Started
                </a>
            </div>
          </div>


          
          <div data-aos="fade-up">
            <img
              src={BannerImg}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)] mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default About2;

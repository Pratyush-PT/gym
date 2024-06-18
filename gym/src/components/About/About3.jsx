import React from "react";
import BannerImg from "../../assets/about1.jpg";

const About3 = () => {
  
  return (

    <>
    <span id="about"></span>
    <div className="py-14 dark:bg-dark bg-slate-100 duration-300">
      <div className="container">
      <h1
                data-aos="fade-up"
                className="text-3xl font-bold text-center sm:text-4xl"
              >
                Why <span className="text-primary">Choose</span> Us
              </h1>
            <div className="space-y-5 sm:p-10 ">
              <p data-aos="fade-up" data-aos-delay="300" className=" sm:text-2xl text-center 	">
              Tired of just staring at machines at the gym? We get it! At <span className="text-primary">BURN GYM</span>,
               we're all about building a supportive community that helps YOU reach your fitness goals, 
               from getting stronger to feeling more energized. Our expert trainers create personalized
                plans to fit your needs, and our exciting classes keep things fresh. But the real difference? 
                We create a welcoming, friendly environment where you feel comfortable pushing your limits and 
                celebrating every victory, big or small. Join our fitness family and experience the difference, 
                the friendly way!
              </p>
              <p data-aos="fade-up" className="leading-8 tracking-wide">

              </p>
                
            </div>
  
      </div>
    </div>
    </>

    
  );
};

export default About3;

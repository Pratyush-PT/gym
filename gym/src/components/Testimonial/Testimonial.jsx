import React, { useEffect } from "react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
const TestimonialData = [
  {
    id: 1,
    name: "Aditya",
    text: "Joining BURN GYM has been one of the best decisions I've made for my health and well-being. The facility is top-notch, with state-of-the-art equipment that caters to all fitness levels. The cleanliness and maintenance of the gym are impeccable, making it a pleasant environment to work out in.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Pratyush",
    text: "BURN GYM has exceeded my expectations in every way. It's not just a place to work out; it's a community that fosters a healthy and active lifestyle. I highly recommend [Gym Name] to anyone looking to improve their fitness and well-being.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Sahil",
    text:"I never thought I'd enjoy working out, but BURN GYM has completely changed my mind. The trainers are amazing - they motivate me and make sure I'm using the right form to avoid injuries. I've lost weight, gained muscle, and feel so much more confident in myself."
    ,
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Sachin",
    text: "BURN GYM  has helped me achieve my fitness goals. I've lowered my blood pressure, increased my flexibility, and have more energy throughout the day. I'm so grateful for the positive impact it's had on my health.",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div className="py-10 my-10">
      <div className="container">

        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
        </div>


        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-dark bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-primary">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-primary/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

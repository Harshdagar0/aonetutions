import React, { useEffect, useRef, useState } from "react";
import axios from 'axios';
// src/index.js ya src/App.js me
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { toast } from "react-hot-toast";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Parent of Class 10 Student",
    feedback:
      "A One Tuition helped my son improve his grades drastically. The teachers are supportive and ensure every concept is clear.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Rahul Sharma",
    role: "Parent of Class 10 Student",
    feedback:
      "A One Tuition helped my son improve his grades drastically. The teachers are supportive and ensure every concept is clear.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Rahul Sharma",
    role: "Parent of Class 10 Student",
    feedback:
      "A One Tuition helped my son improve his grades drastically. The teachers are supportive and ensure every concept is clear.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Rahul Sharma",
    role: "Parent of Class 10 Student",
    feedback:
      "A One Tuition helped my son improve his grades drastically. The teachers are supportive and ensure every concept is clear.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Sneha Patel",
    role: "Class 12 Student",
    feedback:
      "The one-on-one attention and flexible timing really helped me manage my studies and extracurriculars efficiently.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Amit Verma",
    role: "Parent of Class 8 Student",
    feedback:
      "Highly recommend A One Tuition! My daughter gained confidence in Maths and Science thanks to their amazing teachers.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];
<style jsx>{`
  .slick-dots li button:before {
    color: white !important;
    opacity: 1 !important;
  }
  .slick-dots li.slick-active button:before {
    color: white !important;
  }
`}</style>



export default function Testimonials() {
  const sliderRef = useRef(null);
  const [reviews, setReviews] = useState([]);
  const fetchReviews = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/reviews`);
      if (res.data.success) {
        setReviews(res.data.reviews);
      } else {
        toast.error("Failed to load reviews 😢");
      }
    } catch (error) {
      // toast.error("Failed to load reviews 😢");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchReviews();
    const handleResize = () => {
      sliderRef.current?.slickGoTo(0);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // force initial recalculation

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };


  return (
    <section className="bg-blue-900 rounded-2xl mt-10 text-white md:py-16 py-5 pb-10 px-6 md:px-12 lg:px-20 w-full max-w-screen-xl mx-auto" id="testimonials">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          What Our Students & Parents Say
        </h2>
        <p className="text-blue-200 max-w-xl mx-auto">
          Hear from those who’ve experienced the A One Tuition difference.
        </p>
      </div>

      <Slider {...settings}>
        {reviews.map((item, index) => (
          <div
            key={index}
            className="px-2 flex"
          >
            <div className="bg-white text-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center text-center h-full w-full transition-transform hover:scale-105 duration-300">
              <p className="text-gray-600 italic mb-4 flex-grow">“{item.review}”</p>
              <h3 className="font-semibold text-lg text-blue-900">{item.name}</h3>
              {/* <p className="text-sm text-gray-500">{item.role}</p> */}
            </div>
          </div>
        ))}
      </Slider>
    </section >
  );
}

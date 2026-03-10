import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios';
import Cards from "./Cards";

const Freebook = () => {
  const [list,setList]=useState([]);
  useEffect(()=>{
const getBook= async()=>{
try {
  const res=await axios.get("http://localhost:2724/books");
  console.log(res);
  setList(res.data.filter((data) => data.category === "Free"));
} catch (error) {
  console.log("Axios getBook Error"+ error.message)
}
}
getBook();
  },[])

  

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-10">
      <div className="header">
        <h1 className="font-semibold text-xl pb-2">
          Free Books Offered
        </h1>
        <p>
          Unlock powerful knowledge with our free courses designed to boost your skills, spark creativity, and accelerate success — all at zero cost.
        </p>
      </div>

      <div className="slider-container mt-6">
        <Slider {...settings}>
          {list.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Freebook;

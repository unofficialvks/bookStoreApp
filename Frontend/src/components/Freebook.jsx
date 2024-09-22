import React from 'react'
import list from "../../public/list.json";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './cards';

const Freebook = () => {
    const filterData = list.filter((data)=>data.category === "Free");
   // console.log(filterData)

    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20px px-4'>
      <div>
      <h1 className='font-semibold text-xl pb-2'>Free offered courses</h1>
      <p>This is a front page. Where you can find many free and paid books. So keep learnig and enhance your knowledge. Wish you a very good luck and have a bright future ahead is waiting for you, show there true potential and hard work.</p>
      </div>
    
    <div>
    <div className="slider-container">
      <Slider {...settings}>
       {filterData.map((item)=>(
        <Cards item = {item} key ={item.id}/>
        ))}
      </Slider>
    </div>
    </div>
    </div>
    </>
  )
}

export default Freebook
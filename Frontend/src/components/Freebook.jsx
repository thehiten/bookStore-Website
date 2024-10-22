import { useState, useEffect } from 'react';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import list from '../../public/list.json';
import Cards from './Cards';
import axios from "axios";

function Freebook() {
  
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://bookstore-website-igrb.onrender.com/book");
        console.log(res.data);
        const data = res.data.filter((data) => data.category === 'free');
        setBook(data);

      } catch (error) {
        console.error("Error fetching the book data:", error);
      }
    };
    getBook();
  }, []);

  
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1536, // 2xl
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1280, // xl
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // lg
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // md
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // sm
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mb-4">
        <h1 className="font-semibold text-xl pb-2 text-purple-500">Free Offered Courses</h1>
        <p>
          Explore our selection of free courses designed to expand your knowledge and skills. From literature to self-improvement, discover your next learning adventure with us.
        </p>
      </div>
      <div>
        <Slider {...settings}>
          {book.map(function(item) {
            return (
              <div className="p-2" key={item.id}>
                <div className="transform transition-transform duration-300 hover:scale-110">
                  <Cards item={item} />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Freebook;

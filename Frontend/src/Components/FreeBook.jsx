import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import axios from "axios";



const FreeBook = () => {
  const [list,setList] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const response = await axios.get("http://localhost:4001/book");;
        setList(response.data.filter((data) => data.cateogory === "Free"));
      } catch (error) {
        console.log("Error: ",error);
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
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-bold text-4xl my-6">Free Offered Book</h1>
          <p className="my-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
            officia sequi dolorem. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Laudantium odit, in aspernatur commodi omnis hic
            quas nemo ipsum eaque, debitis ad voluptatem maxime officiis!
            Corrupti eligendi, id officia consectetur voluptate porro ipsum nisi
            cumque.
          </p>
        </div>
        <div className="space-x-3">
          <Slider {...settings}>
            {
                list.map((item) => {
                    return (
                      <div key={item.id} className="px-0">
                        <Card item={item} />
                      </div>
                    );
                })
            }
          </Slider>
        </div>
      </div>
    </>
  );
};

export default FreeBook;

import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import Button from "./Button";
import axios from 'axios'

const Course = () => {
  const[book,setBook] = useState([]);

  // Calling the data from backend
  useEffect(() => {
      const getBook = async () => {
        try {
          const response = await axios.get("http://localhost:4001/book");
          setBook(response.data)
        } catch (error) {
          console.log("Error",error);
        }
      }

      getBook()
  },[])


  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="items-center justify-center text-center ">
          <h1 className="pt-24 text-2xl font-bold md:text-4xl">
            We're are delighted to have you {"    "}
            <span className="text-orange-500">Here! :)</span>
          </h1>
          <p className="my-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            maxime esse facilis reprehenderit, eos nemo aliquid. Magnam
            provident, fuga cupiditate vel repudiandae perferendis veniam ipsa
            ab ea odit iste consectetur maxime blanditiis excepturi facilis
            aliquid iure qui. Facere, atque praesentium! Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Natus, maxime laboriosam suscipit
            adipisci sequi quasi.
          </p>
          <Link to="/">
            <Button btn={'Back'}/>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
          {book.map((item) => {
            return (
              <div key={item.id} className="my-8">
                <Card item={item} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Course;

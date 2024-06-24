import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";

function Course() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.error("Error fetching the book data:", error);
      }
    };
    getBook();
  }, []);

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-28 text-center">
        <h1 className="text-2xl md:text-4xl">
          We're delighted to have you <span className="text-pink-500">Here! :)</span>
        </h1>
        <p className="mt-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sit beatae
          alias fugit tenetur cupiditate a distinctio, atque, earum, corporis
          nesciunt consequuntur cum libero! Ipsam vel perferendis optio maxime
          tempore? Rerum optio, rem id incidunt fugiat nam laudantium culpa, ad
          minima ipsam quia vitae reprehenderit. Veritatis, et quam hic debitis
          perspiciatis iste corporis excepturi esse architecto soluta placeat,
          provident neque.
        </p>

        <Link to="/">
          <button className="mt-7 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
            Back
          </button>
        </Link>
      </div>

      <div className="mt-7 grid grid-cols-1 md:grid-cols-4">
        {book.map((item) => (
          <div className="p-2" key={item.id}>
            <div className="transform transition-transform duration-300 hover:scale-110">
              <Cards item={item} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Course;

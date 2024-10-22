import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Cards from "../components/Cards.jsx";
import { useState, useEffect } from "react";

function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get(
          "https://bookstore-app-backend-x8xl.onrender.com/book"
        );
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-20">
        <div className=" mt-28 items-center justify-center text-center">
          <h1 className=" text-2xl md:text-4xl">
            We're delighted to have you{""}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12">
            Discover the behind-the-scenes process of how books are brought to
            life! This course is perfect for aspiring authors, editors, or
            anyone interested in the publishing world. You'll explore the steps
            from manuscript to finished book, including editing, cover design,
            and marketing.
          </p>
          <Link to="/">
            <button className=" mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;

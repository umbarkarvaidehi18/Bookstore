import React from "react";
import banner from "../../public/assets/Banner.png";
import Freebook from "./Freebook";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-12">
            <h1 className=" text-4xl font-bold">
              Hello,welcome here to learn something{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p className="text-xl">
              We believe that books are more than just words on a page they are
              gateways to new worlds, ideas, and adventures. Whether you're a
              seasoned reader or just starting your literary journey.
            </p>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="email"
                className="grow p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                placeholder="Email"
              />
            </label>
          </div>
          <button className=" mt-6 mb-9 btn btn-secondary">Send</button>
        </div>

        <div className=" order-1 w-full md:w-1/2 ">
          <img
            src={banner}
            className="ml-4 mt-16 md:ml-8 md:mt-28"
            alt="Banner Image"
          />
        </div>
      </div>
    </>
  );
}

export default Banner;

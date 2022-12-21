import React from "react";
import { Link } from "react-router-dom";

const Carouselbody = ({ data }) => {
  const { id, img, heading, dec } = data;
  return (
    <>
      <div id={`slide${id}`} className="carousel-item relative w-full">
        <section className=" bg-accent pt-10 lg:pt-0 lg:pl-16 pr-5 w-full  dark:dark:dark:bg-gray-800 dark:dark:dark:text-gray-100">
          <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
            <div className="flex flex-col justify-center  text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
              <h1 className="text-xl font-bold leading-none lg:text-4xl">
                {heading}
              </h1>

              <p className="mt-6 mb-8 text-lg sm:mb-12">{dec}</p>
              <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                <Link
                  rel="noopener noreferrer"
                  to="/products"
                  className="btn  font-semibold rounded bg-gray-900 text-white hover:bg-white hover:border-gray-900 hover:text-gray-900 "
                >
                  Buy Products
                </Link>
                <Link
                  rel="noopener noreferrer"
                  to="/signUp"
                  className="btn btn-outline  font-semibold border rounded "
                >
                  Join Now
                </Link>
              </div>
            </div>
            <div className="md:flex hidden items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
              <img
                src={img}
                alt=""
                className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
              />
            </div>
          </div>
        </section>
        <div className="absolute hidden lg:flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2">
          <a
            href={`${id > 1 ? `#slide${id - 1}` : `#slide3`}`}
            className="btn btn-circle bg-transparent border-2  text-gray-900 hover:bg-gray-300 "
          >
            ❮
          </a>
          <a
            href={`${id < 3 ? `#slide${id + 1}` : `#slide1`}`}
            className="btn btn-circle bg-transparent border-2  text-gray-900 hover:bg-gray-300 "
          >
            ❯
          </a>
        </div>
      </div>
    </>
  );
};

export default Carouselbody;

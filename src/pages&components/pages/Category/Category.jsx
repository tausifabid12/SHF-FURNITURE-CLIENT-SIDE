import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      fetch("http://localhost:5000/category").then((res) => res.json()),
  });

  //   const handleCategory = (catName) => {
  //     fetch(`http://localhost:5000/products/${catName}`)
  //       .then((res) => res.json())
  //       .then((data) => console.log(data));
  //   };

  console.log(categories?.data);
  return (
    <section className="py-6 dark:dark:bg-gray-800 dark:dark:text-gray-50">
      <h2 className="text-center text-5xl font-bold py-5">Categories</h2>
      <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
          {categories?.data.map((cat) => (
            <Link to={`/products/${cat?.categoryName}`} aria-label="View Item">
              <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src={cat?.img}
                  alt=""
                />
                <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                  <p className="text-xl text-center font-medium tracking-wide text-white capitalize">
                    {cat?.categoryName}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;

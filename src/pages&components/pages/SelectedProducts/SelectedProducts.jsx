import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import DetailCard from "../../components/DetailCard/DetailCard";

const SelectedProducts = () => {
  const selectedProducts = useLoaderData();
  const data = selectedProducts?.data;
  return (
    <div>
      <div className="flex items-center w-full justify-between py-16 px-12 text-gray-900 bg-[#f1f1f1] ">
        <h2 className="text-3xl font-bold uppercase">{data[0].category}</h2>
        <div
          aria-label="breadcrumb"
          className=" p-4  dark:dark:bg-gray-800 dark:dark:text-gray-100"
        >
          <ol className="flex h-8 font-semibold space-x-2 dark:dark:text-gray-100">
            <li className="flex items-center">
              <Link
                rel="noopener noreferrer"
                to="/"
                title="Back to homepage"
                className="flex items-center hover:underline"
              >
                Home
              </Link>
            </li>
            <li className="flex items-center space-x-1">
              <span className="dark:dark:text-gray-400">/</span>
              <Link
                rel="noopener noreferrer"
                to="/products"
                className="flex items-center px-1 capitalize hover:underline"
              >
                Products
              </Link>
            </li>
            <li className="flex items-center space-x-1">
              <span className="dark:dark:text-gray-400">/</span>
              <Link
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-1 capitalize hover:underline"
              >
                {data[0].category}
              </Link>
            </li>
          </ol>
        </div>
      </div>
      <div className="space-y-4">
        {data.map((data) => (
          <DetailCard key={data._id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default SelectedProducts;

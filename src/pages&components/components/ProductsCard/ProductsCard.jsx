import React from "react";
import { Link } from "react-router-dom";

const ProductsCard = ({ product }) => {
  const { productName, price, imgUrl, _id } = product;
  return (
    <Link to={`/products/item/${_id}`}>
      <div>
        <div className="relative rounded-md shadow-md h-96 bg-accent ease-in-out duration-300 hover:scale-105 dark:dark:bg-gray-900 dark:dark:text-gray-100 ">
          <img
            src={imgUrl}
            alt=""
            className="object-cover object-center w-full rounded-t-md h-1/2 dark:dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-4">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold tracking-wide">
                {productName}
              </h2>
              <p className="dark:dark:text-gray-100">Price: ${price}</p>
            </div>
            <div className="w-full absolute bottom-2 left-0">
              <button type="button" className="btn btn-ghost w-full ">
                view Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductsCard;

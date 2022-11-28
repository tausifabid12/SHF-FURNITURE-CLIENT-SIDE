import React from "react";
import { Link } from "react-router-dom";

const ProductsCard = ({ product }) => {
  const { productName, price, imgUrl, _id } = product;
  return (
    <div>
      <div className="relative rounded-md shadow-md h-96 bg-[#f1f1f1] dark:dark:bg-gray-900 dark:dark:text-gray-100">
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
          <div className="absolute bottom-2 left-[23%]">
            <Link to={`/products/item/${_id}`}>
              <button
                type="button"
                className="p-3 font-semibold tracking-wide rounded-md dark:dark:bg-violet-400 dark:dark:text-gray-900"
              >
                view Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;

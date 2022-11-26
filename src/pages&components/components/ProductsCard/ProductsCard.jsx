import React from "react";

const ProductsCard = ({ product }) => {
  const { price, name, img } = product;
  return (
    <div>
      <div className="relative rounded-md shadow-md h-96 bg-[#f1f1f1] dark:dark:bg-gray-900 dark:dark:text-gray-100">
        <img
          src={img}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-1/2 dark:dark:bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-4">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold tracking-wide">{name}</h2>
            <p className="dark:dark:text-gray-100">Price: ${price}</p>
          </div>
          <div className="absolute bottom-2 left-[23%]">
            <button
              type="button"
              className="p-3 font-semibold tracking-wide rounded-md dark:dark:bg-violet-400 dark:dark:text-gray-900"
            >
              view Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;

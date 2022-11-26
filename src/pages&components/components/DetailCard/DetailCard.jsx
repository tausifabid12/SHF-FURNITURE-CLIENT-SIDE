import React from "react";

const DetailCard = ({ data }) => {
  const { price, name, img, dec } = data;
  return (
    <div className="text-gray-900 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src={img}
            alt=""
          />
        </div>
        <div className="lg:pr-10">
          <h5 className="mb-4 text-4xl font-extrabold leading-none capitalize">
            {name}
          </h5>

          <p className="mb-2 font-bold text-xl text-gray-900">
            Price: ${price}
          </p>
          <p className="mb-2 font-bold text-md text-gray-900">
            Used For: {price} years
          </p>
          <p className="mb-2 font-bold text-md text-gray-900">
            Location: ${price}
          </p>
          <p className="mb-5 text-gray-900">{dec}</p>
          <hr className="mb-5 border-gray-300" />
          <div className="flex items-center justify-between ">
            <button className="bg-gray-900 text-white text-lg font-semibold py-2 px-4 rounded-sm">
              Book Now
            </button>
            <p className="text-lg font-bold">Post By : Name</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;

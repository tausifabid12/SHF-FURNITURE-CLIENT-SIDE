import React from "react";
import BookingModal from "../BookingModal/BookingModal";
import { FaHeartBroken } from "react-icons/fa";
import ReportModal from "../ReportModal/ReportModal";

const DetailCard = ({ data }) => {
  const { price, productName, date, imgUrl, email, location, _id } = data;
  return (
    <div className=" relative text-gray-900 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="absolute right-0">
        <label
          htmlFor="reportModal"
          className="border-2 border-gray-900 rounded-md px-2 flex items-center font-bold"
        >
          <FaHeartBroken /> <span className="pl-2">Report</span>
        </label>
      </div>
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src={imgUrl}
            alt=""
          />
        </div>
        <div className="lg:pr-10 pt-7">
          <h5 className="mb-4 text-4xl font-extrabold leading-none capitalize">
            {productName}
          </h5>

          <p className="mb-2 font-bold text-xl text-gray-900">
            Price: ${price}
          </p>
          <p className="mb-2 font-bold text-md text-gray-900">
            Used For: {price} years
          </p>
          <p className="mb-2 font-bold text-md text-gray-900">
            Location: ${location}
          </p>
          <p className="mb-5 text-gray-900">{}</p>
          <hr className="mb-5 border-gray-300" />
          <div className="flex items-center justify-between py-3">
            <label
              htmlFor="bookingModal"
              className="bg-gray-900 text-white text-lg font-semibold py-2 px-4 rounded-sm"
            >
              Book Now
            </label>
            <div>
              <p className="text-lg font-bold">Post By : {email}</p>
              <p className="text-gray-900 text-sm font-bold pt-1">On: {date}</p>
            </div>
          </div>
        </div>
      </div>
      <BookingModal data={data} />
      <ReportModal id={_id} productName={productName} />
    </div>
  );
};

export default DetailCard;

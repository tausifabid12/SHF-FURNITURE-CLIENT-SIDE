import React, { useState } from "react";
import BookingModal from "../BookingModal/BookingModal";
import { FaHeartBroken } from "react-icons/fa";
import ReportModal from "../ReportModal/ReportModal";
import { FaCheckCircle } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
const DetailCard = ({ data }) => {
  const [loading, setLoading] = useState(false);

  const { price, productName, date, imgUrl, email, location, _id } = data;

  const { data: seller } = useQuery({
    queryKey: ["seller", email],
    queryFn: () =>
      fetch(
        `https://furniture-server-nine.vercel.app/usersInfo?email=${email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      ).then((res) => res.json()),
  });

  return (
    <div className=" relative text-gray-900 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="absolute right-5">
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
            {loading ? (
              <button className="btn btn-square loading"></button>
            ) : (
              <label
                htmlFor="bookingModal"
                className="btn btn-am bg-gray-900 text-white   rounded-sm"
              >
                Book Now
              </label>
            )}

            <div className="px-3">
              <p className="text-sm flex items-center  font-bold">
                Post By : {email}
                {seller?.data?.verified && (
                  <span className="text-green-600 pl-1">
                    <FaCheckCircle />
                  </span>
                )}
              </p>
              <p className="text-gray-900 text-sm font-bold pt-1">On: {date}</p>
            </div>
          </div>
        </div>
      </div>
      <BookingModal data={data} setLoading={setLoading} />
      <ReportModal id={_id} productName={productName} setLoading={setLoading} />
    </div>
  );
};

export default DetailCard;

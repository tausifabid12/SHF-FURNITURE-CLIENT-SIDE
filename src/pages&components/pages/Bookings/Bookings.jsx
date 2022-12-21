import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../contexts/AuthProvider";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const { data: bookings, refetch } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: () =>
      fetch(
        `https://furniture-server-nine.vercel.app/booking/user?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      ).then((res) => res.json()),
  });

  console.log(bookings, "bookings");

  const handleDelete = (id) => {
    fetch(`https://furniture-server-nine.vercel.app/delete/booking/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result) {
          refetch();
          toast.error("Order Deleted");
        }
      });
  };

  return (
    <div className="lg:px-10 ">
      {/* <div>
        <button
          aria-label="Close Menu"
          title="Close Menu"
          className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
        >
          <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
            />
          </svg>
        </button>
      </div> */}
      <h2 className="text-3xl font-bold text-gray-900 pb-3">My Bookings</h2>
      <div>
        <div className="container p-2  mx-auto sm:p-4 dark:dark:text-gray-100">
          <div className="overflow-x-auto">
            <table className="min-w-full text-xs">
              <thead className="dark:dark:bg-gray-700 text-center">
                <tr className="text-left">
                  <th className="p-3">Image</th>
                  <th className="p-3">Product Name</th>
                  <th className="p-3">Price</th>
                  <th className="p-3">Status</th>
                  <th className="p-3 ">Delete</th>
                  <th className="p-3 ">Payment</th>
                </tr>
              </thead>
              <tbody>
                {bookings?.data &&
                  bookings?.data.map((order) => (
                    <tr
                      key={order?._id}
                      className="border-b border-opacity-20  dark:dark:border-gray-700 dark:dark:bg-gray-900"
                    >
                      <td className="p-3">
                        <div className="avatar">
                          <div className="w-12 rounded-xl">
                            <img
                              src={
                                order?.imgUrl
                                  ? order?.imgUrl
                                  : "https://placeimg.com/192/192/people"
                              }
                              alt=""
                            />
                          </div>
                        </div>
                      </td>
                      <td className="p-3">
                        <p>{order?.productName}</p>
                      </td>
                      <td className="p-3">
                        <p className="dark:dark:text-gray-400">
                          ${order?.price}
                        </p>
                      </td>
                      <td className="p-3">
                        <button className="btn glass btn-xs text-gray-900">
                          Unpaid
                        </button>
                      </td>
                      <td className="p-3 ">
                        <span
                          onClick={() => handleDelete(order?._id)}
                          className="btn btn-xs btn-error bg-red-600  text-white  "
                        >
                          <span>Delete</span>
                        </span>
                      </td>
                      <td className="p-3 ">
                        <Link
                          to={`/dashboard/bookings/payment/${order?.productId}`}
                        >
                          <span className="btn  btn-xs bg-green-600 border-none text-white  ">
                            <span>Pay now</span>
                          </span>
                        </Link>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;

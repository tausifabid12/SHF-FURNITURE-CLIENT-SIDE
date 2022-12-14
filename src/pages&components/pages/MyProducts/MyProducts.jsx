import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";
import { toast } from "react-toastify";

import { AuthContext } from "../../../contexts/AuthProvider";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const { data: bookings, refetch } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: () =>
      fetch(
        `https://furniture-server-nine.vercel.app/userProducts?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      ).then((res) => res.json()),
  });

  const handleDelete = (id) => {
    fetch(`https://furniture-server-nine.vercel.app/delete/products/${id}`, {
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

  const handleAdvertise = (id) => {
    fetch(`https://furniture-server-nine.vercel.app/products?id=${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ advertise: true }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result) {
          refetch();
          toast.success("product added to advertise");
        }
      });
  };

  return (
    <div className="lg:px-10 ">
      <h2 className="text-3xl font-bold text-gray-900 pb-3">My Products</h2>
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
                  <th className="p-3 ">Advertise</th>
                </tr>
              </thead>
              <tbody>
                {bookings?.data &&
                  bookings?.data.map((order) => (
                    <tr
                      key={order._id}
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
                        <p>{order.productName}</p>
                      </td>
                      <td className="p-3">
                        <p className="dark:dark:text-gray-400">
                          ${order.price}
                        </p>
                      </td>
                      <td className="p-3">
                        <button className="btn glass btn-xs text-gray-900">
                          UnSoled
                        </button>
                      </td>
                      <td className="p-3 ">
                        <span
                          onClick={() => handleDelete(order._id)}
                          className="btn btn-xs btn-error bg-red-600  text-white  "
                        >
                          <span>Delete</span>
                        </span>
                      </td>
                      <td className="p-3 ">
                        <span
                          onClick={() => handleAdvertise(order._id)}
                          className={`btn  btn-xs  border-none text-white ${
                            order.advertise
                              ? "btn-disabled bg-gray-900"
                              : "bg-green-600"
                          } `}
                        >
                          <span>Advertise</span>
                        </span>
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

export default MyProducts;

import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useUser from "../../../hooks/useUsers";

const BookingModal = ({ productName, price }) => {
  const { register, handleSubmit } = useForm();
  const [user] = useUser();

  const handleAddProduct = (data, e) => {
    const { productName, price, location, email, userName, mobile } = data;
    const date = new Date().toLocaleDateString();
    const bookingInfo = {
      productName,
      price,
      location,
      email,
      userName,
      mobile,
      date,
    };
    fetch(`http://localhost:5000/booking`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.result) {
          toast.success("Booking Successful", {
            position: "top-center",
            autoClose: 2000,
          });
        } else {
          toast.error("Booking Unsuccessful", {
            position: "top-center",
            autoClose: 2000,
          });
        }
        e.target.reset();
      });

    console.log("trying to submit ", bookingInfo);
  };

  return (
    <div>
      <input type="checkbox" id="bookingModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="bookingModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form
            onSubmit={handleSubmit(handleAddProduct)}
            className="py-10  space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="flex space-x-4">
              <div className="space-y-1 text-sm w-1/2">
                <label
                  htmlFor="userName"
                  className="block dark:dark:text-gray-400"
                >
                  userName
                </label>
                <input
                  type="userName"
                  {...register("userName", {
                    required: true,
                  })}
                  name="userName"
                  defaultValue={user?.userName}
                  readOnly
                  id="userName"
                  placeholder="userName"
                  className="w-full px-4 py-3 rounded-md bg-[#f1f1f1] dark:dark:border-gray-700 dark:dark:bg-gray-900 dark:dark:text-gray-100 "
                />
              </div>
              <div className="space-y-1 text-sm w-1/2">
                <label
                  htmlFor="email"
                  className="block dark:dark:text-gray-400"
                >
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: true,
                  })}
                  name="email"
                  id="email"
                  defaultValue={user?.email}
                  readOnly
                  placeholder="email"
                  className="w-full px-4 py-3 rounded-md bg-[#f1f1f1] dark:dark:border-gray-700 dark:dark:bg-gray-900 dark:dark:text-gray-100 "
                />
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="space-y-1 text-sm w-1/2">
                <label
                  htmlFor="Product Name"
                  className="block dark:dark:text-gray-400"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  defaultValue={productName}
                  readOnly
                  {...register("productName", {
                    required: true,
                  })}
                  name="productName"
                  id="productName"
                  placeholder="Product Name"
                  className="w-full px-4 py-3 rounded-md bg-[#f1f1f1] dark:dark:border-gray-700 dark:dark:bg-gray-900 dark:dark:text-gray-100 "
                />
              </div>
              <div className="space-y-1 text-sm w-1/2">
                <label
                  htmlFor="price"
                  className="block dark:dark:text-gray-400"
                >
                  price
                </label>
                <input
                  type="text"
                  defaultValue={price}
                  readOnly
                  {...register("price", {
                    required: true,
                  })}
                  name="price"
                  id="price"
                  placeholder="price"
                  className="w-full px-4 py-3 rounded-md bg-[#f1f1f1] dark:dark:border-gray-700 dark:dark:bg-gray-900 dark:dark:text-gray-100 "
                />
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="space-y-1 text-sm w-1/2">
                <label
                  htmlFor="mobile"
                  className="block dark:dark:text-gray-400"
                >
                  Mobile no:
                </label>
                <input
                  type="text"
                  {...register("mobile", {
                    required: true,
                  })}
                  name="mobile"
                  id="mobile"
                  placeholder="mobile"
                  className="w-full px-4 py-3 rounded-md bg-[#f1f1f1] dark:dark:border-gray-700 dark:dark:bg-gray-900 dark:dark:text-gray-100 "
                />
              </div>
              <div className="space-y-1 text-sm w-1/2">
                <label
                  htmlFor="location"
                  className="block dark:dark:text-gray-400"
                >
                  Location
                </label>
                <input
                  type="text"
                  {...register("location", {
                    required: true,
                  })}
                  name="location"
                  id="location"
                  placeholder="location"
                  className="w-full px-4 py-3 rounded-md bg-[#f1f1f1] dark:dark:border-gray-700 dark:dark:bg-gray-900 dark:dark:text-gray-100 "
                />
              </div>
            </div>
            <label
              htmlFor="bookingModal"
              type="submit"
              className="block w-full p-3 text-center rounded-sm bg-gray-900  text-white"
            >
              Book Now
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;

import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { json } from "react-router-dom";

import useUser from "../../../hooks/useUsers";
import Loading from "../../Loading/Loading";

const AddProducts = () => {
  const [user] = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { data: category, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      fetch(`http://localhost:5000/category`).then((res) => res.json()),
  });

  const handleAddProduct = (data) => {
    const { productName, price, location, email, category, userName } = data;
    const date = new Date().toLocaleDateString();
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMAGEBB_API_KEY}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        const imgUrl = imgData.data.url;

        const productInfo = {
          productName,
          price,
          location,
          email,
          imgUrl,
          date,
          category,
        };

        fetch("http://localhost:5000/products", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(productInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            alert("success");
            console.log(data);
          });
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="px-24">
      <h3 className="text-gray-900 font-bold text-4xl">Add Product</h3>
      <form
        onSubmit={handleSubmit(handleAddProduct)}
        className="py-10  space-y-6 ng-untouched ng-pristine ng-valid"
      >
        <div className="flex space-x-4">
          <div className="space-y-1 text-sm w-1/2">
            <label htmlFor="userName" className="block dark:dark:text-gray-400">
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
            <label htmlFor="email" className="block dark:dark:text-gray-400">
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
              type="Product Name"
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
            <label htmlFor="price" className="block dark:dark:text-gray-400">
              price
            </label>
            <input
              type="price"
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
              htmlFor="ProductAge"
              className="block dark:dark:text-gray-400"
            >
              ProductAge
            </label>
            <input
              type="ProductAge"
              {...register("ProductAge", {
                required: true,
              })}
              name="ProductAge"
              id="ProductAge"
              placeholder="ProductAge"
              className="w-full px-4 py-3 rounded-md bg-[#f1f1f1] dark:dark:border-gray-700 dark:dark:bg-gray-900 dark:dark:text-gray-100 "
            />
          </div>
          <div className="space-y-1 text-sm w-1/2">
            <label htmlFor="location" className="block dark:dark:text-gray-400">
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
        <div className="flex space-x-4">
          <div className="space-y-1  text-sm w-1/2">
            <label htmlFor="location" className="block dark:dark:text-gray-400">
              Image
            </label>
            <input
              type="file"
              {...register("image", {
                required: true,
              })}
              name="image"
              id="image"
              className="w-full px-4 py-3 rounded-md bg-[#f1f1f1] dark:dark:border-gray-700 dark:dark:bg-gray-900 dark:dark:text-gray-100 "
            />
          </div>
          <div className="space-y-1 w-1/2 text-sm">
            <label htmlFor="category" className="block dark:dark:text-gray-400">
              Select Category
            </label>
            <select
              {...register("category", {
                required: true,
              })}
              name="category"
              id="category"
              className="w-full  p-3  rounded-md bg-[#f1f1f1] dark:dark:border-gray-700 dark:dark:bg-gray-900 dark:dark:text-gray-100 "
            >
              <option defaultValue>Select Your Option</option>
              {category?.data &&
                category?.data.map((cat) => (
                  <option key={cat._id}>{cat?.categoryName}</option>
                ))}
            </select>
          </div>
        </div>
        <div className="col-span-full">
          <label htmlFor="bio" className="text-sm">
            Description
          </label>
          <textarea
            id="bio"
            placeholder=""
            className="w-full h-24 bg-[#f1f1f1] rounded-md focus:ring focus:ring-opacity-75  dark:border-gray-700 dark:text-gray-900"
          ></textarea>
        </div>

        <button className="block w-full p-3 text-center rounded-sm bg-gray-900  text-white">
          Add Product For Sale
        </button>
      </form>
    </div>
  );
};

export default AddProducts;

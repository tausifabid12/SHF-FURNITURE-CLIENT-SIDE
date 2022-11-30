import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductsCard from "../../components/ProductsCard/ProductsCard";
import Loading from "../../Loading/Loading";

const AllProducts = () => {
  const products = useLoaderData();
  if (!products?.data) {
    return <Loading />;
  }
  return (
    <div className="grid px-4 grid-cols-1 gap-5 py-20 md:grid-cols-2 lg:grid-cols-4">
      {products?.data.map((product) => (
        <ProductsCard key={product._id} product={product}></ProductsCard>
      ))}
    </div>
  );
};

export default AllProducts;

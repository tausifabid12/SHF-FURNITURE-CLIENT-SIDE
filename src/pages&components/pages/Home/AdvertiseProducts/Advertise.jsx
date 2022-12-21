import { useQuery } from "@tanstack/react-query";
import React from "react";
import ProductsCard from "../../../components/ProductsCard/ProductsCard";
// import Loading from "../../../Loading/Loading";

const Advertise = () => {
  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch(`https://furniture-server-nine.vercel.app/advertise`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });

  // if (!products?.data) {
  //   return <Loading />;
  // }
  return (
    <div className={products?.data ? "block" : "hidden"}>
      <div className="px-4">
        <h2 className="text-4xl font-bold py-12">Top Selling Products</h2>
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {products?.data.map((product) => (
            <ProductsCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advertise;

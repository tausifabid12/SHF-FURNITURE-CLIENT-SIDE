import React from "react";
import ProductsCard from "../../../components/ProductsCard/ProductsCard";
import Loading from "../../../Loading/Loading";

const ProductsTabPanel = ({ products }) => {
  if (!products?.data) {
    return <Loading />;
  }
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-16">
      {products?.data.map((product) => (
        <ProductsCard key={product._id} product={product}></ProductsCard>
      ))}
    </div>
  );
};

export default ProductsTabPanel;

import React from "react";
import ProductsCard from "../../../components/ProductsCard/ProductsCard";

const ProductsTabPanel = ({ products }) => {
  console.log(products?.data, "this is ");
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-16">
      {products?.data.map((product) => (
        <ProductsCard key={product._id} product={product}></ProductsCard>
      ))}
    </div>
  );
};

export default ProductsTabPanel;

import React from "react";
import Category from "../../Category/Category";
import Carousel from "../Carousel/Carousel";
import ProductsTab from "../ProductsTab/ProductsTab";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Category></Category>
      <ProductsTab />
    </div>
  );
};

export default Home;

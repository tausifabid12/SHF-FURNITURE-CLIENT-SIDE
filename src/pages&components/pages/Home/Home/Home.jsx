import React from "react";
import Category from "../../Category/Category";
import Advertise from "../AdvertiseProducts/Advertise";

import Carousel from "../Carousel/Carousel";
import ProductsTab from "../ProductsTab/ProductsTab";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Category></Category>
      <ProductsTab />
      <Advertise></Advertise>
    </div>
  );
};

export default Home;

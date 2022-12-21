import React from "react";
import Category from "../../Category/Category";
// import Advertise from "../AdvertiseProducts/Advertise";

import Carousel from "../Carousel/Carousel";
import ProductsTab from "../ProductsTab/ProductsTab";
import Subscribe from "../Subscribe/Subscribe";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Category></Category>
      <ProductsTab />
      {/* <Advertise></Advertise> */}
      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;

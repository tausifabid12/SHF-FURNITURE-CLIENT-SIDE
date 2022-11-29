import React from "react";

import carouselImg3 from "../../../../asset/homeCarousel/carousel3.png";
import carouselImg2 from "../../../../asset/homeCarousel/carousel2.png";
import carouselImg1 from "../../../../asset/homeCarousel/carousel1.png";
import Carouselbody from "./Carouselbody/Carouselbody";

const Coursel = () => {
  const courselData = [
    {
      img: carouselImg1,
      heading: "Find good quality used Furniture",
      dec: "Buying used furniture is often more cost effective, sustainable, and ethical than purchasing brand new items",
      id: 1,
    },
    {
      img: carouselImg3,
      heading: "Discover some luxury brands.",
      dec: "It's very possible to come upon a lucky luxury find when shopping second-hand. In fact, some people earn a side income by browsing for high-valued items and reselling them for a profit",
      id: 2,
    },
    {
      img: carouselImg2,
      heading: "Decrease negative impact on the environment",
      dec: "Buying these items from swap shops does not only save money when compared with what a new one costs. It also encourages reusing, which is sustainable for the environment",
      id: 3,
    },
  ];
  return (
    <div className="carousel w-full">
      {courselData.map((data, i) => (
        <Carouselbody key={i} data={data}></Carouselbody>
      ))}
    </div>
  );
};

export default Coursel;

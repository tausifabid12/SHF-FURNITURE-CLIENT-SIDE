import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages&components/components/Footer/Footer";
import Navbar from "../pages&components/components/NavBar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;

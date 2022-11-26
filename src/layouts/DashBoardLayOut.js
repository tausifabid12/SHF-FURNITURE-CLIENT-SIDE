import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Drawer from "../pages&components/components/Drawer/Drawer";
import Navbar from "../pages&components/components/NavBar/Navbar";

const DashBoardLayOut = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <Navbar
        setIsDrawerOpen={setIsDrawerOpen}
        isDrawerOpen={isDrawerOpen}
      ></Navbar>
      <div className="flex ">
        <Drawer setIsDrawerOpen={setIsDrawerOpen} isDrawerOpen={isDrawerOpen} />
        {/* ------------------ */}
        <div className="w-full h-screen ">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashBoardLayOut;

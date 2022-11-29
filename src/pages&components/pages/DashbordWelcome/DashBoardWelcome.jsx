import React from "react";
import useUser from "../../../hooks/useUsers";

const DashBoardWelcome = () => {
  const [user] = useUser();
  return (
    <div className="w-full h-[500px] bg-[#f1f1f1] m-5 rounded-md grid place-content-center">
      <h2 className="text-6xl font-extrabold text-center ">
        Welcome {user?.role}
      </h2>
    </div>
  );
};

export default DashBoardWelcome;

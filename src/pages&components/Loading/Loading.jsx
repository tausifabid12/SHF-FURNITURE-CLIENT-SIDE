import React from "react";

const Loading = () => {
  return (
    <div className="min-w-full min-h-[screen] mx-auto justify-center items-center ">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-green-500"></div>
    </div>
  );
};

export default Loading;

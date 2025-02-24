import React from "react";

export const Circle = ({ width, z }) => {
  return (
    <div className="w-[1600px] h-[1200px]">
      <div
        className={`w-[${width}] h-[${width}] rounded-[${width}] border border-solid border-[#fff]  bg-transparent absolute`}
      ></div>
    </div>
  );
};

import React from "react";

import { LuMapPin } from "react-icons/lu";

export const InputValue = () => {
  return (
    <div className="w-fit shadow-custom h-fit bg-[#ffffffcc] rounded-[48px] flex items-center justify-center gap-4">
      <LuMapPin className="size-[48px] text-gray-300" />
      <input
        placeholder="Search"
        className="w-[400px] h-[44px] px-6 py-4 bg-[#ffffffcc] focus-visible:outline-none text-black text-[32px] font-[700] "
        type="text"
      />
    </div>
  );
};

import React from "react";

export const Card = () => {
  return (
    <div className="w-[414px] h-[832px] rounded-[48px] bg-[#111827] absolute z-20 backdrop-blur-md flex justify-center ">
      <div
        className={`w-[398px] h-[504px] rounded-[42px] bg-custom mt-2 flex flex-col items-center`}
      >
        <div className="flex pt-[56px] pl-[40px] items-center gap-[112px]">
          <div className="flex flex-col">
            <p className="text-[#9CA3AF] text-[18px] font-[500] ">
              September 10, 2021
            </p>
            <h1 className="text-white text-[48px] font-[800]">Kraków</h1>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M18.4768 25.5772L23.1596 17.2151C26.2226 11.7453 22.2691 5 16 5C9.73095 5 5.77737 11.7453 8.84045 17.2151L13.5232 25.5772C14.6072 27.5128 17.3928 27.5128 18.4768 25.5772Z"
              stroke="#9CA3AF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="16"
              cy="13"
              r="2"
              stroke="#9CA3AF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="pt-[183.11px] flex justify-center items-center">
          <img className="absolute z-[80]" src="/icon.png" alt="zurag" />
          <img className="absolute z-[90]" src="/shadow.png" alt="zurag" />
        </div>
        <div className="flex flex-col">
          <h1 className="bg-customText1 text-[144px] 2">17°</h1>
          <h3>Clear</h3>
        </div>
      </div>
    </div>
  );
};

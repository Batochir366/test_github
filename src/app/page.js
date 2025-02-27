"use client";
import Image from "next/image";
import { Circle, Cards, Input } from "@/components";
import { useState } from "react";
const circlesData = [
  {
    classname: "size-[1740px] rounded-[1740px]",
  },
  {
    classname: "size-[1340px] rounded-[1340px]",
  },
  {
    classname: "size-[940px] rounded-[940px]",
  },
  {
    classname: "size-[540px] rounded-[540px]",
  },
  {
    classname: "size-[340px] rounded-[340px]",
  },
  {
    classname: "size-[140px] rounded-[140px] bg-[#f3f4f6]",
  },
];

export default function Home() {
  const [fetchdata, setFetchdata] = useState();
  // const data2 = fetch(
  //   "https://api.weatherapi.com/v1/forecast.json?key=c54db69bc7dc4466bf415506241712&q=tokyo"
  // ).then((response) => console.log(response));
  // const [data, setData] = useState([
  //   {
  //     year: "2025 ",
  //     day: "27 ",
  //     months: "feb",
  //     location: "Mongolia",
  //     Image: "/sun.png",
  //     temp: "0°",
  //     condition: "sunny",
  //     isNight: false,
  //   },
  //   {
  //     year: "2025 ",
  //     day: "27 ",
  //     months: "feb",
  //     location: "Mongolia",
  //     Image: "/sun.png",
  //     temp: "0°",
  //     condition: "sunny",
  //     isNight: true,
  //   },
  // ]);
  return (
    <div className="flex relative w-full h-screen overflow-hidden">
      <img
        className="size-[176px] absolute top-[10%] left-[10%]"
        src="/yellowcircle.png"
      ></img>
      <img
        className="size-[176px] flex absolute top-[75%] left-[80%]"
        src="/bluecircle.png"
      ></img>
      <div className="absolute pt-[40px] pl-[40px] ">
        <Input />
      </div>
      <div className="w-1/2 h-full bg-[#f3f4f6]  rounded-tl-[50px] rounded-bl-[50px]  flex justify-center items-center">
        <Cards data={data[0]}></Cards>
      </div>
      <div className="w-1/2 h-full bg-[#f3f4f6] rounded-tr-[50px] flex flex-col justify-center items-center">
        <div className=" w-[100%] h-[45%] bg-[#0F141E] rounded-tr-[50px] rounded-bl-[45px] flex justify-center items-center"></div>
        <div className="w-[100%]  h-[10%] bg-[#0F141E]"></div>
        <div className="w-[100%] h-[45%] bg-[#0F141E] rounded-tl-[45px] flex justify-center items-center"></div>
        <Cards data={data[1]}></Cards>
      </div>
      <div className="flex absolute justify-center items-center top-1/2 left-1/2">
        {circlesData.map((value, index) => (
          <Circle key={index} classname={value.classname}></Circle>
        ))}
        <div className="flex absolute z-20 justify-center items-center size-[140px] gap-[15.71px]">
          <img src="/logo1.png"></img>
          <img src="/logo2.png"></img>
        </div>
      </div>
    </div>
  );
}

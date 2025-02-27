import Image from "next/image";
import { Circle, CardMoon, CardSun, Input } from "@/components";
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
  return (
    <div className="flex relative w-full h-screen overflow-hidden">
      <div className="absolute pt-[40px] pl-[40px]">
        <Input />
      </div>
      <div className="w-1/2 h-full bg-[#f3f4f6]  rounded-tl-[50px] rounded-bl-[50px]  flex justify-center items-center">
        <CardSun></CardSun>
      </div>
      <div className="w-1/2 h-full bg-[#f3f4f6] rounded-tr-[50px] flex flex-col justify-center items-center">
        <div className=" w-[100%] h-[45%] bg-[#0F141E] rounded-tr-[50px] rounded-bl-[45px] flex justify-center items-center"></div>
        <div className="w-[100%]  h-[10%] bg-[#0F141E]"></div>
        <div className="w-[100%] h-[45%] bg-[#0F141E] rounded-tl-[45px] flex justify-center items-center"></div>
        <CardMoon></CardMoon>
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

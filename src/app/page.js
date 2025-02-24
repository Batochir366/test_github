import Image from "next/image";
import { Circle } from "@/components";
export default function Home() {
  return (
    <div className=" bg-gray-400 relative">
      {/* <div className="flex relative -z-10">
        <div className="w-[800px] h-[1200px] bg-[#F3F4F6] rounded-[0px 50px 0px 50px]"></div>
        <div className="w-[800px] h-[1200px] bg-[#0F141E] rounded-[0px 50px 0px 50px]"></div> */}
      <div className="bg-transparent flex justify-center items-center">
        <Circle className="z-10" width={"940px"}></Circle>
        <Circle className="z-30" width={"540px"}></Circle>
        <Circle className="z-30" width={"340px"}></Circle>
        <Circle className="z-40" width={"140px"}></Circle>
      </div>
    </div>
    // </div>
  );
}

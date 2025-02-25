import Image from "next/image";
import { Circle, Card } from "@/components";
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
    classname: "size-[140px] rounded-[140px]",
  },
];
export default function Home() {
  return (
    <div className="flex relative w-full h-screen px-10 bg-green-500 py-10">
      <div className="w-1/2 h-full bg-[#F3F4F6] rounded-[50px] flex justify-center items-center">
        <Card></Card>
      </div>
      <div className="w-1/2 h-full bg-[#0F141E] rounded-[50px] flex justify-center items-center">
        <Card></Card>
      </div>
      <div className="flex absolute justify-center items-center top-1/2 left-1/2">
        {circlesData.map((value, index) => (
          <Circle key={index} classname={value.classname}></Circle>
        ))}
      </div>
    </div>
  );
}

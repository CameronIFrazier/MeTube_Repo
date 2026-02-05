"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import VideoCard from "../components/VideoCard";
import Image from "next/image";

import defaultImage from "../images/default.png";

export default function MeTube() {
  return (
    <>
      {" "}
      <section className="w-full h-screen flex flex-row bg-[#181818] justify-start items-start overflow-y-hidden scrollbar-hide">
        <section className="flex flex-col items-start justify-start w-[10%] h-full overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent">
          {/* MeTube Icon + Title */}
          
          <div className="flex flex-row ml-2 items-center justify-start w-full p-1 mt-3">
            <Image src={defaultImage} alt="Default" width={25} height={25}  />
            <header className="pl-4"> MeTube</header>
          </div>
          <div className="flex flex-row ml-2 items-center text-xs justify-start hover:bg-[#3d3d3d] rounded-lg cursor-pointer w-full mt-4 p-1">
            <Image src={defaultImage} alt="Default" width={25} height={25} className="rounded-full"/>
            <header className="pl-4"> Home</header>
          </div>
          {/* THIS IS COPY AND PASTED ELEMENT BELOW */}
          <div className="flex flex-row ml-2 items-center text-xs justify-start hover:bg-[#3d3d3d] rounded-lg cursor-pointer w-full p-1">
            <Image src={defaultImage} alt="Default" width={25} height={25} className="rounded-full"/>
            <header className="pl-4"> Shorts</header>
          </div>
          
          
          <hr className="w-full border-t border-white mt-4"></hr>
          <div className="flex flex-row ml-2 items-center text-xs justify-start hover:bg-[#3d3d3d] rounded-lg cursor-pointer w-full p-2 mt-4">
            {/* SubScriptions */}
            <header className="font-bold"> Subscriptions</header>
          </div>
          <div className="flex flex-row ml-2 items-center text-xs justify-start hover:bg-[#3d3d3d] rounded-lg cursor-pointer w-full p-1">
            <Image src={defaultImage} alt="Default" width={25} height={25} className="rounded-full"/>
            <header className="pl-4"> Shorts</header>
          </div>
          <div className="flex flex-row ml-2 items-center text-xs justify-start hover:bg-[#3d3d3d] rounded-lg cursor-pointer w-full p-1">
            <Image src={defaultImage} alt="Default" width={25} height={25} className="rounded-full"/>
            <header className="pl-4"> Shorts</header>
          </div>
          <div className="flex flex-row ml-2 items-center text-xs justify-start hover:bg-[#3d3d3d] rounded-lg cursor-pointer w-full p-1">
            <Image src={defaultImage} alt="Default" width={25} height={25} className="rounded-full"/>
            <header className="pl-4"> Shorts</header>
          </div>
          <div className="flex flex-row ml-2 items-center text-xs justify-start hover:bg-[#3d3d3d] rounded-lg cursor-pointer w-full p-1">
            <Image src={defaultImage} alt="Default" width={25} height={25} className="rounded-full"/>
            <header className="pl-4"> Shorts</header>
          </div>
          <div className="flex flex-row ml-2 items-center text-xs justify-start hover:bg-[#3d3d3d] rounded-lg cursor-pointer w-full p-1">
            <Image src={defaultImage} alt="Default" width={25} height={25} className="rounded-full"/>
            <header className="pl-4"> Shorts</header>
          </div>
          <div className="flex flex-row ml-2 items-center text-xs justify-start hover:bg-[#3d3d3d] rounded-lg cursor-pointer w-full p-1">
            <Image src={defaultImage} alt="Default" width={25} height={25} className="rounded-full"/>
            <header className="pl-4"> Shorts</header>
          </div>
          <div className="flex flex-row ml-2 items-center text-xs justify-start hover:bg-[#3d3d3d] rounded-lg cursor-pointer w-full p-1">
            <Image src={defaultImage} alt="Default" width={25} height={25} className="rounded-full"/>
            <header className="pl-4"> Shorts</header>
          </div>
           <hr className="w-full border-t border-white mt-4"></hr>
           {/* You */}
          <div className="flex flex-row ml-2 items-center text-xs justify-start hover:bg-[#3d3d3d] rounded-lg cursor-pointer w-full p-2 mt-4">
            
            <header className="font-bold"> You</header>
          </div>
          <div className="flex flex-row ml-2 items-center text-xs justify-start hover:bg-[#3d3d3d] rounded-lg cursor-pointer w-full p-1">
            <Image src={defaultImage} alt="Default" width={25} height={25} className="rounded-full"/>
            <header className="pl-4"> Shorts</header>
          </div>
          <div className="flex flex-row ml-2 items-center text-xs justify-start hover:bg-[#3d3d3d] rounded-lg cursor-pointer w-full p-1">
            <Image src={defaultImage} alt="Default" width={25} height={25} className="rounded-full"/>
            <header className="pl-4"> Shorts</header>
          </div>
          <div className="flex flex-row ml-2 items-center text-xs justify-start hover:bg-[#3d3d3d] rounded-lg cursor-pointer w-full p-1">
            <Image src={defaultImage} alt="Default" width={25} height={25} className="rounded-full"/>
            <header className="pl-4"> Shorts</header>
          </div>
          <div className="flex flex-row ml-2 items-center text-xs justify-start hover:bg-[#3d3d3d] rounded-lg cursor-pointer w-full p-1">
            <Image src={defaultImage} alt="Default" width={25} height={25} className="rounded-full"/>
            <header className="pl-4"> Shorts</header>
          </div>
          <div className="flex flex-row ml-2 items-center text-xs justify-start hover:bg-[#3d3d3d] rounded-lg cursor-pointer w-full p-1">
            <Image src={defaultImage} alt="Default" width={25} height={25} className="rounded-full"/>
            <header className="pl-4"> Shorts</header>
          </div>
          <div className="flex flex-row ml-2 items-center text-xs justify-start hover:bg-[#3d3d3d] rounded-lg cursor-pointer w-full p-1">
            <Image src={defaultImage} alt="Default" width={25} height={25} className="rounded-full"/>
            <header className="pl-4"> Shorts</header>
          </div>
          <hr className="w-full border-t border-white mt-4"></hr>
          {/* Explore */}
          <div className="flex flex-row ml-2 items-center text-xs justify-start hover:bg-[#3d3d3d] rounded-lg cursor-pointer w-full p-2 mt-4">
            
            <header className="font-bold"> Explore</header>
          </div>
          <div className="flex flex-row ml-2 items-center text-xs justify-start hover:bg-[#3d3d3d] rounded-lg cursor-pointer w-full p-1">
            <Image src={defaultImage} alt="Default" width={25} height={25} className="rounded-full"/>
            <header className="pl-4"> Shorts</header>
          </div>
          <div className="flex flex-row ml-2 items-center text-xs justify-start hover:bg-[#3d3d3d] rounded-lg cursor-pointer w-full p-1">
            <Image src={defaultImage} alt="Default" width={25} height={25} className="rounded-full"/>
            <header className="pl-4"> Shorts</header>
          </div>
          <div className="flex flex-row ml-2 items-center text-xs justify-start hover:bg-[#3d3d3d] rounded-lg cursor-pointer w-full p-1">
            <Image src={defaultImage} alt="Default" width={25} height={25} className="rounded-full"/>
            <header className="pl-4"> Shorts</header>
          </div>
          <div className="flex flex-row ml-2 items-center text-xs justify-start hover:bg-[#3d3d3d] rounded-lg cursor-pointer w-full p-1">
            <Image src={defaultImage} alt="Default" width={25} height={25} className="rounded-full"/>
            <header className="pl-4"> Shorts</header>
          </div>
          <hr className="w-full border-t border-white mt-4"></hr>
          <div className="flex flex-row ml-2 items-center text-xs justify-start hover:bg-[#3d3d3d] rounded-lg cursor-pointer w-full p-2 mt-4">
            
            <header className="font-bold"> More Than MeTube</header>
          </div>
          <div className="flex flex-row ml-2 items-center text-xs justify-start hover:bg-[#3d3d3d] rounded-lg cursor-pointer w-full p-1">
            <Image src={defaultImage} alt="Default" width={25} height={25} className="rounded-full"/>
            <header className="pl-4"> Shorts</header>
          </div>
          <div className="flex flex-row ml-2 items-center text-xs justify-start hover:bg-[#3d3d3d] rounded-lg cursor-pointer w-full p-1">
            <Image src={defaultImage} alt="Default" width={25} height={25} className="rounded-full"/>
            <header className="pl-4"> Shorts</header>
          </div>
          <div className="flex flex-row ml-2 items-center text-xs justify-start hover:bg-[#3d3d3d] rounded-lg cursor-pointer w-full p-1">
            <Image src={defaultImage} alt="Default" width={25} height={25} className="rounded-full"/>
            <header className="pl-4"> Shorts</header>
          </div>
          <div className="flex flex-row ml-2 items-center text-xs justify-start hover:bg-[#3d3d3d] rounded-lg cursor-pointer w-full p-1">
            <Image src={defaultImage} alt="Default" width={25} height={25} className="rounded-full"/>
            <header className="pl-4"> Shorts</header>
          </div>
          <hr className="w-full border-t border-white mt-4"></hr>
          <div className="flex flex-row ml-2 items-center text-xs justify-start hover:bg-[#3d3d3d] rounded-lg cursor-pointer w-full p-1 pt-3">
            <Image src={defaultImage} alt="Default" width={25} height={25} className="rounded-full"/>
            <header className="pl-4"> Shorts</header>
          </div>
          <div className="flex flex-row ml-2 items-center text-xs justify-start hover:bg-[#3d3d3d] rounded-lg cursor-pointer w-full p-1">
            <Image src={defaultImage} alt="Default" width={25} height={25} className="rounded-full"/>
            <header className="pl-4"> Shorts</header>
          </div>
          <div className="flex flex-row ml-2 items-center text-xs justify-start hover:bg-[#3d3d3d] rounded-lg cursor-pointer w-full p-1">
            <Image src={defaultImage} alt="Default" width={25} height={25} className="rounded-full"/>
            <header className="pl-4"> Shorts</header>
          </div>
          <div className="flex flex-row ml-2 items-center text-xs justify-start hover:bg-[#3d3d3d] rounded-lg cursor-pointer w-full p-1">
            <Image src={defaultImage} alt="Default" width={25} height={25} className="rounded-full"/>
            <header className="pl-4"> Shorts</header>
          </div>
          <hr className="w-full border-t border-white mt-4"></hr>
          
          <div className="flex flex-row ml-2 items-center text-xs justify-start  rounded-lg cursor-pointer w-full p-1 pt-3">
            <p className="text-[8px]"> About Press Copyright Contact us Creators Advertise Developers</p>
          </div>
          <div className="flex flex-row ml-2 items-center text-xs justify-start  rounded-lg cursor-pointer w-full p-1">
            <p className="text-[8px]"> Terms Privacy Policy & Safety How MeTube works Test new features NFL Sunday Ticket</p>
          </div>
        </section>
      </section>
    </>
  );
}

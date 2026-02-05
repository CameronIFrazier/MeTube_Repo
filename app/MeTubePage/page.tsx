"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import VideoCard from "../components/VideoCard";
import Image from "next/image";

import ScrollSection from "../components/ScrollSection";
import defaultImage from "../images/default.png";

export default function MeTube() {
  return (
    <>
      {" "}
      <section className="w-full h-screen flex flex-row bg-[#181818] justify-start items-start overflow-y-auto scrollbar-hide">
        {/* ScrollSection Component */}
        <ScrollSection /> 
        <section className="flex flex-col w-full">
        <section className="flex flex-row w-full bg-[#181818] items-center justify-center"> 
          {/* Inster Search Bar Element Eventually */}
          <div className="flex flex-row items-center justify-center ml-auto ">Search Bar will go here
          <Image src={defaultImage} alt="Default" width={25} height={25}  />
          </div>
          <div className="ml-auto flex flex-row items-center justify-center pr-4">
          <button> + Create </button>
          <Image src={defaultImage} alt="Default" width={25} height={25}  />
          </div>
          
        </section>
        <section className="grid grid-cols-3 items-center justify-center ml-8 mt-8 mr-8 gap-4">
            <VideoCard
        thumbnail="https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg" //
        title="Never Gonna Give You Up"
        channel="RickAstleyVEVO"
        views="1.2M"
        link = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      />
       <VideoCard
        thumbnail="https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg" //
        title="Never Gonna Give You Up"
        channel="RickAstleyVEVO"
        views="1.2M"
        link = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      />
       <VideoCard
        thumbnail="https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg" //
        title="Never Gonna Give You Up"
        channel="RickAstleyVEVO"
        views="1.2M"
        link = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      />
       <VideoCard
        thumbnail="https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg" //
        title="Never Gonna Give You Up"
        channel="RickAstleyVEVO"
        views="1.2M"
        link = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      />
       <VideoCard
        thumbnail="https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg" //
        title="Never Gonna Give You Up"
        channel="RickAstleyVEVO"
        views="1.2M"
        link = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      />
       <VideoCard
        thumbnail="https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg" //
        title="Never Gonna Give You Up"
        channel="RickAstleyVEVO"
        views="1.2M"
        link = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      />
       <VideoCard
        thumbnail="https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg" //
        title="Never Gonna Give You Up"
        channel="RickAstleyVEVO"
        views="1.2M"
        link = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      />
       <VideoCard
        thumbnail="https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg" //
        title="Never Gonna Give You Up"
        channel="RickAstleyVEVO"
        views="1.2M"
        link = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      />
       <VideoCard
        thumbnail="https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg" //
        title="Never Gonna Give You Up"
        channel="RickAstleyVEVO"
        views="1.2M"
        link = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      />
       <VideoCard
        thumbnail="https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg" //
        title="Never Gonna Give You Up"
        channel="RickAstleyVEVO"
        views="1.2M"
        link = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      />
          </section>
        </section>
       
      </section>
    </>
  );
}

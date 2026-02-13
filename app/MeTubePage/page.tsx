"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import VideoCard from "../components/VideoCard";
import Image from "next/image";

import ScrollSection from "../components/ScrollSection";
import defaultImage from "../images/default.png";
import SearchBarArea from "../components/SearchBarArea";
export default function MeTube() {
  return (
    <>
      {" "}
      <section className="w-full h-screen flex flex-col bg-bg justify-start items-start overflow-y-auto scrollbar-hide">
        {/* ScrollSection Component */}
        <SearchBarArea />
        <div className="flex flex-row">
          <ScrollSection />
          <section className="flex flex-col w-full">
            <section className="flex flex-row w-full bg-[#181818] items-center justify-center"></section>
            <section className="grid grid-cols-3 items-center justify-center ml-8 mr-8 gap-4">
              <VideoCard
                id={1}
                thumbnail="https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
                title="Never Gonna Give You Up"
                channel="RickAstleyVEVO"
                views="1.2M"
                pfp= "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
              />
              <VideoCard
                id={1}
                thumbnail="https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
                title="Never Gonna Give You Up"
                channel="RickAstleyVEVO"
                views="1.2M"
                pfp= "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
              />
              <VideoCard
                id={1}
                thumbnail="https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
                title="Never Gonna Give You Up"
                channel="RickAstleyVEVO"
                views="1.2M"
                pfp= "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
              />
              <VideoCard
                id={1}
                thumbnail="https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
                title="Never Gonna Give You Up"
                channel="RickAstleyVEVO"
                views="1.2M"
                pfp= "https://metubebucketcf.s3.us-east-2.amazonaws.com/userpfp.jpg"
              />
            </section>
          </section>
        </div>
      </section>
    </>
  );
}

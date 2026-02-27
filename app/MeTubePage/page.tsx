"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import VideoCard from "../components/VideoCard";
import Image from "next/image";

import ScrollSection from "../components/ScrollSection";
import defaultImage from "../images/default.png";
import SearchBarArea from "../components/SearchBarArea";
import { useRouter } from "next/navigation";
export default function MeTube() {
  return (
    
    <>
    
      {" "}
      <section className="w-full h-screen flex flex-col bg-bg justify-start items-start overflow-y-auto scrollbar-hide">
        {/* ScrollSection Component */}
        <SearchBarArea />
        <div className="flex flex-row">
          <div className="w-[10%]">
          <ScrollSection /> 
          </div>
          <section className="flex flex-col w-full">
            <section className="flex flex-row w-full bg-bg items-center justify-center"></section>
            <section className="grid grid-cols-3 items-center justify-center ml-8 mr-8 gap-4" >
              <VideoCard
                id={1}
                thumbnail="https://metubebucketcf.s3.us-east-2.amazonaws.com/mrc-thumbnail.png"
                title="Beginner Projects of Mine"
                channel="Cam"
                views="450,145"
                pfp= "https://metubebucketcf.s3.us-east-2.amazonaws.com/userpfp.jpg"
              />
              <VideoCard
                id={2}
                thumbnail="https://metubebucketcf.s3.us-east-2.amazonaws.com/IMG_1098.jpg"
                title="Concert I went to on my Honeymoon"
                channel="Cam"
                views="900,000"
                pfp= "https://metubebucketcf.s3.us-east-2.amazonaws.com/userpfp.jpg"
              />
              <VideoCard
                id={3}
                thumbnail="https://metubebucketcf.s3.us-east-2.amazonaws.com/expense-tracker-demo-thumbnail.png"
                title="My expense tracker app"
                channel="Cam"
                views="33,782"
                pfp= "https://metubebucketcf.s3.us-east-2.amazonaws.com/userpfp.jpg"
              />
              <VideoCard
                id={4}
                thumbnail="https://metubebucketcf.s3.us-east-2.amazonaws.com/leftovers-demo-thumbnail.png"
                title="My Full stack social media app"
                channel="Cam"
                views="1,000,000"
                pfp= "https://metubebucketcf.s3.us-east-2.amazonaws.com/userpfp.jpg"
              />
              <VideoCard
                id={5}
                thumbnail="https://metubebucketcf.s3.us-east-2.amazonaws.com/watergate-demo-thumbnail.png"
                title="Full Stack Banking app"
                channel="Cam"
                views="63,597"
                pfp= "https://metubebucketcf.s3.us-east-2.amazonaws.com/userpfp.jpg"
              />
              
            </section>
          </section>
        </div>
      </section>
    </>
  );
}

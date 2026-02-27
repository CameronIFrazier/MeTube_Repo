// VideoCard.jsx
import React from "react";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import VideoCard from "../components/VideoCard";
import { useRouter } from "next/navigation";
import Image from "next/image";
import defaultImage from "../images/default.png";
//add link to videos as prop and make sure videos link to channel via pfp pick click
export default function ScrollSection() {
  const router = useRouter();
  return (
    <>
      {/* scrolbar css doesnt work  */}
      <section className="flex flex-col items-start justify-start w-full h-full overflow-y-auto overflow-x-hidden scrollbar-none">
        {" "}
        {/* MeTube Icon + Title */}
        <div className="flex flex-row ml-2 items-center text-xs justify-start hover:bg-[#3d3d3d] rounded-lg cursor-pointer w-full p-1" onClick={() => router.push("/")}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 21V10.08l8-6.96 8 6.96V21h-6v-6h-4v6H4z" />
          </svg>
          <header className="pl-4"> Home</header>
        </div>
        {/* THIS IS COPY AND PASTED ELEMENT BELOW */}
        <div className="flex flex-row ml-2 items-center text-xs justify-start hover:bg-[#3d3d3d] rounded-lg cursor-pointer w-full p-1">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z" />
          </svg>
          <header className="pl-4"> Shorts</header>
        </div>
        <hr className="w-full border-t border-white mt-4"></hr>
        <div className="flex flex-row ml-2 items-center text-xs justify-start  rounded-lg cursor-pointer w-full p-2 mt-4">
          {/* SubScriptions */}
          <header className="font-bold"> Subscriptions</header>
        </div>
        <div className="flex flex-row ml-2 items-center text-xs justify-start hover:bg-[#3d3d3d] rounded-lg cursor-pointer w-full p-1" onClick={() => router.push("/Cam")}>
          <img
            src={"https://metubebucketcf.s3.us-east-2.amazonaws.com/userpfp.jpg"}
            alt="Default"
            width={25}
            height={25}
            className="rounded-full"
          />
          <header className="pl-4"> Cam</header>
        </div>
       
        
        <hr className="w-full border-t border-white mt-4"></hr>
        {/* You */}
        <div className="flex flex-row ml-2 items-center text-xs justify-start  rounded-lg cursor-pointer w-full p-2 mt-4">
          <header className="font-bold"> Me</header>
        </div>
        <div className="flex flex-row ml-2 items-center text-xs justify-start hover:bg-[#3d3d3d] rounded-lg cursor-pointer w-full p-1">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            <path d="M4 12H2m3.5-6.5L3.5 3.5" />
          </svg>
          <header className="pl-4"> History</header>
        </div>
        <div className="flex flex-row ml-2 items-center text-xs justify-start hover:bg-[#3d3d3d] rounded-lg cursor-pointer w-full p-1">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22 7H2v1h20V7zm-9 5H2v-1h11v1zm0 4H2v-1h11v1zm2-7v8l6-4-6-4z" />
          </svg>
          <header className="pl-4"> Playlists </header>
        </div>
        <div className="flex flex-row ml-2 items-center text-xs justify-start hover:bg-[#3d3d3d] rounded-lg cursor-pointer w-full p-1">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3.67c-4.58 0-8.33 3.75-8.33 8.33s3.75 8.33 8.33 8.33 8.33-3.75 8.33-8.33S16.58 3.67 12 3.67zm3.5 11.83l-4.33-2.67v-5h1.25v4.34l3.75 2.25-.67 1.08z" />
          </svg>
          <header className="pl-4"> Watch Later</header>
        </div>
        <div className="flex flex-row ml-2 items-center text-xs justify-start hover:bg-[#3d3d3d] rounded-lg cursor-pointer w-full p-1">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z" />
          </svg>
          <header className="pl-4"> Liked Videos </header>
        </div>
        <div className="flex flex-row ml-2 items-center text-xs justify-start hover:bg-[#3d3d3d] rounded-lg cursor-pointer w-full p-1">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.4,5.6v12.8H5.6V5.6H18.4 M19,4H5C4.45,4,4,4.45,4,5v14c0,0.55,0.45,1,1,1h14c0.55,0,1-0.45,1-1V5 C20,4.45,19.55,4,19,4L19,4z" />
            <path d="M9.5 9.5l5.5 2.5-5.5 2.5V9.5z" />
          </svg>
          <header className="pl-4"> Your Videos</header>
        </div>
        <div className="flex flex-row ml-2 items-center text-xs justify-start hover:bg-[#3d3d3d] rounded-lg cursor-pointer w-full p-1">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17 18v1H6v-1h11zm-.5-6.6-.7-.7-3.8 3.7V4h-1v10.4l-3.8-3.8-.7.7 5 5 5-4.9z" />
          </svg>
          <header className="pl-4"> Downloads</header>
        </div>
        <hr className="w-full border-t border-white mt-4"></hr>
        {/* Explore */}
        <div className="flex flex-row ml-2 items-center text-xs justify-start rounded-lg cursor-pointer w-full p-2 mt-4">
          <header className="font-bold"> Explore</header>
        </div>
        <div className="flex flex-row ml-2 items-center text-xs justify-start hover:bg-[#3d3d3d] rounded-lg cursor-pointer w-full p-1">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
          <header className="pl-4"> Shopping</header>
        </div>
        <div className="flex flex-row ml-2 items-center text-xs justify-start hover:bg-[#3d3d3d] rounded-lg cursor-pointer w-full p-1">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 4v9.38c-.73-.84-1.8-1.38-3-1.38-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V8h6V4h-7zM9 19c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm9-12h-5V5h5v2z" />
          </svg>
          <header className="pl-4"> Music </header>
        </div>
        <div className="flex flex-row ml-2 items-center text-xs justify-start hover:bg-[#3d3d3d] rounded-lg cursor-pointer w-full p-1">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z" />
          </svg>
          <header className="pl-4"> Music and Tv</header>
        </div>
        <hr className="w-full border-t border-white mt-4"></hr>
        <div className="flex flex-row ml-2 items-center text-xs justify-start rounded-lg cursor-pointer w-full p-2 mt-4">
          <header className="font-bold"> More Than MeTube</header>
        </div>
        <div className="flex flex-row ml-2 items-center text-xs justify-start hover:bg-[#3d3d3d] rounded-lg cursor-pointer w-full p-1">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="#FF0000" />
            <path d="M10 8.5v7l5.5-3.5L10 8.5z" fill="white" />
          </svg>
          <header className="pl-4"> MyTube Studio</header>
        </div>
        <div className="flex flex-row ml-2 items-center text-xs justify-start hover:bg-[#3d3d3d] rounded-lg cursor-pointer w-full p-1">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="6" width="20" height="12" rx="2" fill="#FF0000" />
            <path d="M10 10v4l3.5-2L10 10z" fill="white" />
          </svg>
          <header className="pl-4"> MyTube Tv</header>
        </div>
        <div className="flex flex-row ml-2 items-center text-xs justify-start hover:bg-[#3d3d3d] rounded-lg cursor-pointer w-full p-1">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="18" height="18" rx="4" fill="#FF0000" />
            <path d="M10 9v6l5-3-5-3z" fill="white" />
          </svg>
          <header className="pl-4"> MyTube Kids</header>
        </div>
        <hr className="w-full border-t border-white mt-4"></hr>
        <div className="flex flex-row ml-2 items-center text-xs justify-start hover:bg-[#3d3d3d] rounded-lg cursor-pointer w-full p-1 pt-3">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94L14.4 2.81c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
          </svg>
          <header className="pl-4"> Settings</header>
        </div>
        <div className="flex flex-row ml-2 items-center text-xs justify-start hover:bg-[#3d3d3d] rounded-lg cursor-pointer w-full p-1">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6z" />
          </svg>
          <header className="pl-4"> Report History</header>
        </div>
        <div className="flex flex-row ml-2 items-center text-xs justify-start hover:bg-[#3d3d3d] rounded-lg cursor-pointer w-full p-1">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
          </svg>
          <header className="pl-4"> Help</header>
        </div>
        <div className="flex flex-row ml-2 items-center text-xs justify-start hover:bg-[#3d3d3d] rounded-lg cursor-pointer w-full p-1">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z" />
          </svg>
          <header className="pl-4"> Send Feedback </header>
        </div>
        <hr className="w-full border-t border-white mt-4"></hr>
        <div className="flex flex-row ml-2 items-center text-xs justify-start  rounded-lg cursor-pointer w-full p-1 pt-3">
          <p className="text-[8px]">
            {" "}
            About Press Copyright Contact us Creators Advertise Developers
          </p>
        </div>
        <div className="flex flex-row ml-2 items-center text-xs justify-start  rounded-lg cursor-pointer w-full p-1">
          <p className="text-[8px]">
            {" "}
            Terms Privacy Policy & Safety How MeTube works Test new features NFL
            Sunday Ticket
          </p>
        </div>
      </section>
    </>
  );
}

"use client";

import { useRouter } from "next/router";
import SearchBarArea from "../components/SearchBarArea";
import VideoCard from "../components/VideoCard";
export default function CamPage() {
    
  return (
    <div className="bg-[#212121] w-full min-h-screen overflow-y-auto flex flex-col items-center sticky top-0 z-50">
        {/* Search Bar Area */}
        <SearchBarArea />
        <div className="w-full h-[200px] bg-gradient-to-br from-indigo-500 to-purple-600"></div>
{/* Channel Info Container */}
        <div className="w-[60%] mx-auto px-6 pt-6">
        <div className="flex gap-6 items-start -mt-[60px] relative">
           {/* PFP */}
            <div className="w-40 h-40 rounded-full border-4 border-[#0f0f0f] flex-shrink-0 flex items-center justify-center text-6xl font-bold text-white">
                <img src="https://metubebucketcf.s3.us-east-2.amazonaws.com/userpfp.jpg" className="w-38 h-38 rounded-full"></img>
            </div>
            
           {/* Profile Info */}
            <div className="flex-1 pt-20">
                <h1 className="text-4xl font-semibold mb-2">Cameron Frazier CEO</h1>
                <div className="text-gray-400 text-sm mb-3">@Cam</div>
                <div className="flex gap-2 text-gray-400 text-sm mb-4 flex-wrap">
                    <span>8 Billion subscribers</span>
                    <span className="text-gray-600">•</span>
                    <span>1 post</span>
                    <span className="text-gray-600">•</span>
                    <span>Channel created on July 14, 2003</span>
                </div>
                <div className="text-gray-100 text-sm leading-relaxed mb-4 max-w-[800px]">
                    My Channel, my platform, all about me.
                </div>
                <div className="flex gap-3 items-center">
                    <button className="bg-gray-100 text-[#0f0f0f] px-4 py-2.5 rounded-full font-semibold text-sm cursor-pointer flex items-center gap-2 hover:bg-[#d9d9d9] transition">
                        <span>Subscribe</span>
                    </button>
                    <button className="bg-[#272727] text-gray-100 px-4 py-2.5 rounded-full text-sm cursor-pointer hover:bg-[#3f3f3f] transition">
                        Join
                    </button>
                    <button className="bg-[#272727] text-gray-100 px-4 py-2.5 rounded-full text-sm cursor-pointer hover:bg-[#3f3f3f] transition">
                        Share
                    </button>
                </div>
            </div>

            {/* Channel Tabs */}

        
        </div>
        <div className=" border-b border-gray-700 mt-8">
        <div className="flex gap-8 overflow-x-auto">
            <div className="tab py-4 text-muted " >
                About Me
            </div>
            
            
        </div>
    </div>
    <p className="pt-4">Hello, my names' Cameron, and welcome to MyTube. Allow me to introduce myself! I'm a husband, gamer, and web developer. I'm trying to step into the industy, hence why I made this website. </p>
    <div className=" border-b border-gray-700 mt-8">
        <div className="flex gap-8 overflow-x-auto">
            
            <div className="tab py-4 text-muted " >
                Content
            </div>
            
        </div>
    </div>
    <section className="grid grid-cols-3 w-full items-center justify-center pb-8 pt-4">
                  <VideoCard
                    id={1}
                    thumbnail="https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
                    title="Beginner Projects of Mine"
                    channel="Cam"
                    views="40"
                    pfp= "https://metubebucketcf.s3.us-east-2.amazonaws.com/userpfp.jpg"
                  />
                  
                </section>
    </div>
   
    </div>
    
  );
}
//needs links to other socials, needs resume view
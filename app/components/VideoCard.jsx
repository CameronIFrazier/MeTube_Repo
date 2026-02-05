
import React from "react";
import { useRouter } from "next/navigation";


export default function VideoCard({ thumbnail, title, channel, views, link }) {
  const router = useRouter();
  //create a function to push router and link with video title
  return (
    <div className="w-full  cursor-pointer">
      {/* Thumbnail */}
      <div className="relative w-full aspect-[16/9]  overflow-hidden rounded-lg">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          onClick={() => router.push(`/VideoPage/${title}`)} // create a function to push router and link with video title
        />
      </div>

      {/* Video Info */}
      <div className="flex mt-3">
        {/* Channel Avatar Placeholder */}
        <div className="w-10 h-10 rounded-full bg-gray-300 flex-shrink-0"></div>

        <div className="ml-3">
          {/* Title */}
          <h3 className="text-sm font-semibold text-gray-900 line-clamp-2">
            {title}
          </h3>
          
          {/* Channel Name */}
          <p className="text-xs text-gray-500">{channel}</p>

          {/* Views */}
          <p className="text-xs text-gray-500">{views} views</p>
        </div>
      </div>
    </div>
  );
}

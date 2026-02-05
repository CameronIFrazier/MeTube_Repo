// VideoCard.jsx
import React from "react";

export default function VideoCard({ thumbnail, title, channel, views }) {
  return (
    <div className="w-full max-w-xs cursor-pointer">
      {/* Thumbnail */}
      <div className="relative w-full h-48 overflow-hidden rounded-lg">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
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

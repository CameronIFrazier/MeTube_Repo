import React from "react";
import { useRouter } from "next/navigation";

export default function VideoCard({ id, thumbnail, title, channel, views }) {
  const router = useRouter();

  return (
    <div className="w-full cursor-pointer">
      {/* Thumbnail */}
      <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          onClick={() => router.push(`/VideoPage/${id}`)} // use id
        />
      </div>

      {/* Video Info */}
      <div className="flex mt-3">
        <div className="w-10 h-10 rounded-full bg-gray-300 flex-shrink-0"></div>
        <div className="ml-3">
          <h3 className="text-sm font-semibold text-gray-900 line-clamp-2">
            {title}
          </h3>
          <p className="text-xs text-gray-500">{channel}</p>
          <p className="text-xs text-gray-500">{views} views</p>
        </div>
      </div>
    </div>
  );
}

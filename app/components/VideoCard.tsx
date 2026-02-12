import React from "react";
import { useRouter } from "next/navigation";

type VideoCardProps = {
  id: number | string;
  thumbnail: string;
  title: string;
  channel: string;
  views: string | number;
  pfp: string;
};

export default function VideoCard({ 
  id, 
  thumbnail, 
  title, 
  channel, 
  views, 
  pfp 
}: VideoCardProps) {
  const router = useRouter();

  return (
    <div className="w-full cursor-pointer flex flex-col">
      {/* Thumbnail */}
      <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          onClick={() => router.push(`/VideoPage/${id}`)}
        />
      </div>

      {/* Video Info */}
      <div className="flex mt-3 flex-row items-center">
        <div className="w-10 h-10 rounded-full bg-gray-300 flex-shrink-0">
          <img
            src={pfp}
            alt={`${channel} avatar`}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 rounded-full"
          />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-semibold text-gray-900">
            {title}
          </h3>
          <p className="text-xs text-gray-500">{channel}</p>
          <p className="text-xs text-gray-500">{views} views</p>
        </div>
      </div>
    </div>
  );
}
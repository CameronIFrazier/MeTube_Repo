"use client";

import { useParams } from "next/navigation";

export default function VideoPage(){
   const params = useParams();
  const videoTitle = params.title;

  // Fetch video data based on videoId or get it from context/state
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Video Title: {videoTitle}</h1>
      {/* Replace with your video player / thumbnail / info */}
    </div>
  );
};
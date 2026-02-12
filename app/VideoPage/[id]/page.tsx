"use client";

import SearchBarArea from "@/app/components/SearchBarArea";
import RecommendedVideoCard from "@/app/components/RecommendedVideoCard";
import Comments from "@/app/components/Comments";
import { useParams, useRouter } from "next/navigation";
import { useState, useRef } from "react";
import {
  ThumbsUp,
  ThumbsDown,
  Share2,
  BookmarkPlus,
  MoreVertical,
} from "lucide-react";

type Video = {
  title: string;
  s3link: string;
  thumbnail: string;
  channel?: string;
  views?: number;
  uploadDate?: string;
  description?: string;
  pfp?: string;
};

export default function VideoPage() {
  const params = useParams();
  const router = useRouter();
  const videoIdParam = params?.id;
  const videoId = Array.isArray(videoIdParam) ? videoIdParam[0] : videoIdParam;
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  
  const mainVideoRef = useRef<HTMLVideoElement>(null);
  const ambientVideoRef = useRef<HTMLVideoElement>(null);

  const videos: Record<string, Video> = {
    "1": {
      title: "Never Gonna Give You Up",
      s3link:
        "https://metubebucketcf.s3.us-east-2.amazonaws.com/fortnite-clip.mp4",
      thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
      channel: "RickAstleyVEVO",
      views: 1200000,
      uploadDate: "2 weeks ago",
      description: "Default Description for video 1",
      pfp: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    "2": {
      title: "Best Fortnite Clip Ever",
      s3link:
        "https://metubebucketcf.s3.us-east-2.amazonaws.com/fortnite-clip-2.mp4",
      thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
      channel: "FortniteClips",
      views: 950000,
      uploadDate: "1 month ago",
      description: "Vid 2 Description",
      pfp: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    "3": {
      title: "Cool Coding Tutorial",
      s3link:
        "https://metubebucketcf.s3.us-east-2.amazonaws.com/coding-tutorial.mp4",
      thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
      channel: "CodeMaster",
      views: 50000,
      uploadDate: "3 weeks ago",
      description: "...",
      pfp: "https://randomuser.me/api/portraits/men/3.jpg",
    },
  };

  const relatedVideos = Object.entries(videos)
    .filter(([id]) => id !== videoId)
    .map(([id, video]) => ({ id, ...video }));

  const video = videoId ? videos[videoId] : null;

  const syncVideos = (event: React.SyntheticEvent<HTMLVideoElement>) => {
    const mainVideo = mainVideoRef.current;
    const ambientVideo = ambientVideoRef.current;
    
    if (!mainVideo || !ambientVideo) return;

    if (event.type === 'play') {
      ambientVideo.play();
    } else if (event.type === 'pause') {
      ambientVideo.pause();
    } else if (event.type === 'timeupdate') {
      // Keep videos in sync
      if (Math.abs(ambientVideo.currentTime - mainVideo.currentTime) > 0.3) {
        ambientVideo.currentTime = mainVideo.currentTime;
      }
    } else if (event.type === 'seeked') {
      ambientVideo.currentTime = mainVideo.currentTime;
    }
  };

  if (!video) {
    return (
      <div className="flex items-center justify-center h-screen  text-white bg-blue-500">
        <div className="text-center">
          <p className="text-2xl font-bold mb-4">Video not found</p>
          <button
            onClick={() => router.push("/")}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="text-white min-h-screen w-full bg-[#181818] flex flex-col overflow-x-hidden">
      {/* // search bar */}
      <SearchBarArea></SearchBarArea>
      {/* bg-[#181818] */}
      <div className=" ml-8 flex flex-row w-full">
        {/* Main Content */}
        <div className="flex-1 max-w-[72%]">
          {/* Video Player */}
          <div className="relative bg-gray-900 rounded-xl mb-6">
            {/* Ambient glow */}
            <div className="absolute inset-0 scale-100 blur-3xl opacity-50">
              <video
                ref={ambientVideoRef}
                src={video.s3link}
                muted
                loop
                className="w-full h-full object-cover"
              />
            </div>

            {/* Actual video */}
            <div className="relative aspect-video bg-black z-10">
              <video
                ref={mainVideoRef}
                src={video.s3link}
                controls
                autoPlay
                className="w-full h-full object-contain"
                onPlay={syncVideos}
                onPause={syncVideos}
                onTimeUpdate={syncVideos}
                onSeeked={syncVideos}
              />
            </div>
          </div>

          {/* Video Title */}
          <h1 className="text-xl font-bold mb-4 line-clamp-2">{video.title}</h1>

          {/* Video Stats & Actions */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-700 pb-4 mb-4 gap-4">
            <div className="flex items-center gap-4">
              {/* Channel Info */}
              <div className="flex items-center gap-3 flex-1">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center">
                  <img
          src={video.pfp}
          alt={video.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 rounded-full"
          
        />
                </div>
                <div>
                  <p className="font-semibold text-sm md:text-base hover:text-gray-300 cursor-pointer">
                    {video.channel}
                  </p>
                  <p className="text-xs text-gray-400">1.2M subscribers</p>
                </div>
              </div>

              {/* Subscribe Button */}
              <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-full transition">
                Subscribe
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 md:gap-1 flex-wrap">
              <button
                onClick={() => {
                  setLiked(!liked);
                  setDisliked(false);
                }}
                className="flex items-center gap-2 hover:bg-gray-800 px-3 py-2 rounded-full transition group"
              >
                <ThumbsUp
                  size={20}
                  className={liked ? "fill-white" : "group-hover:fill-gray-500"}
                />
                <span className="text-sm hidden md:inline">247K</span>
              </button>

              <div className="h-6 w-px bg-gray-700 hidden md:block"></div>

              <button
                onClick={() => {
                  setDisliked(!disliked);
                  setLiked(false);
                }}
                className="hover:bg-gray-800 px-3 py-2 rounded-full transition group"
              >
                <ThumbsDown
                  size={20}
                  className={
                    disliked ? "fill-white" : "group-hover:fill-gray-500"
                  }
                />
              </button>

              <button className="flex items-center gap-2 hover:bg-gray-800 px-3 py-2 rounded-full transition group">
                <Share2 size={20} className="group-hover:fill-gray-500" />
                <span className="text-sm hidden md:inline">Share</span>
              </button>

              <button className="flex items-center gap-2 hover:bg-gray-800 px-3 py-2 rounded-full transition group">
                <BookmarkPlus size={20} className="group-hover:fill-gray-500" />
                <span className="text-sm hidden md:inline">Save</span>
              </button>

              <button className="hover:bg-gray-800 p-2 rounded-full transition">
                <MoreVertical size={20} />
              </button>
            </div>
          </div>

          {/* Video Description */}
          <div className="bg-gray-900 rounded-lg p-4 mb-6">
            <div className="text-sm text-gray-300 mb-2">
              <span className="font-semibold">
                {video.views?.toLocaleString()} views
              </span>
              <span className="mx-2">•</span>
              <span>{video.uploadDate}</span>
            </div>

            <div
              className={`text-sm text-gray-300 ${
                isDescriptionExpanded ? "" : "line-clamp-3"
              }`}
            >
              {video.description}
            </div>

            <button
              onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
              className="text-sm font-semibold text-gray-300 hover:text-white mt-2 transition"
            >
              {isDescriptionExpanded ? "Show less" : "Show more"}
            </button>
          </div>

          {/* Comments Section */}
          <div className="mb-6">
            <Comments />
          </div>
        </div>
        <div className="w-[28%] flex flex-col gap-2">
          {relatedVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => router.push(`/VideoPage/${video.id}`)}
            >
              <RecommendedVideoCard
                title={video.title}
                channel={video.channel}
                views={video.views}
                thumbnail={video.thumbnail}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
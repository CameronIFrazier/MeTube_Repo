"use client";

import RecommendedVideoCard from "@/app/components/RecommendedVideoCard";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
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
};

export default function VideoPage() {
  const params = useParams();
  const router = useRouter();
  const videoIdParam = params?.id;
  const videoId = Array.isArray(videoIdParam) ? videoIdParam[0] : videoIdParam;
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const videos: Record<string, Video> = {
   "1": {
    title: "Never Gonna Give You Up",
    s3link:
      "https://metubebucketcf.s3.us-east-2.amazonaws.com/fortnite-clip.mp4",
    thumbnail:
      "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    channel: "RickAstleyVEVO",
    views: 1200000,
    uploadDate: "2 weeks ago",
    description: "Default Description for video 1",
  },
  "2": {
    title: "Best Fortnite Clip Ever",
    s3link:
      "https://metubebucketcf.s3.us-east-2.amazonaws.com/fortnite-clip-2.mp4",
    thumbnail:
      "https://metubebucketcf.s3.us-east-2.amazonaws.com/thumb2.jpg",
    channel: "FortniteClips",
    views: 950000,
    uploadDate: "1 month ago",
    description: "Vid 2 Description",
  },
  "3": {
    title: "Cool Coding Tutorial",
    s3link:
      "https://metubebucketcf.s3.us-east-2.amazonaws.com/coding-tutorial.mp4",
    thumbnail:
      "https://metubebucketcf.s3.us-east-2.amazonaws.com/thumb3.jpg",
    channel: "CodeMaster",
    views: 50000,
    uploadDate: "3 weeks ago",
    description: "...",
  },
  };

  const relatedVideos = Object.entries(videos)
    .filter(([id]) => id !== videoId)
    .map(([id, video]) => ({ id, ...video }));

  const video = videoId ? videos[videoId] : null;

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
      <div className="flex flex-colitems-center justify-center w-full pb-4 pt-4 bg-[#181818]">
        <div className="flex w-[450px] h-8 border border-gray-300 rounded-full overflow-hidden shadow-sm">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 px-4 py-2 text-gray-200 focus:outline-none"
          />

          <button className="bg-gray-100 px-4 flex items-center justify-center hover:bg-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* bg-[#181818] */}
      <div className=" ml-8 flex flex-row w-full">
        {/* Main Content */}
        <div className="flex-1 max-w-[72%]">
          {/* Video Player */}
          <div className="bg-gray-900 rounded-xl overflow-hidden mb-6 ">
            <div className="aspect-video bg-black">
              <video
                src={video.s3link}
                controls
                autoPlay
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Video Title */}
          <h1 className="text-xl font-bold mb-4 line-clamp-2">
            {video.title}
          </h1>

          {/* Video Stats & Actions */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-700 pb-4 mb-4 gap-4">
            <div className="flex items-center gap-4">
              {/* Channel Info */}
              <div className="flex items-center gap-3 flex-1">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold">
                    {video.channel?.charAt(0).toUpperCase()}
                  </span>
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
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-xl font-bold">Comments</h2>
            </div>

            {/* Comment Input */}
            <div className="flex gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex-shrink-0"></div>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className="w-full bg-transparent border-b border-gray-600 pb-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
                />
              </div>
            </div>

            {/* Sample Comments */}
            {[1, 2].map((i) => (
              <div key={i} className="flex gap-3 mb-6">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-semibold text-sm">User {i}</p>
                    <p className="text-xs text-gray-500">1 day ago</p>
                  </div>
                  <p className="text-sm text-gray-300 mb-2">
                    This video is absolutely amazing! Great content, keep it up!
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <button className="hover:text-white transition">👍</button>
                    <button className="hover:text-white transition">👎</button>
                    <button className="hover:text-white transition">
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            ))}
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

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
import {
  videos,
  getVideoById,
  videoUrl,
  thumbnailUrl,
  CHANNEL_PFP,
} from "@/app/data/videos";

function renderDescription(text: string) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(/(\n)/);

  return parts.map((part, i) => {
    if (part === "\n") return <br key={i} />;
    const segments = part.split(urlRegex);
    return (
      <span key={i}>
        {segments.map((seg, j) =>
          urlRegex.test(seg) ? (
            <a
              key={j}
              href={seg}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3ea6ff] hover:underline"
            >
              {seg}
            </a>
          ) : (
            seg
          )
        )}
      </span>
    );
  });
}

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

  const video = getVideoById(videoId);
  const relatedVideos = videos.filter((v) => v.id !== videoId);

  const syncVideos = (event: React.SyntheticEvent<HTMLVideoElement>) => {
    const mainVideo = mainVideoRef.current;
    const ambientVideo = ambientVideoRef.current;

    if (!mainVideo || !ambientVideo) return;

    if (event.type === "play") {
      ambientVideo.play();
    } else if (event.type === "pause") {
      ambientVideo.pause();
    } else if (event.type === "timeupdate") {
      if (Math.abs(ambientVideo.currentTime - mainVideo.currentTime) > 0.3) {
        ambientVideo.currentTime = mainVideo.currentTime;
      }
    } else if (event.type === "seeked") {
      ambientVideo.currentTime = mainVideo.currentTime;
    }
  };

  if (!video) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white bg-blue-500 overflow-y-auto">
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
    <div className="text-white min-h-screen w-full bg-[#181818] flex flex-col overflow-y-auto overflow-x-hidden">
      <SearchBarArea></SearchBarArea>
      <div className="ml-8 flex flex-row w-full flex-1">
        {/* Main Content */}
        <div className="flex-1 max-w-[72%]">
          {/* Video Player */}
          <div className="relative bg-gray-900 rounded-xl mb-6">
            <div className="absolute inset-0 scale-100 blur-2xl opacity-30">
              <video
                ref={ambientVideoRef}
                src={videoUrl(video)}
                muted
                loop
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative aspect-video bg-black z-10">
              <video
                ref={mainVideoRef}
                src={videoUrl(video)}
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
              <div className="flex items-center gap-3 flex-1">
                <div className="w-12 h-12 rounded-full flex items-center justify-center">
                  <img
                    src={CHANNEL_PFP}
                    alt={video.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 rounded-full"
                    onClick={() => router.push(`/Cam`)}
                  />
                </div>
                <div>
                  <p
                    className="font-semibold text-sm md:text-base hover:text-gray-300 cursor-pointer"
                    onClick={() => router.push(`/Cam`)}
                  >
                    {video.channel}
                  </p>
                  <p className="text-xs text-gray-400">1.2M subscribers</p>
                </div>
              </div>
              <button className="bg-lightbg hover:bg-hover text-white font-semibold px-4 py-2 rounded-full transition">
                Subscribe
              </button>
            </div>

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
                  className={disliked ? "fill-white" : "group-hover:fill-gray-500"}
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
              {/* H3 title inside description */}
              <h3 className="text-white font-semibold text-base mb-2">
                {video.title}
              </h3>

              {/* Description text with clickable links */}
              <p className="mb-3">
                {video.description && renderDescription(video.description)}
              </p>

              {/* Website link */}
              {video.website && (
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-gray-400">🔗</span>
                  <a
                    href={video.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#3ea6ff] hover:underline"
                  >
                    {video.website}
                  </a>
                </div>
              )}
            </div>

            <button
              onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
              className="text-sm font-semibold text-gray-300 hover:text-white mt-2 transition"
            >
              {isDescriptionExpanded ? "Show less" : "...more"}
            </button>
          </div>

          {/* Comments Section */}
          <div className="mb-6">
            <Comments />
          </div>
        </div>

        <div className="w-[20%] flex flex-col">
          {relatedVideos.map((related) => (
            <div
              key={related.id}
              onClick={() => router.push(`/VideoPage/${related.id}`)}
            >
              <div className="flex flex-row">
                <RecommendedVideoCard
                  title={related.title}
                  channel={related.channel}
                  views={related.views}
                  thumbnail={thumbnailUrl(related)}
                />
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
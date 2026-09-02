"use client";

import VideoCard from "../components/VideoCard";
import ScrollSection from "../components/ScrollSection";
import SearchBarArea from "../components/SearchBarArea";
import { videos, thumbnailUrl, CHANNEL_PFP } from "../data/videos";

export default function MeTube() {
  return (
    <>
      <section className="w-full h-screen flex flex-col bg-bg justify-start items-start overflow-y-auto scrollbar-hide">
        {/* ScrollSection Component */}
        <SearchBarArea />
        <div className="flex flex-row">
          <div className="w-[15%]">
            <ScrollSection />
          </div>
          <section className="flex flex-col w-full">
            <section className="flex flex-row w-full bg-bg items-center justify-center"></section>
            <section className="grid grid-cols-3 items-center justify-center ml-8 mr-8 gap-4">
              {videos.map((v) => (
                <VideoCard
                  key={v.id}
                  id={v.id}
                  thumbnail={thumbnailUrl(v)}
                  title={v.title}
                  channel={v.channel}
                  views={v.views.toLocaleString()}
                  pfp={CHANNEL_PFP}
                />
              ))}
            </section>
          </section>
        </div>
      </section>
    </>
  );
}
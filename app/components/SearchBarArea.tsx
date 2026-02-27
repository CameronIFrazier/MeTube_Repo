"use client";
import { useState } from "react";
import Image from "next/image";
import { Bell, Mic } from "lucide-react";
import ScrollSection from "./ScrollSection";

export default function SearchBarArea() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar — always in DOM, transition handles show/hide */}
      <div
        className={`fixed pt-2 left-0 top-0 h-full bg-[#181818] z-50 shadow-2xl overflow-y-auto overflow-x-hidden transition-all duration-300 ease-in-out ${
          sidebarOpen ? "w-[10%]" : "w-0"
        }`}
      >
        {/* Inner div stays full width so content doesn't squish */}
        <div className="w-64 ">
          <div className="flex flex-row items-center justify-start ml-4 gap-1 mb-2">
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-2 rounded-full hover:bg-[#3d3d3d] transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
              </svg>
            </button>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg"
              alt="MyTube Logo"
              width={30}
              height={20}
              className="ml-2"
            />
            <header>MyTube</header>
          </div>
          <ScrollSection />
        </div>
      </div>

      {/* Navbar */}
      <div className="flex flex-row items-center justify-center w-full pb-4 pt-2 bg-[#181818]">
        <div className="w-[10%] flex flex-row">
          <div className="flex flex-row items-center justify-center ml-4 gap-1">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-full hover:bg-[#3d3d3d] transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
              </svg>
            </button>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg"
              alt="MyTube Logo"
              width={30}
              height={20}
              className="ml-2"
            />
            <header>MyTube</header>
          </div>
        </div>

        {/* Search bar */}
        <div className="w-[80%] flex justify-center items-center">
          <div className="flex h-7 border border-hover rounded-full overflow-hidden shadow-sm w-[450px]">
            <input
              type="text"
              placeholder="Search"
              className="flex-1 px-4 py-2 text-gray-200 focus:outline-none"
            />
            <button className="bg-lightbg px-3 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
              </svg>
            </button>
          </div>
          <button className="flex items-center justify-center w-8 h-8 rounded-full bg-lightbg ml-2 hover:bg-hover transition">
            <Mic size={18} className="text-white" />
          </button>
        </div>

        {/* Right content */}
        <section className="flex flex-row w-[10%] justify-center items-center">
          <button className="flex items-center gap-2 px-2 py-1 rounded-full bg-lightbg text-xs font-medium text-text hover:bg-hover transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            Create
          </button>
          <button className="relative flex items-center justify-center w-8 h-8 rounded-full hover:bg-hover transition ml-2">
            <Bell size={18} />
          </button>
          <img src="https://metubebucketcf.s3.us-east-2.amazonaws.com/userpfp.jpg" className="w-8 h-8 rounded-full ml-2" />
        </section>
      </div>
    </>
  );
}
import Image from "next/image";
import defaultImage from "../images/default.png";
import { Bell, Mic } from "lucide-react";
import MeTubeLogo from "../images/metubelogo.jpg";
export default function SearchBarArea() {
  return (
    <div className="flex flex-row items-center justify-center w-full pb-4 pt-2 bg-[#181818]">
      {/* MeTube Logo */}
      <div className="w-[10%]  flex flex-row w-[10%]">
        <div className="flex flex-row items-center justify-center ml-4 gap-1">
        <Image
          src={"https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg"}
          alt="MeTube Logo"
          width={30}
          height={20}
          className=" ml-2"
        />
        <header className="">MyTube</header>
        </div>
      </div>
      {/* Search bar begin */}
      <div className="w-[80%] flex justify-center items-center">
        <div className="flex h-7 border border-hover rounded-full overflow-hidden shadow-sm w-[450px]">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 px-4 py-2 text-gray-200 focus:outline-none"
          />

          <button className="bg-lightbg px-3 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-text"
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
        {/* Mic Icon */}
         <button className="flex items-center justify-center w-8 h-8 rounded-full bg-lightbg ml-2 hover:bg-hover active:bg-gray-200 transition">
      <Mic size={18} className="text-white" />
    </button>
      </div>
      {/* Right content */}
      
      <section className=" flex flex-row w-[10%] justify-center items-center ">
        {/* Create button  */}
        <button className="flex items-center gap-2 px-2 py-1 rounded-full  bg-lightbg text-xs font-medium text-text hover:bg-hover active:bg-gray-200 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
          Create
        </button>

        {/* Bell Icon */}
        <button className="relative flex items-center justify-center w-8 h-8 rounded-full hover:bg-hover active:bg-gray-200 transition ml-2">
          <Bell size={18} />
        </button>
        {/* PFP */}
        <Image
          src={defaultImage}
          alt="Default"
          width={30}
          height={25}
          className="rounded-full ml-2"
        />
      </section>
    </div>
  );
}

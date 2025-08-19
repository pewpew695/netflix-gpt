import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[31%] md:pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-2xl md:text-4xl mb-2">{title}</h1>
      <p className="hidden md:block py-6 text-lg w-4/12">{overview}</p>
      <div className="flex">
        <button className="bg-white text-black text-xl p-2 px-3 md:p-4 md:px-12 rounded-lg flex items-center opacity-100 hover:opacity-80 transition-opacity duration-200 cursor-pointer">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="black"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="6,4 20,12 6,20" />
          </svg>{" "}
          <span className="text-sm md:text-lg md:px-1">Play</span>
        </button>
        <button className="hidden md:flex mx-2 bg-gray-500 text-white text-xl p-1 px-4 md:p-4 md:px-9 rounded-lg opacity-100 hover:opacity-80 transition-opacity duration-200 flex items-center cursor-pointer">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <circle cx="12" cy="8" r="1" fill="white" />
          </svg>
          <span className="text-sm md:text-lg px-1">More Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

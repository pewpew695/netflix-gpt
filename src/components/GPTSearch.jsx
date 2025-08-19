import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { BG_URL } from "../utils/constants";
import { useSelector } from "react-redux";

const GPTSearch = () => {
  return (
    <>
      <div className="">
        <img
          className="fixed -z-20 h-screen md:h-auto object-cover"
          src={BG_URL}
          alt="Background Image with many Netflix Show/Movies"
        ></img>
      </div>
      <div className="">
        <GPTSearchBar />
        <GPTMovieSuggestions />
      </div>
    </>
  );
};

export default GPTSearch;

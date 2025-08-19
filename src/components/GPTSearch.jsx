import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { BG_URL } from "../utils/constants";
import { useSelector } from "react-redux";

const GPTSearch = () => {
  return (
    <div>
      <img
        className="absolute -z-20"
        src={BG_URL}
        alt="Background Image with many Netflix Show/Movies"
      ></img>
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  );
};

export default GPTSearch;

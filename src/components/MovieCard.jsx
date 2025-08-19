import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  //   console.log(poster_path);
  return (
    <div className="w-48 mr-3">
      <img className="rounded-lg" alt="Movie Poster" src={IMG_CDN_URL + posterPath}></img>
    </div>
  );
};

export default MovieCard;

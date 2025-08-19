import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  //   console.log(poster_path);
  if (!posterPath) return null;
  return (
    <div className="w-36 md:w-48 h-[220px] md:h-[300px] mr-3 flex-shrink-0">
      <img
        className="rounded-lg"
        alt="Movie Poster"
        src={IMG_CDN_URL + posterPath}
      ></img>
    </div>
  );
};

export default MovieCard;

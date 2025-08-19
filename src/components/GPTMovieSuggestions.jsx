import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.GPT);
  if (!movieNames) return null;
  console.log(movieResults[0]);

  return (
    <div className=" p-2 m-2 bg-black/90  text-white ">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

// {movieNames.map((movieName, index)=>(<MovieList title={} movie={}/>))
//         }
export default GPTMovieSuggestions;

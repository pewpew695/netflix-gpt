import React, { useEffect, useRef } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const scrollRef = useRef(null); // Step 1: Ref to scroll container

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    const handleWheel = (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault(); // Stop vertical scroll
        scrollContainer.scrollLeft += e.deltaY; // Scroll horizontally
      }
    };

    scrollContainer.addEventListener("wheel", handleWheel, { passive: false });

    // Cleanup on unmount
    return () => {
      scrollContainer.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="px-6">
      <h1 className="text-3xl py-4 mt-2 text-white">{title}</h1>
      <div ref={scrollRef} className="flex overflow-x-scroll scrollbar-hide">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

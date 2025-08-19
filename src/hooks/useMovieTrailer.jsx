import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { getRandomNumber } from "../utils/getRandomNumber";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");

    let trailer;

    if (filterData.length > 0) {
      const movieChoice = getRandomNumber(filterData.length);
      trailer = filterData[movieChoice];
    } else {
      const movieChoice = getRandomNumber(json.results.length);
      trailer = json.results[movieChoice];
    }

    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    !movies.addTrailerVideo && getMovieVideos();
  }, []);
};

export default useMovieTrailer;

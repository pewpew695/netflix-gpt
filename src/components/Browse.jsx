import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTrendingMovies();
  return (
    <div className="">
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* 
        Main container
         - VideoBackground
         - Video Title
        Secondary Container
          -MovieList * n
            - cards * n  
      */}
    </div>
  );
};

export default Browse;

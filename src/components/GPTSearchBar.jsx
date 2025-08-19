import React, { useRef } from "react";
import { Form } from "react-router-dom";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addGPTMovieResult } from "../utils/GPTSlice";
// import client from "../utils/openAI";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  //   const API_KEY =
  //     "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"; // Replace with your OpenAI API key
  //   const ENDPOINT = "https://api.openai.com/v1/responses";

  //   async function getResponse(userMessage) {
  //     try {
  //       const res = await fetch(ENDPOINT, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${API_KEY}`,
  //         },
  //         body: JSON.stringify({
  //           messages: [
  //             { role: "system", content: "You are a helpful assistant." },
  //             { role: "user", content: userMessage },
  //           ],
  //         }),
  //       });

  //       if (!res.ok) {
  //         throw new Error(`HTTP error! status: ${res.status}`);
  //       }

  //       const data = await res.json();
  //       console.log("data:" + data);
  //       return data.choices?.[0]?.message?.content || "No response";
  //     } catch (error) {
  //       return `Error: ${error.message}`;
  //     }
  //   }

  const handleGPTSearchClick = async () => {
    // console.log(searchText.current.value);
    // const gptQuery =
    //   "Act as a movie recommendation platform. Give me list of 5 movies which are comma separated with space. The search query will be given next: " +
    //   searchText.current.value;
    // const gptResults = await client.responses.create({
    //   model: "gpt-3.5-turbo",

    //   input: gptQuery,
    // });
    // console.log(gptResults.output_text);

    console.log("click");
    const gptMovies = [
      "Chupke Chupke",
      "Gol Maal",
      "Padosan",
      "Angoor",
      "Chashme Buddoor",
    ];

    const data = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(data);
    console.log(tmdbResults);
    dispatch(
      addGPTMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[45%] md:pt-[10%] p-0 flex justify-center">
      <form
        className="w-full md:w-1/2 border bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9 bg-white"
          placeholder="What would you like to watch today?"
        ></input>
        <button
          className="col-span-3 m-4 mx-2 py-2 px-2 text-white bg-red-700 rounded-lg"
          onClick={handleGPTSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;

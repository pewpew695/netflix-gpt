import React from "react";
import { Form } from "react-router-dom";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 border bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9 bg-white"
          placeholder="What would you like to watch today?"
        ></input>
        <button className="col-span-3 m-4 py-2 px-2 text-white bg-red-700 rounded-lg">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;

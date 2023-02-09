import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import SelectImageButtons from "./SelectImageButtons";
import "./Components.css";

const Memes = ({ topText, setTopText, bottomText, setBottomText }) => {
  const url = "https://api.imgflip.com/get_memes";
  const { data, error, isLoading } = useFetch(url);
  const [indexNumber, setIndexNumber] = useState(0);

  return (
    <div>
      <SelectImageButtons
        setIndexNumber={setIndexNumber}
        indexNumber={indexNumber}
        toptext={topText}
        setTopText={setTopText}
        bottomText={bottomText}
        setBottomText={setBottomText}
      />
      <br />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {data && !error ? (
            <div class="container">
              <div class="top-text">{topText}</div>
              <img
                key={data.data.memes[indexNumber].id}
                src={data.data.memes[indexNumber].url}
              />
              <div class="bottom-text">{bottomText}</div>
            </div>
          ) : (
            <p> {error} </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Memes;

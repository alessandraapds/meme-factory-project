import React, { useState } from "react";
import Memes from "./Memes";

const Input = () => {
  // Text on Top
  const [newTextTop, setNewTextTop] = useState("");
  const [topText, setTopText] = useState("");

  const insertTopTextTop = (e) => {
    e.preventDefault();
    const item = newTextTop;
    setTopText(item);

    setNewTextTop("");
  };

  // Text on Bottom
  const [newTextBottom, setNewTextBottom] = useState("");
  const [bottomText, setBottomText] = useState("");

  const insertTopTextBottom = (e) => {
    e.preventDefault();
    const item = newTextBottom;
    setBottomText(item);

    setNewTextBottom("");
  };

  return (
    <div>
      <h5>Step 1: Choose a picture!</h5>
      <Memes
        topText={topText}
        setTopText={setTopText}
        bottomText={bottomText}
        setBottomText={setBottomText}
      />
      <h5>Step 2: Explore your creativity and write a phrase!</h5>

      {/* text on the top */}
      <form>
        <label for="top phrase">Phrase on the top</label>
        <input
          type="text"
          name="Top phrase"
          placeholder="Start writting!"
          value={newTextTop}
          onChange={(e) => setNewTextTop(e.target.value)}
        />
        <button onClick={insertTopTextTop}>Publish!</button>
      </form>

      {/* text on the bottom */}
      <form>
        <label for="top phrase">Phrase on the bottom</label>
        <input
          type="text"
          name="Bottom phrase"
          placeholder="Start writting!"
          value={newTextBottom}
          onChange={(e) => setNewTextBottom(e.target.value)}
        />
        <button onClick={insertTopTextBottom}>Publish!</button>
      </form>
    </div>
  );
};

export default Input;

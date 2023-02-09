import "./App.css";
import React from "react";
import Input from "./components/Input";
import UserFiles from "./components/UserFiles";

function App() {
  return (
    <div className="App">
      <h1>Memes Generator</h1>
      <h3>Create your own memes</h3>
      <Input />
      <br />
      <h4>Do you want to use your own images?</h4>
      <p>Choose an image from your computer and start playing!</p>
      <UserFiles />
    </div>
  );
}

export default App;

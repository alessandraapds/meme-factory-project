import React, { useState } from "react";

const UserFiles = ({ topText, setTopText, bottomText, setBottomText }) => {
  const [newFile, setNewFile] = useState(null);
  const [userUploadedFiles, setUserUploadedFiles] = useState([]);

  const addUserFile = (e) => {
    e.preventDefault();
    const file = URL.createObjectURL(newFile);

    setUserUploadedFiles((oldFiles) => [...oldFiles, file]);
    setNewFile(null);
  };

  return (
    <div>
      <h4>Do you want to use your own images?</h4>
      <p>Choose an image from your computer and start playing!</p>
      <div>
        <input
          type="file"
          id="input"
          onChange={(e) => setNewFile(e.target.files[0])}
        />
        <button onClick={addUserFile}>Upload</button>
      </div>
      <br />
      <div class="container">
        <div class="top-text">{topText}</div>
        <img src={userUploadedFiles} />
        <div class="bottom-text">{bottomText}</div>
      </div>
    </div>
  );
};

export default UserFiles;

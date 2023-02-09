import React, { useState } from "react";

const UserFiles = () => {
  const [newFile, setNewFile] = useState(null);
  const [userUploadedFiles, setUserUploadedFiles] = useState([]);

  console.log(newFile, "test");

  const addUserFile = (e) => {
    e.preventDefault();
    const file = {
      id: Math.floor(Math.random() * 1000),
      file_url: URL.createObjectURL(newFile),
    };

    setUserUploadedFiles((oldFiles) => [...oldFiles, file]);
    setNewFile(null);
  };

  return (
    <div>
      <div>
        <input
          type="file"
          id="input"
          value={newFile}
          onChange={(e) => setNewFile(e.target.value)}
        />
        <button onClick={addUserFile}>Upload</button>
      </div>
      <div>
        {userUploadedFiles.map((file) => (
          <img key={file.id} src={file.file_url} />
        ))}
      </div>
    </div>
  );
};

export default UserFiles;

import React from "react";

const SelectImageButtons = ({
  indexNumber,
  setIndexNumber,
  setTopText,
  setBottomText,
}) => {
  return (
    <div>
      <button
        onClick={() => {
          if (indexNumber >= 1) {
            setIndexNumber(indexNumber - 1);
            setBottomText("");
            setTopText("");
          } else {
            setIndexNumber(0);
            alert("That's the first image!");
          }
        }}
      >
        Previous
      </button>
      <button
        onClick={() => {
          setIndexNumber(indexNumber + 1);
          setBottomText("");
          setTopText("");
        }}
      >
        Next
      </button>
    </div>
  );
};

export default SelectImageButtons;

import React from "react";
import "./textBTN.scss";
const Textbtn = (props) => {
  return (
    <div
      className="text-button"
      style={{
        fontSize: props.size,
      }}
      onClick={props.handleChange}
    >
      {props.text}
    </div>
  );
};

export default Textbtn;

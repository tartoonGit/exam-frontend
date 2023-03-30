import React from "react";
import "./confirmBTN.scss";
const Confirmbtn = (props) => {
  return (
    <button
      className="button"
      style={{
        fontSize: props.size,
        width: props.width,
        height: props.height,
      }}
      onClick={props.handleChange}
    >
      {props.text}
    </button>
  );
};

export default Confirmbtn;

import React from "react";
import "./Inputname.scss";
const Inputname = (props) => {
  return (
    <input
      className="input"
      onChange={props.handleChange}
      type="text"
      style={{ width: props.width }}
      placeholder={props.placeholder}
    />
  );
};

export default Inputname;

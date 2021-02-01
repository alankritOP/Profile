import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <div className="btn">
      <button type={props.type} onClick={props.onClick}>
        {props.value}
      </button>
    </div>
  );
};
export default Button;

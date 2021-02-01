import React from "react";
import "./Image.css";
const Image = (props) => {
  return <img className="image" src={props.src} alt={props.alt}></img>;
};
export default Image;

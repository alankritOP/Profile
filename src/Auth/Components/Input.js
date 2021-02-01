import React from "react";
import "./Input.css";

const Input = (props) => {
  const onChange = (event) => {
    props.onChange(event.target.value);
  };
  return (
    <div className={props.className}>
      <input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={onChange}
      />
    </div>
  );
};

Input.defaultProps = {
  onChange: () => {},
  className: "inputBoxes",
};
export default Input;

import React from "react";
import "./Error.css";
const Error = (props) => {
  return (
    <div className="main">
      {props.toShow && (
        <div className={"mainError"} type={props.type}>
          {props.display}
        </div>
      )}
    </div>
  );
};
export default Error;

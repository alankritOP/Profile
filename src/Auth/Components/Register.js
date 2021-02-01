import React from "react";
import Input from "./Input";
import { withRouter } from "react-router-dom";
import "./Register.css";
import Button from "./Button";

const Register = (props) => {
  const goToUrl = () => {
    props.history.push("/");
  };
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  // const goToWelcome = () => {
  //   props.history.push("/welcome");
  // };
  return (
    <div className="registerBox">
      <Input
        type="text"
        value="name"
        placeholder="Enter your name"
        onChange={handleChange}
      />
      <Input
        type="email"
        value="email"
        placeholder="Enter email"
        onChange={handleChange}
      />
      <Input
        type="password"
        value="password"
        placeholder="Enter password"
        onChange={handleChange}
      />
      <Button type="submit" value="Register" />
      <p>
        Already registered?
        <span id="bold" onClick={() => goToUrl()}>
          SignIn
        </span>
      </p>
    </div>
  );
};

export default withRouter(Register);

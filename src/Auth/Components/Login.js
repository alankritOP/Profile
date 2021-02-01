//onClick={() => props.changeScreen("Register")}
import React, { useState, useEffect } from "react";
import Input from "./Input";
import { withRouter } from "react-router-dom";
import "./Login.css";
import Button from "./Button";
import Error from "./Error";
import { LOGIN_DETAILS } from "../../lib/Constant";
//import Welcome from "./Welcome";

const Login = (props) => {
  const [authState, setAuthState] = useState({
    username: "",
    password: "",
  });
  useEffect(() => {
    const userLoginDetails = localStorage.getItem(LOGIN_DETAILS);
    if (userLoginDetails && userLoginDetails === "loggedIn") {
      props.history.push("/profile");
    }
  }, []);
  const [errorMessage, setErrorMessage] = useState("");
  const [inCorrect, setIncorrect] = useState(false);

  // Function to handle authenticity
  const handleAuthenticity = () => {
    setIncorrect(false);
    if (authState.username === "" || authState.password === "") {
      setIncorrect(true);
      setErrorMessage("All fields are required!");
      return false;
    }
    if (authState.username === "admin" && authState.password === "123456") {
      localStorage.setItem(LOGIN_DETAILS, "loggedIn");
      props.history.push("/profile");
      // console.log("You have entered correct Information.");
    } else {
      if (!authState.username) {
        setIncorrect(true);
        setErrorMessage("Please Enter Correct Password");
        return false;
      }
      if (!authState.password) {
        setIncorrect(true);
        setErrorMessage("Please Enter Correct Password");
        return false;
      }
    }
  };
  //handleChange function manages onChange

  const handleChange = (value) => {
    const presentState = authState;
    const newState = Object.assign({}, presentState, value);
    setAuthState(newState);
  };

  // This function will take you to a register page.
  const goToUrl = () => {
    props.history.push("/register");
  };

  const manageError = () => {
    return <Error toShow={inCorrect} display={errorMessage} type="mainError" />;
  };

  return (
    <div className="loginBox">
      {manageError()}
      {/* <Error display="Incorrect" toShow={inCorrect} /> */}
      <Input
        type="text"
        value={authState.username}
        onChange={(e) => handleChange({ username: e })}
        placeholder="username"
      />
      <Input
        onChange={(e) => handleChange({ password: e })}
        type="password"
        value={authState.password}
        placeholder="password"
      />
      <Button type="submit" value="Login" onClick={handleAuthenticity} />
      <p>
        Not registered?
        <span className="btn1" onClick={() => goToUrl()}>
          Create an Account
        </span>
      </p>
    </div>
  );
};
export default withRouter(Login);

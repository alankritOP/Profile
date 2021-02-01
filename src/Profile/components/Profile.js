import React, { useState } from "react";
import Image from "../../general/Image";
import Input from "../../Auth/Components/Input";
import "./Profile.css";
var profileUserInfo = require("./profileUserInfo");
const Profile = () => {
  const [editState, setEditState] = useState(false);
  const [userInfo, setUserInfo] = useState({
    ...profileUserInfo,
  });
  const doEdit = (event) => {
    // isEditing && setUserDetails(e.target.value);
    editState
      ? setUserInfo(event.target.value)
      : console.log("Nothing is changed");
  };

  const handleClick = () => {
    setEditState(true);
    console.log("Please edit the text now.");
  };
  const onChange = (newValue) => {
    const currentState = userInfo;
    const newState = Object.assign({}, currentState, newValue);
    setUserInfo(newState);
  };
  return (
    // <div className="main">
    <div className="base">
      <div className="left">
        {/* <img className="image" src="assets/images/image1.jpg"></img> */}
        <Image src="assets/images/image1.jpg" alt="No image found" />
      </div>
      <div className="right">
        <div className="profileCardContentEditBtn">
          <input
            type="image"
            src="assets/images/edit.png"
            alt="Edit"
            //width="24px"
            //height="24px"
            onClick={() => {
              setEditState(!editState);
            }}
          />
        </div>
        <div className="starting">
          <h5>Hello Everyone, I am</h5>
        </div>
        <div className="name">
          {/* <h2>Alankrit sinha</h2> */}
          <h2>
            {editState ? (
              <Input
                type="text"
                className={"inputBox"}
                value={userInfo.name}
                onChange={(name) => onChange({ name })}
              />
            ) : (
              userInfo.name
            )}
          </h2>
        </div>
        <div className="designation">
          {/* A Junior Web Developer. */}
          <input
            type="text"
            className={"inputBox"}
            value={userInfo.designation}
            onChange={doEdit}
          />
        </div>
        {/* {editState ?
        <div>
          <input type="textarea" defaultValue={p}/>
          </div>: */}
        <div className="content" onDoubleClick={handleClick}>
          <p>
            <textarea value={userInfo.content} onChange={doEdit} />
          </p>
        </div>

        <div className="listDetails">
          <ul>
            <li>Date:{userInfo.date}</li>
            <li>Number:{userInfo.number}</li>
            <li>Email:{userInfo.email}</li>
            <li>Address:{userInfo.address}</li>
          </ul>
        </div>
      </div>
    </div>
    // </div>
  );
};
export default Profile;

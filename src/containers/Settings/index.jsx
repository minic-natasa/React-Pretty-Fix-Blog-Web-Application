import React from 'react';
import './style.css';

/**
* @author
* @function Settings
**/

const Settings = (props) => {
  return(
        <div className="settings">
          <div className="settingsWrapper">
            <div className="settingsTitle">
              <span className="settingsTitleUpdate">Update Your Account</span>
              <span className="settingsTitleDelete">Delete Account</span>
            </div>
            <form className="settingsForm">
              <label>Profile Picture</label>
              <div className="settingsPP">
                <img
                   src= "https://cdn.pixabay.com/photo/2017/08/22/12/48/pink-2668847_1280.jpg"
                  alt=""
                />
                <label htmlFor="fileInput">
                  <i className="settingsPPIcon far fa-user-circle"></i>{" "}
                </label>
                <input
                  id="fileInput"
                  type="file"
                  style={{ display: "none" }}
                  className="settingsPPInput"
                />
              </div>
              <label>Username</label>
              <input type="text" placeholder="Natasa" name="name" />
              <label>Email</label>
              <input type="email" placeholder="natasa@gmail.com" name="email" />
              <label>Password</label>
              <input type="password" placeholder="Password" name="password" />
              <button className="settingsSubmitButton" type="submit">
                Update
              </button>
            </form>
          </div>
        </div>
   )
  }


export default Settings
import React from 'react';
import './style.css';

/**
* @author
* @function Write
**/

const Write = (props) => {
  return(

    <div className="write">
    <img
      className="writeImg"
      src= "https://cdn.pixabay.com/photo/2017/08/22/12/48/pink-2668847_1280.jpg"
      alt=""
    />
    <form className="writeForm">
      <div className="writeFormGroup">
        <label htmlFor="fileInput">
          <i className="writeIcon fas fa-plus"></i>
        </label>
        <input id="fileInput" type="file" style={{ display: "none" }} />
        <input
          className="writeInput"
          placeholder="Title"
          type="text"
          autoFocus={true}
        />
      </div>
      <div className="writeFormGroup">
        <textarea
          className="writeInput writeText"
          placeholder="Tell us your review..."
          type="text"
          autoFocus={true}
        />
      </div>
      <button className="writeSubmit" type="submit">
        Publish
      </button>
    </form>
  </div>
   )
  }


export default Write
import React from 'react';
import './style.css';

/**
* @author
* @function Single
**/

const Single = (props) => {
  return(
    <div className = "single">
        <div className="singleWrapper">
            <img src = "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt = "" className = "singleImg"></img>
            <h1 className = "singleTitle">Naslov
            <div className="singleEdit">
            <i className="singleIcon far fa-edit"></i>
            <i className="singleIcon far fa-trash-alt"></i>
          </div></h1>
          <div className="singleInfo">
          <span className = "singleAuthor">
            Autor: <b>Natasa</b>
          </span>
          <span className = "singleDate">Datum</span>
        </div>
        <p className="singleDesc">
          Tekst objave!
          <br />
          <br />
          Još teksta od objave bla bla.
        </p>
      </div>
    </div>
   )
  }


export default Single
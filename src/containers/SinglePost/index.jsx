import React from 'react';
import './style.css';
import Sidebar from '../../components/Sidebar';
import Single from '../../components/Single';

/**
* @author
* @function SinglePost
**/

const SinglePost = (props) => {
  return(
    <div className = "singlePost">
        <Single/>
        <Sidebar/>
    </div>
   )
  }


export default SinglePost
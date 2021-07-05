import React from 'react';
import './style.css';
import Sidebar from '../Sidebar';

/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
    <div>
    <div className = "container">
        {props.children}
        <Sidebar/>
    </div>

    <div className = "foot">
      <h1>Footer</h1>
    </div>
    </div>
   )

 }

export default Layout
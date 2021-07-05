import React from 'react';
import './style.css';
import Card from '../../../components/UI/Card';
import RecentPost from '../RecentPost';

/**
* @author
* @function RecentPosts
**/

const RecentPosts = (props) => {
  return(
    
    <div className = "posts" style = {props.style}>

               
                  <RecentPost/>
                  <RecentPost/>
                  <RecentPost/>
                  <RecentPost/>
                  <RecentPost/>
                  <RecentPost/>
  
            


                </div>

   )

 }

export default RecentPosts
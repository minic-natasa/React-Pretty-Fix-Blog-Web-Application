import React from 'react';
import './style.css';
import BlogPost from '../../components/BlogPost';
import Layout from '../../components/Layout';

import { Link } from "react-router-dom";

/**
* @author
* @function Post
**/

const Post = (props) => {

    console.log(props);


  return(
    <div className="postPage">
        <Layout>
          <BlogPost {...props} />
        </Layout>

        <button className="backButton">
      <Link className = "link" to = "/"> 
        Get Back
      </Link>
      </button>

        </div>

        
   )

 }

export default Post;
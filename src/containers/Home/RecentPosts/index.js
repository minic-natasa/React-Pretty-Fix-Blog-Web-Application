import React, { useEffect, useState } from 'react';
import './style.css';
import Card from '../../../components/UI/Card';
import blogPost from '../../../data/blog.json';
import { NavLink } from 'react-router-dom';

/**
* @author
* @function RecentPosts
**/

const RecentPosts = (props) => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const posts = blogPost.data;
    setPosts(posts);
  },  [posts]);
  

  return(
    
    <div className = "posts" style = {props.style}>

<Card style={{background:'white', borderRadius:'20px', border:'none', padding: '10px',  boxSizing: 'border-box'}}> 
        
        <div className = "cardHeader">
          <span>ALL POSTS</span>
        </div>

        <div className = "recentPosts">

          {
            posts.map(post =>{
              return(
                <NavLink key = {post.id} to={`/post/${post.slug}`}> 
                <div className = "recentPost">
                <h3 className = "title">{post.blogTitle}</h3>
                <span className = "date">{post.postedOn}</span>         
          </div>
          </NavLink> //moramo da damo nesto unique komponenti navlink - koristimo key 
              );
            })
          }

        </div>

        </Card>
  
            


                </div>

   )

 }

export default RecentPosts
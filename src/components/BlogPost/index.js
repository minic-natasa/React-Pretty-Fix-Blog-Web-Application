import React, { useState, useEffect } from 'react';
import './style.css';
import Card from '../UI/Card';
import blogPost from '../../data/blog.json';

/**
* @author
* @function BlogPost
**/

const BlogPost = (props) => {

  const [post, setPost] = useState({
    id: "" ,
    blogCategory: "" ,
    blogTitle : "" ,
    postedOn: "" ,
    author: "" ,
    blogImage: "" ,
    blogText: ""
  });

  const [slug, setSlug] = useState('');

  useEffect(() => {
    const slug = props.match.params.slug;
    const post = blogPost.data.find(post => post.slug == slug);
    setPost(post);
    setSlug(slug)
}, [post, props.match.params.slug]);

if(post.blogImage == "") return null;

  return(
        <div className="blogPostContainer">
             <Card>
                <div className="blogPostHeader">
  <span className="blogPostCategory">{post.blogCategory}</span>
                    <h1 className="blogPostTitle">{post.blogTitle}</h1>
  <span className="postedBy">posted on {post.postedOn} by {post.author}</span>
                </div>

                <div className="blogPostImageContainer">
                    <img src={require('../../images/' + post.blogImage).default} alt="Post Image" />
                    
                </div>

                <div className="blogPostContent">
  <h3>{post.blogTitle}</h3>
  <p>{post.blogText}</p>
                </div>
                
            </Card>
        </div>
   )

 }

export default BlogPost
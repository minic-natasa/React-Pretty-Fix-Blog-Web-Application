import React, {useState, useEffect} from 'react';
import './style.css';
import Card from '../UI/Card';
import blogPost from '../../data/blog.json';


/**
* @author
* @function BlogPost
**/

//Card koristimo više puta, pa stil kartice menjamo direktno za svaku

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
  const [postId, setPostId] = useState('');
  
  useEffect(() => {
    const postId = props.match.params.postId; //uzimamo id objave
    const post = blogPost.data.find(post => post.id == postId); //blogPost je array
    setPost(post);
    setPostId(postId);
  }, [post, props.match.params.postId]);

  if(post.blogImage == "") return null;

  return(

    <div className = "blogPostContainer">

    <Card style={{background: '#fd88ac'}}> 
      <div className = "blogPostHeader">

        <span className = "blogPostCategory">{post.blogCategory}</span>
        <h1 className = "blogPostTitle">{post.blogTitle}</h1>
        <span className = "blogPostPostedBy">posted on {post.postedOn} by {post.author} </span>

      </div>

      <div className = "blogPostImageContainer">
      <img src={require('../../images/' + post.blogImage).default} alt="Post Image" />
      </div>

      <div className = "blogPostContent">
         <h3>{post.blogTitle}</h3>
         <p>{post.blogText}</p>
      </div>

    </Card>

    </div>
    
    

   )

 }

export default BlogPost
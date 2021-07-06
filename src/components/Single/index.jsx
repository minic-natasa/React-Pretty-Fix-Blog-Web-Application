import React, {useState, useEffect} from 'react';
import './style.css';
import Card from '../UI/Card';
import blogPost from '../../data/blog.json';

/**
* @author
* @function Single
**/



const Single = (props) => {

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

    <div className = "single">
<Card>
        <div className="singleWrapper">
            <img src={require('../../images/' + post.blogImage).default} className = "singleImg" alt="Post Image" />
            <h1 className = "singleTitle">{post.blogTitle}
            <div className="singleEdit">
            <i className="singleIcon far fa-edit"></i>
            <i className="singleIcon far fa-trash-alt"></i>
          </div></h1>
          <div className="singleInfo">
          <span className = "singleAuthor">
            Autor: <b>{post.author}</b>
          </span>
          <span className = "singleDate">posted on {post.postedOn}</span>
        </div>
        <p className="singleDesc">
        {post.blogText}
        </p>
      </div>
      </Card>
    </div>
   )
  }


export default Single
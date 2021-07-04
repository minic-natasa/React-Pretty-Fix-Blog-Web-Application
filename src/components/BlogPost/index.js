import React from 'react';
import './style.css';
import Card from '../UI/Card';
import img from '../../images/IMG_7523-scaled.jpg'

/**
* @author
* @function BlogPost
**/

//Card koristimo više puta, pa stil kartice menjamo direktno za svaku

const BlogPost = (props) => {
  return(

    <div className = "blogPostContainer">

    <Card style={{background: '#fd88ac'}}> 
      <div className = "blogPostHeader">

        <span className = "blogPostCategory">Span</span>
        <h1 className = "blogPostTitle">Naslov</h1>
        <span className = "blogPostPostedBy">posted on bla bla</span>

      </div>

      <div className = "blogPostImageContainer">
        <img className="blogPostImageContainer" src={img} alt="Post image" />
      </div>

    </Card>

    </div>
    
    

   )

 }

export default BlogPost
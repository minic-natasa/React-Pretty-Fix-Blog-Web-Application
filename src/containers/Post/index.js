import React from 'react';
import BlogPost from '../../components/BlogPost';
import Layout from '../../components/Layout';
import './style.css';

/**
* @author
* @function Post
**/

//Levo da bude glavni post, a desno side bar (Side bar je reuseble komponenta)
//className radi samo sa divom, ne i kad stavimo <Card className="ime">

const Post = (props) => {


  console.log(props);

  return(
    <section className="container">
      <Layout>
      <BlogPost {...props} />
      </Layout>
    </section>
   )

 }

export default Post
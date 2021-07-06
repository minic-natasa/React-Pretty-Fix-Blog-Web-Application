import React from 'react';
import './style.css';
import Layout from '../../components/Layout';
import Single from '../../components/Single';

/**
* @author
* @function SinglePost
**/

const SinglePost = (props) => {

  console.log(props);
  
  return(

    <section className="singlePost">
    <Layout>
    <Single {...props} />
    </Layout>
  </section>
    
   )
  }


export default SinglePost
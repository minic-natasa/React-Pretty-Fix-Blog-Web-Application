import React from 'react';
import './style.css';
import Card from '../../components/UI/Card';
import Layout from '../../components/Layout';
import RecentPosts from './RecentPosts';
import blogData from '../../data/blog.json';
import SinglePost from '../SinglePost';
import Write from '../Write';


const SideImage = props => {
    return(
        <div style = {{height: `${props.height}px`}}>
            <img src = {props.src} alt = ""/>
        </div>
    );
}

const ImageGallery = props => (
    <div className = "galleryPost" style = {props.galleryStyle}>

                <section style = {{width: props.largeWidth}}> 
                    <div className = "mainImageWrapper">
                        <img className = "image" src = {require('../../images/' + props.imagesArray[0]).default} alt = ""/>
                    </div>
                </section>

                <section className = {"sideImageWrapper"} style = {{ width:props.smallWidth}}> 
                    <SideImage height = {props.sideImageHeight}
                    src = {require('../../images/' + props.imagesArray[1]).default}
                    alt = "" />
                    
                    <SideImage height = {props.sideImageHeight}
                    src = {require('../../images/' + props.imagesArray[2]).default}
                    alt = "" />

                    <SideImage height = {props.sideImageHeight}
                    src = {require('../../images/' + props.imagesArray[3]).default}
                    alt = "" />

                </section>

                </div>
);

const Home = props => {

    const galleryHeight = 450;
    const galleryStyle = {
        height: galleryHeight + 'px',
        overflow: 'hidden'
    }

    const sideImageHeight = galleryHeight/3;

    const imgArray = blogData.data.map(post => post.blogImage);


    return(
        <div>
            <Card style = {{margin: '20px 0'}}>

           

                
               
            </Card>

            

                <Layout>
                    <RecentPosts style = {{width:'70%', color: '#ff05c0'}}/>
                </Layout>

                
        <SinglePost/>
        <Write/>
             

        </div>
    );
}

export default Home;
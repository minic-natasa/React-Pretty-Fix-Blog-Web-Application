import React, { useState, useEffect } from 'react';
import './style.css';
import Card from '../../components/UI/Card';
import Layout from '../../components/Layout';
import RecentPosts from './RecentPosts';
import Hero from '../../components/Hero';


const Home = (props) => {

    console.log(props);


    return(
        <div>
            <Card style = {{margin: '20px 0'}}> 
            <Hero/>
            </Card>

                <Layout>
                    <RecentPosts style = {{width: '70%'}}/>
                </Layout>

        </div>
    );
}

export default Home;
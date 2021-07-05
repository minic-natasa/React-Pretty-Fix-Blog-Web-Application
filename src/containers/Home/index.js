import React from 'react';
import './style.css';
import Card from '../../components/UI/Card';
import Sidebar from '../../components/Sidebar';
import RecentPosts from './RecentPosts';


const Home = props => {

    const galleryHeight = 450;
    const galleryStyle = {
        height: galleryHeight + 'px',
        overflow: 'hidden'
    }

    const sideImageHeight = galleryHeight/3;


    return(
        <div>
            <Card style = {{margin: '20px 0'}}>

                <div className = "galleryPost" style = {galleryStyle}>

                <section style = {{width: '70%'}}> 
                    <div className = "">
                        <img className = "image" src = "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt = ""/>
                    </div>
                </section>

                <section className = {"sideImageWrapper"} style = {{ width:'30%'}}> 
                    <div style = {{height: `${sideImageHeight}px`}}>
                        <img src = "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt = ""/>
                    </div>
                    <div style = {{height: `${sideImageHeight}px`}}>
                        <img src = "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt = ""/>
                    </div>
                    <div style = {{height: `${sideImageHeight}px`}}>
                        <img src = "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt = ""/>
                    </div>
                </section>

                </div>
               
            </Card>

            <section className = "homeContainer">
             <RecentPosts style = {{width:'70%', color: '#ff05c0'}}/>
             <Sidebar/>
            </section>

            

           

        </div>
    );
}

export default Home;
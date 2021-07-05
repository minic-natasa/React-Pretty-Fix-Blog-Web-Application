import React from 'react';
import './style.css';
import Card from '../../../components/UI/Card';

/**
* @author
* @function RecentPosts
**/

const RecentPosts = (props) => {
  return(
    
    <div style = {props.style}>

                <Card style = {{marginBottom: '20px', background: '#fff'}}>
                    <div className = "postImageWrapper">
                    <img src = {"https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"} alt = ""/>
                    </div>

                    <div style={{textAlign: 'center'}}>
                        <span>Featured</span>
                        <h2>Naslov</h2>
                        <span>posted on Datum by Autor</span>
                        <p>Tekst objave</p>

                        <button>Read more</button>
                    </div>
  
            </Card>

                </div>

   )

 }

export default RecentPosts
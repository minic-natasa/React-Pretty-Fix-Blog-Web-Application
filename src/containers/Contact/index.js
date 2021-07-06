import React from 'react';
import './style.css';
import Card from '../../components/UI/Card';
import Hero from '../../components/Hero';

/**
* @author
* @function Contact
**/

const Contact = (props) => {
 return(
    <div>
            <Card style = {{margin: '20px 0'}}> 
            <Hero/>
            </Card>

               <h1 className = "text">If you want to contact us, feel free to write us on prettyfix@gmail.com</h1>


        </div>
   )

 }

export default Contact
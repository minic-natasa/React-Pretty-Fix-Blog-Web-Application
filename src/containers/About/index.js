import React from 'react';
import './style.css';
import Card from '../../components/UI/Card';
import Hero from '../../components/Hero';

/**
* @author
* @function About
**/

const About = (props) => {
  return(
    <div>
            <Card style = {{margin: '20px 0'}}> 
            <Hero/>
            </Card>

               <h1 className = "text">Svako žensko dete barem jednom u životu bude fascinirano lepim, našminkanim i negovanim ženama i želi kad poraste da bude baš kao one. Ljubav prema kozmetici i šminci učinila je da nastane ovaj blog. Naša želja je da podelimo sve naše savete i iskustva sa vama. </h1>
                  <br></br>
                 <h1 className = "text">Hvala što posećujete naš web sajt i nadamo se da ćemo opravdati Vaše poverenje! </h1>



        
             

        </div>
   )

 }

export default About
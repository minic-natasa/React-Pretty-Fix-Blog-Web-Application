import React from 'react';
import './style.css';
import Card from '../UI/Card';
import logopic from '../../images/logo.png';

/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {
  return(

    <div className = "sidebarContainer">

      <Card style={{background:'white', borderRadius:'20px', border:'none', padding: '10px 2px', marginBottom: '20px',  boxSizing: 'border-box'}}> 
        
        <div className = "cardHeader">
          <span>About Us</span>
          <div className = "aboutUsImageContainer">
            <img src={logopic}></img>
          </div>

          <div className = "cardBody">
            <p className = "aboutUsBio">Svako žensko dete barem jednom u životu bude fascinirano lepim, našminkanim i negovanim ženama i želi kad poraste da bude baš kao one. Ljubav prema kozmetici i šminci učinila je da nastane ovaj blog. Naša želja je da podelimo sve naše savete i iskustva sa vama. Hvala što posećujete naš web sajt i nadamo se da ćemo opravdati Vaše poverenje! </p>
          </div>

        </div>

        </Card>

        <Card style={{background:'white', borderRadius:'20px', border:'none', padding: '10px',  boxSizing: 'border-box'}}> 
        
        <div className = "cardHeader">
          <span>Social Network</span>
        </div>

        </Card>

        <Card style={{background:'white', borderRadius:'20px', border:'none', padding: '10px',  boxSizing: 'border-box'}}> 
        
        <div className = "cardHeader">
          <span>Recent Posts</span>
        </div>

        <div className = "recentPosts">
          <div className = "recentPost">
              <h3>Title</h3>
              <span>date</span>
          </div>

          <div className = "recentPost">
              <h3>Title</h3>
              <span>date</span>
          </div>

        </div>

        </Card>

    </div>

    
   )

 }

export default Sidebar
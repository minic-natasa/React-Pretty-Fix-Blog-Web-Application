import React, {useState, useEffect} from 'react';
import './style.css';
import Card from '../UI/Card';
import logopic from '../../images/logo.png';
import blogPost from '../../data/blog.json';
import { NavLink } from 'react-router-dom';

/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {


  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    const posts = blogPost.data;
    setPosts(posts);
}, [posts]); //posts prosleđujemo kao niz ( final argument )


  return(

    <div className = "sidebarContainer" style = {{
        width: props.width 
    }}>

      <Card style={{background:'white', borderRadius:'20px', border:'none', padding: '10px 2px', marginBottom: '20px',  boxSizing: 'border-box'}}> 
        
        <div className = "cardHeader">
          <span className = "sidebarTitle">About Us</span>
          <div className = "aboutUsImageContainer">
            <img src={logopic} alt = "Logo"></img>
          </div>

          <div className = "cardBody">
            <p className = "aboutUsBio">Svako žensko dete barem jednom u životu bude fascinirano lepim, našminkanim i negovanim ženama i želi kad poraste da bude baš kao one. Ljubav prema kozmetici i šminci učinila je da nastane ovaj blog. Naša želja je da podelimo sve naše savete i iskustva sa vama. Hvala što posećujete naš web sajt i nadamo se da ćemo opravdati Vaše poverenje! </p>
          </div>

        </div>

        </Card>

        <Card style={{background:'white', borderRadius:'20px', border:'none', padding: '10px',  boxSizing: 'border-box'}}> 
        
        <div className = "cardHeader">
          <span className = "sidebarTitle">Categories</span>
          <ul className = "sidebarList">
            <li className = "sidebarListItem">Parfumes</li>
            <li className = "sidebarListItem">Body Care</li>
            <li className = "sidebarListItem">Skin Care</li>
          </ul>
        </div>

        </Card>

        <Card style={{background:'white', borderRadius:'20px', border:'none', padding: '10px',  boxSizing: 'border-box'}}> 
        
        <div className = "cardHeader">
          <span className = "sidebarTitle">Follow Us</span>
          <div className = "sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
        <i className="sidebarIcon fab fa-instagram-square"></i>
        <i className="sidebarIcon fab fa-pinterest-square"></i>
        <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
        </div>

        </Card>

       

    </div>

  
    
   )

 }

export default Sidebar
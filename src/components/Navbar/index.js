import React, {useState} from 'react';
import './style.css';
import img from '../../assets/icons/search.png';

/**
* @author
* @function Navbar
**/

const Navbar = (props) => {

    const [search, setSearch] = useState(false);


    const submitSearch = (e) => {
        e.preventDefault();
        alert('Searhed');

    }


    const openSearch = () => {
        setSearch(true);
    }


    const searchClass = search ? 'searchInput active' : 'searchInput';


  return(
    <div className="navbar">
        <ul className="navbarMenu">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Posts</a></li>
            <li><a href="#">Contact Us</a></li>
        </ul>

        <div className="search">
            <form onSubmit={submitSearch}>
                <input type="text" className={searchClass} placeholder="Search" />
                <img onClick={openSearch} className="searchIcon" src={img} alt="Search" />
            </form>
            
        </div>

    </div>
   )

 }

export default Navbar
import React from 'react';
import './style.css';

/**
* @author
* @function RecentPost
**/

const RecentPost = (props) => {
  return(
    <div className = "post">
       <div className = "postImageWrapper">
                    <img className = "postImg" src = {"https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"} alt = ""/>
                    </div>

                    <div className = "postInfo" style={{textAlign: 'center'}}>
                        <span className = "postCategory">Kategorija</span>
                        <h2 className = "postTitle">Naslov</h2>
                        <span className = "postDate">posted on Datum by Autor</span>
                        <p className = "postDesc">Tekst objave gfhfrdesyxfg dfgfdsd ghfdsgf fdcgnhrsy dhfhdn dfnydny dn sfn fns n sb sf bsf s f Tekst objave gfhfrdesyxfg dfgfdsd ghfdsgf fdcgnhrsy dhfhdn dfnydny dn sfn fns n sb sf bsf s f Tekst objave gfhfrdesyxfg dfgfdsd ghfdsgf fdcgnhrsy dhfhdn dfnydny dn sfn fns n sb sf bsf s f</p>

                        
                    </div>
    </div>
   )
  }


export default RecentPost
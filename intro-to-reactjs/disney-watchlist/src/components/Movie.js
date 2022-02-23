import React, { useState } from 'react';
import './Movie.css';
import notWatchedImg from '../images/not-watched.png';
import watchedImg from '../images/watched.png';
 
function Movie(props) {
   const [ watched, setWatched ] = useState(false);

   const changeWatchedState = () => {
       setWatched(!watched)
   }

   return(
       <div>
           <img id="cover" src={props.image}/>
           <div id="grid">
               <h3>{props.title}</h3>
               <img id="watched" src={watched ? watchedImg : notWatchedImg} onClick={changeWatchedState}/>
           </div>
           <p>{props.description}</p>
       </div>
   );
}
 
export default Movie;
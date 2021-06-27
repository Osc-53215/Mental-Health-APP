import React from 'react';
import './Abouts.css';
import image1 from  './photos/1.png';
import image2 from  './photos/2.png';
import image3 from  './photos/3.png';
import image4 from  './photos/4.png';
import image5 from  './photos/5.png';




function Abouts() {
    return (
        <div className = 'post'>

        <img className = 'post__image' src = {image1} alt = ''/>
        <img className = 'post__image' src = {image2} alt = ''/>
        <img className = 'post__image' src = {image3} alt = ''/>
        <img className = 'post__image' src = {image4} alt = ''/>
        <img className = 'post__image' src = {image5} alt = ''/>


    </div>
    )
}

export default Abouts
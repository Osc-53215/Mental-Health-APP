import React from 'react';
import './Infographics.css';
import image1 from  './photos/Infographic 1-1.png';
import image2 from  './photos/Infographic 2-1.png';
import image3 from  './photos/Infographic 3-1.png';
import image4 from  './photos/Infographic 3-2.png';
import image5 from  './photos/Infographic 3-3.png';




function Infographics() {
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

export default Infographics
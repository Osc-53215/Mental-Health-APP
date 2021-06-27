import React from 'react';
import './Resources.css';
import image1 from  './photos/image_1.png';
import image2 from  './photos/image_2.png';
import image3 from  './photos/image_3.png';
import image4 from  './photos/image_4.png';
import image5 from  './photos/image_5.png';
import image6 from  './photos/image_6.png';
import image7 from  './photos/image_7.png';
import image8 from  './photos/image_8.png';
import image9 from  './photos/image_9.png';
import image10 from  './photos/image_10.png';


function Resources() {
    return (
        <div className = 'post'>

        <img className = 'post__image' src = {image1} alt = ''/>
        <img className = 'post__image' src = {image2} alt = ''/>
        <img className = 'post__image' src = {image3} alt = ''/>
        <img className = 'post__image' src = {image4} alt = ''/>
        <img className = 'post__image' src = {image5} alt = ''/>
        <img className = 'post__image' src = {image6} alt = ''/>
        <img className = 'post__image' src = {image7} alt = ''/>
        <img className = 'post__image' src = {image8} alt = ''/>
        <img className = 'post__image' src = {image9} alt = ''/>
        <img className = 'post__image' src = {image10} alt = ''/>
    </div>
    )
}

export default Resources

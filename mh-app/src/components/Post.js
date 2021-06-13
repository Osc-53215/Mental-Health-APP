import React from 'react'
import './Post.css'

function Post({image, timestamp, message}) {
    return (
        <div className = 'post'>
            <div className = 'post__topInfo'>
                <p>Timestamp...</p>
            </div>
            <div className = 'post__bottom'>
                <p>{message}</p>
            </div>
            <div className = 'post__image'>
                <img src = {image} alt = ''/>
            </div>
        </div>
    )
}

export default Post

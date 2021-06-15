import React from 'react'
import './Post.css'
import { Avatar } from '@material-ui/core'
import EmojiEmotionsTwoToneIcon from '@material-ui/icons/EmojiEmotionsTwoTone';
import SentimentDissatisfiedTwoToneIcon from '@material-ui/icons/SentimentDissatisfiedTwoTone';
import ChatBubbleTwoToneIcon from '@material-ui/icons/ChatBubbleTwoTone';function Post({profilePic, username, image, timestamp, message}) {
    return (
        <div className = 'post'>
            <div className = 'post__top'>
                <Avatar  src = {profilePic}
                className = 'post__avatar'/>
                <div className = 'post__topInfo'>
                    <h3>{username}</h3>
                    <p>Timestamp...</p>
                </div>
            </div>
            <div className = 'post__bottom'>
                <p>{message}</p>
            </div>
            <div className = 'post__image'>
                <img src = {image} alt = ''/>
            </div>
            <div className = 'post__options'>
                <div className = 'post__option'>
                    <EmojiEmotionsTwoToneIcon />
                    <p>Like</p>
                </div>
                <div className = 'post__option'>
                    <ChatBubbleTwoToneIcon />
                    <p>Comment</p>
                </div>
                <div className = 'post__option'>
                    <SentimentDissatisfiedTwoToneIcon />
                    <p>Dislike</p>
                </div>

            </div>

        </div>
    )
}

export default Post

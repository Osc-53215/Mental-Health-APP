import React from 'react';
import './Feed.css';
import MessengerSender from './MessengerSender';
import Post from './Post';

function Feed() {
    return (
        <>
        <div className = 'feed'>
            <MessengerSender />
        </div>

        <div>
            <Post 
            message = 'WOW this is dope!!!'
            image = 'https://images.unsplash.com/photo-1623567576734-b6085e815d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80'
            timestamp = 'this is a timestamp'
            
            />
        </div>
    </>
    )
}

export default Feed

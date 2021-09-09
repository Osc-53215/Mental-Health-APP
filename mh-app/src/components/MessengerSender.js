import React, { useState } from 'react';
import './MessengerSender.css';
import db from './firebase';
import firebase from 'firebase';


function MessengerButton() {

    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            image: imageUrl,
        })
        
        setInput('')
        setImageUrl('')
    };

    return (
        <div className = 'messageSender'>
            <div className = 'messageSender__top'>
                
                <form>
                    <input 
                    value = {input}
                    onChange = {(e) => setInput(e.target.value)} 
                    className = 'messageSender__input' 
                    placeholder = {`What's on your mind`}
                    />

                    <input 
                    value = {imageUrl}
                    onChange = {(e) => setImageUrl(e.target.value)} 
                    placeholder = 'image URL (Optional)'/>

                    <button onClick = {handleSubmit} type = 'submit'>Hidden submit</button>
                </form>
            </div>
            
        </div>
    )
}

export default MessengerButton

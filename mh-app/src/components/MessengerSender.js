import React, { useState } from 'react';
import './MessengerSender.css';


function MessengerButton() {

    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
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

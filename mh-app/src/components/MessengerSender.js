import React from 'react';
import './MessengerSender.css';
import Avatar from '@material-ui/core';

function MessengerButton() {

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className = 'messageSender'>
            <div className = 'messageSender__top'>
                
                <form>
                    <input type = 'text' placeholder = {`What's on your mind`}/>
                    <input type = 'text' placeholder = 'image URL (Optional)'/>

                    <button onClick = {handleSubmit} type = 'submit'>Hidden submit</button>
                </form>

            </div>
        </div>
    )
}

export default MessengerButton

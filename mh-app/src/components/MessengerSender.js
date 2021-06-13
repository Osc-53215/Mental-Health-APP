import React from 'react';
import './MessengerSender.css';


function MessengerButton() {

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className = 'messageSender'>
            <div className = 'messageSender__top'>
                
                <form>
                    <input type = 'text' className = 'messageSender__input' placeholder = {`What's on your mind`}/>
                    <input type = 'text' placeholder = 'image URL (Optional)'/>

                    <button onClick = {handleSubmit} type = 'submit'>Hidden submit</button>
                </form>

            </div>
        </div>
    )
}

export default MessengerButton

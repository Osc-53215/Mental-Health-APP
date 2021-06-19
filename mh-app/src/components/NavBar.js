import React from 'react';
import {Link} from 'react-router-dom';


function NavBar() {
    return (
        <nav>
            <ul>
                <Link to = '/'>
                    <li>Home</li>
                </Link>
                <Link to = '/abouts'>
                    <li>Abouts</li>
                </Link>
                <Link to = '/resources'>
                    <li>Resources</li>
                </Link>

            </ul>
            
        </nav>
    )
}

export default NavBar

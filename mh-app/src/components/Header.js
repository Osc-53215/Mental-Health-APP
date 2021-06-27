import React from 'react';
import './Header.css';
import HighlightOffTwoToneIcon from '@material-ui/icons/HighlightOffTwoTone';import ForumIcon from '@material-ui/icons/ForumOutlined';
import {Avatar, IconButton} from '@material-ui/core';
import logo from './mh_logo.PNG';
import { Link, Route } from 'react-router-dom'

function Header() {
    return (
    <nav>
        <div className = 'header'>
            <div className = 'header__left'>
                <img 
                    src = {logo}
                    alt = ''
                />
            </div>

            <div className = 'header__center'>
                <div className = 'header__option'>
                    <Link to = '/' className='text-link'><h4>Home</h4></Link>
                </div>
                <div className = 'header__option'>
                    <Link to = '/abouts' className='text-link'><h4>Abouts</h4></Link>
                </div>
                <div className = 'header__option'>
                    <Link to = '/resources' className='text-link'><h4>Resources</h4></Link>
                </div>
                <div className = 'header__option'>
                    <Link to = '/inforgraphics' className='text-link'><h4>Infographics</h4></Link>
                </div>

            </div>


            <div className = 'header__right'>
                <div className = 'header__info'>
                    <Avatar src = 'https://scontent-ort2-2.xx.fbcdn.net/v/t1.6435-9/170122139_4045199688874900_4382704728184763151_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=1IMzvLGdYLMAX_P97qi&_nc_ht=scontent-ort2-2.xx&oh=ba77bd6732768b076fda497ddf1123ff&oe=60E68777'/>
                    <h4>Dr. Elizandra Sandoval</h4>
                </div>

                <IconButton>
                    <ForumIcon/>
                </IconButton>
                <IconButton>
                 <HighlightOffTwoToneIcon/>
                    
                    <Link to={{ pathname: "https://google.com" }} target="_blank" style = {{textDecoration: 'none', color: 'greenyellow'}}><p>Quick exit here</p></Link>

                </IconButton>
            </div>  
        </div>
    </nav>
    )
}

export default Header

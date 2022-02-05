import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faUserFriends, faBookmark, faBook } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './WelcomeContainer.css';


const WelcomeContainer = () => {
    return (
        <div className='welcome-container'>
            <div>
            <h3 className='welcome-title'>YOU ARE WELCOME</h3>
        </div>
    <div className='Benefits-of-courses'>
    <div className='icon-detail'>
            <FontAwesomeIcon className='icons' icon={faBookOpen} size='2x' color='aqua'></FontAwesomeIcon>
            <h5>Program</h5>  
        </div>
            
        <div className='icon-detail'>
           <FontAwesomeIcon style={{marginLeft:35}} icon={faUserFriends} size='2x' color='deeppink'></FontAwesomeIcon>
            <h5>Community</h5>
        </div>
        <div className='icon-detail'>
           <FontAwesomeIcon className='icons' icon={faBookmark} size='2x' color='goldenrod'></FontAwesomeIcon>
            <h5>Courses</h5>
        </div>
        <div className='icon-detail'>
            <FontAwesomeIcon style={{marginLeft:35}} icon={faBook} size='2x'></FontAwesomeIcon>
            <h5>Resources</h5>
        </div>
        <div>
            <h5>FEEL FREE TO ASK</h5>
            <h6 style={{marginTop:20}}>Discover Edcademy</h6>
            <h6 style={{color: 'deepskyblue'}}>Find Out More</h6>
        </div>
    </div>
        
    </div>
    );
};

export default WelcomeContainer;
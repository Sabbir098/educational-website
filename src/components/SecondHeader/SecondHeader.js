import React from 'react';
import './SecondHeader.css';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Button } from 'react-bootstrap';
// import { NavLink } from 'react-router-dom';
// import FirstDisplay from '../FirstDisplay/FirstDisplay';

// {/* <h6 style={{marginRight:30}}>Home</h6> */}

const SecondHeader = () => {
    return (
     <div>
          <div className='second-header'>
             <div className='title'>
             <FontAwesomeIcon className='icon'  icon={faGraduationCap} size='3x' color='deepskyblue'></FontAwesomeIcon>
             <h4>Edcademy</h4>
             </div>
             <div className='site-detail'>
             <h6 style={{marginRight:30}} to='/home'>Home</h6>
             <h6  style={{marginRight:30}}>About</h6>
             <h6 style={{marginRight:30}}>Courses</h6>
             <h6 style={{marginRight:30}}>Blog</h6>
             <h6  style={{marginRight:30}}>Gallery</h6>
             <h6  style={{marginRight:30}}>Events</h6>
             <h6  style={{marginRight:30}}>Tesitimonials</h6>
             <h6 >Contact</h6>
          </div>
     </div>
        
     </div>
    );
};

export default SecondHeader;
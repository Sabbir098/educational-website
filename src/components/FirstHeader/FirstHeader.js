import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import React from 'react';
import './FirstHeader.css';

const FirstHeader = () => {
    return (
        <div className='head-container'>
        <h6 style={{marginRight: 20, marginLeft: 100}}>Have any question ?</h6>
        <h6 style={{marginRight: 20}}><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> 01902194828</h6>
        <h6><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> info@eedcademy.com</h6>
        <button className='regular-btn'>Login</button>
        <button className='regular-btn'>Register</button>
        </div>
    );
};

export default FirstHeader;

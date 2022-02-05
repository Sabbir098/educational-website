import React from 'react';
import { Button } from 'react-bootstrap';

const FirstDisplay = () => {
    return (
        <div>
            <div className='web-description'>
             <h1 style={{color:''}}>Educating Students for Success <br /> In a Changing World</h1>
             <p style={{marginTop: 25}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam placeat eum minus <br /> maxime consectetur  architecto voluptatum,  cupiditate rerum hic officiis consequuntur corrupti <br /> quia animi officia incidunt  quisquam repellendus qui unde neque atque modi,<br /> dolore tenetur voluptate sequi? Dolore</p>
             <Button variant="primary">Learn more</Button>
         </div>
        </div>
    );
};

export default FirstDisplay;
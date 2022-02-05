import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './WhyEducation.css';
import logo from '../../05.png'
import logo2 from '../../02.png'

const WhyEducation = () => {
    return (
    <div>
            <div>
            <h3 className='edu-title'> WHY EDUCATION</h3>
            <p style={{textAlign:'center', marginTop:30}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos numquam libero incidunt accusantium, <br /> amet hic sunt reiciendis recusandae</p>
         </div>
    <div className='edu-container'>
         <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={logo} />
        <Card.Body>
        <Card.Title>Professional Teacher</Card.Title>
        <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
        </Card.Text>
        <Button variant="primary">Learn More </Button>
            </Card.Body>
            </Card>

         <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={logo2} />
        <Card.Body>
        <Card.Title>Professional Teacher</Card.Title>
        <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
        </Card.Text>
        <Button variant="primary">Learn More </Button>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={logo} />
        <Card.Body>
        <Card.Title>Professional Teacher</Card.Title>
        <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
        </Card.Text>
        <Button variant="primary">Learn More </Button>
            </Card.Body>
            </Card>
        </div>
    </div>
    );
};

export default WhyEducation;
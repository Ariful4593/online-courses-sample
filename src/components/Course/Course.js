import React from 'react';
import './Course.css'
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
const Course = (props) => {
    const {name,description,img,price} = props.course;
    return (
        
            <Col className="course-content" xs lg={4}>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>
                        Price: {price}
                    </Card.Text>
                    </Card.Body>
                    <Button variant="danger" onClick={() => {props.enrollHandle(props.course)}}>Enroll Now</Button>
                </Card>
            </Col>
            
       
    );
};

export default Course;
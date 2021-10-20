import React from 'react';
import { Card, Col , Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Service = (props) => {
    const {id, img, title, desc,price}=props.card
    return (
    <Col >
            <Card style={{boxShadow:"5.4px 10.7px 10.7px hsl(0deg 0% 0% / 0.33)",border:"none"}} className="text-center d-flex justify-content-center align-items-center pb-4 h-100">
                <div style={{width:"200px"}}>
                    <Card.Img variant="top" className="text-center" src={img}  style={{width:"100%"}}/>
                </div>
                <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                   {desc.slice(0,50)}
                </Card.Text>
                <Card.Text>
                   Price: ${price}
                </Card.Text>
                </Card.Body>
                <Link to ={`/service/${id}`}>
                    <Button  variant="danger">Click for Details!</Button>
                </Link>
            </Card>
    </Col>
    );
};

export default Service;
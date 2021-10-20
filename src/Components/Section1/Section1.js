import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import img1 from './img1.png'
import img2 from './img2.png'
import img3 from './img3.png'

const Section1 = () => {
    return (
        <div>
            <h1 className="text-center">
                What we provide
            </h1>
            <Row xs={1} md={3} className="g-4 container ">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={img1} />
                        <Card.Body  className="text-center">
                        <Card.Title>POSITIVITY</Card.Title>
                        <Card.Text>
                        We are nurturers: we seek only to encourage, entertain, and empower.Come as you are!
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={img2} />
                        <Card.Body  className="text-center">
                        <Card.Title>INCLUSIVITY</Card.Title>
                        <Card.Text>
                        Here we keep open minds. There is no one type or way in our diverse community. 
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={img3}/>
                        <Card.Body  className="text-center">
                        <Card.Title>FUN</Card.Title>
                        <Card.Text>
                        We know serious fitness is hard, but that doesn’t mean it can’t be an edge-of-your-seat.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Section1;
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import gym from './gym.svg'
const Section2 = () => {
    return (
        <Container className="mt-5 pt-5 mb-5 pb-5">
            <Row className="mt-3 pt-5 mb-5 pb-5 me-5">
                <Col className="d-flex justify-content-center align-items-center"><img style={{width:"400px"}} src={gym} alt="" /></Col>
                <Col className="mt-3 pt-5">
                    <div>
                        <h1>In our gym</h1>
                        <p >It’s One-on-Wonderful
                                    Here at Fitnesia, we focus on bringing you the most powerful workouts to meet your needs: our toolbox includes weighted battle ropes, kettlebells, TRX® suspension straps, MMA equipment, Bulgarian Bags, and the list goes on.

                                    It may sound like a mouthful, but this world-class functional training equipment helps our trainers provide  you with an array of High Intensity Interval Training (HIIT) workouts</p>
                    </div>
                </Col>
            </Row>
        </Container>
             
        
    );
};

export default Section2;
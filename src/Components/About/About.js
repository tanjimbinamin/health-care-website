import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <Container className="pt-5 mt-5">
                    <Row>
                       <Col>
                        <Accordion className="pt-1 mt-1" defaultActiveKey="0" >
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>BEFORE Fitnesia</Accordion.Header>
                                <Accordion.Body>
                                In the “olden days,” there weren’t many options for working out.  But Joe Gold, our founder, had a passion for bodybuilding.  He found success as a professional “muscleman” and toured with celebrities.  Out of necessity, he built much of his own training equipment.  He would go on to launch an international fitness brand while becoming known as the father of bodybuilding.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>MUSCLE BEACH</Accordion.Header>
                                <Accordion.Body>
                                World Gym and the modern fitness revolution can be traced back to the glory days of Muscle Beach in Los Angeles, California.  In 1976, Joe Gold opened a small gym filled with custom-made equipment.  Before long, World Gym was the fitness destination for celebrity bodybuilding greats such as Arnold Schwarzenegger, Lou Ferrigno, and Dave Draper.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>THE FITNESS REVOLUTION</Accordion.Header>
                                <Accordion.Body>
                                By the early 1980s, World Gym was firmly established as a global fitness icon.  The brand expanded with franchise locations across the United States and abroad.  The personal fitness revolution was now in full swing, fueled in large part by convenient, affordable World Gym locations.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>A RICH LEGACY</Accordion.Header>
                                <Accordion.Body>
                                World Gym continued to grow, with a culture formed by the Muscle Beach lifestyle.  Joe Gold passed away in 2004, leaving behind a rich legacy of fitness excellence.  His innovations and his values continue to drive the brand today.

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        </Col>
                        <Col><img style={{borderRadius:"20px"}} src="https://media.istockphoto.com/photos/muscular-trainer-writing-on-clipboard-picture-id675179390?k=20&m=675179390&s=612x612&w=0&h=7LP7-OamGu-b8XG-VKcJuamK5s80ke-4oJ5siUrjFVA=" alt="" /></Col>
                    </Row>
            </Container>
        </div>
    );
};

export default About;
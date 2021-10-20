import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img1 from './img1.svg'
import img2 from './img2.svg'

const Blog = () => {
    
    return (
        <div>
            <h1 className="text-center mt-5 pt-2 "><strong>What will you gain by Joining our Gym Center</strong></h1>
            <br />
            <h1 style={{borderBottom:"7px dotted rgb(24, 185, 185)",width:"7%",margin:"auto",marginBottom:"7rem"}}/>
            <Container>
                <Row className="mb-5 shadow" style={{borderRadius:"13px"}}>
                    <Col className="mx-5 px-5 pt-5"><img style={{width:"300px"}} src={img1} alt="" /></Col>
                    <Col className="ms-5 ps-5 mt-5 mb-5" >
                        <h1>Learn to workhard, on your schedule</h1>
                        <br />
                        <h4>At they gym, you'll fid lots of equipment such as weight lifting machines, exercise bikes, ellipticals, and treadmills. Most health clubs also offer jogging tracks and areas for aerobics, as well as classes in fitness activities such as Zumba</h4>
                    </Col>
                </Row>
                <Row className="mb-5 mt-5 pt-5 shadow" style={{borderRadius:"13px"}}>
                    <Col className="mx-1 ">
                        <h1 className="pb-5">Build your confidence</h1>
                        <br />
                        <h4>spinning classes. Most gyms offer changing rooms nowadays. Some even have whirlpools, steam rooms, and saunas to help you relax and unwind your muscles after a long hard workout.</h4>
                    </Col>
                    <Col className="ms-5 ps-5 mb-5 "><img className="ms-5 " style={{width:"300px"}} src={img2} alt="" /></Col>
                </Row>
                
            </Container>
        </div>
    );
};

export default Blog;
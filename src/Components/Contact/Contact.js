import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Contact.css'
import img from './img.svg'


const Contact = () => {
    return (     
            <Row>
             <Col className="mt-5 ms-5 ps-5 ">
                <h1 className="mt-1 ms-5 ps-5 text-center">contact with us</h1>
                <hr />
                <img style={{width:"90%"}} src={img} alt="" />
             </Col>   
               
             <Col>
                    <div className="contact-form ">
                        <h2>Contact Us</h2>
                        <form className="contact " action="" method="post"/>
                        <input type="text" name="name" className="text-box" placeholder="Your Name" required/>
                        <input type="email" name="email" className="text-box" placeholder="Your Email" required/>
                        <textarea name="message" rows="5" placeholder="Your Message" required/>
                        <input type="submit" name="submit" className="send-btn" value="Send"/>
                    </div>
             </Col>
             </Row>
            
       
            
        
    );
};

export default Contact;
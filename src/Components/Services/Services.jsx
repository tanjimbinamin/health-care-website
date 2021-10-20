import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service'

const Services = () => {

    const [cards, setCards]=useState([])

    useEffect(()=>{
        fetch('./instruments.json')
        .then(res=>res.json())
        .then(data=>setCards(data))
    },[])
    
    return (
        <div>
            <h1 className="mt-5 mb-5 pt-5 text-center">OUR SERVICES</h1>

            <Row xs={1} md={3} className="g-4 container">
                {
                    cards.map(card=> <Service key={card.id} card={card}></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;
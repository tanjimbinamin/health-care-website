import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';


const ServiceDetail = () => {
    const{id}=useParams()
    const [details,setDetails]=useState([])
    useEffect(()=>{
        fetch('/instruments.json')
        .then(res=>res.json())
        .then(data=>setDetails(data))
    },[])
   console.log(details)
   
    const selected=details?.filter(dl=>dl.id===Number(id))
    

    return (
        
        <Container  >
            <Row style={{backgroundColor:"#6062df", borderRadius:"10px",boxShadow: "7.0px 14.1px 14.1px hsl(0deg 0% 0% / 0.28)" ,overFlow:"hidden"}} className="mt-5 shadow-3">
                <Col sm={4} className="text-center"><img className="mt-4 mb-3 mx-1" style={{width:"80%",height:"80%",borderRadius:"10px"}} src={selected[0]?.img} alt="tor matha" /></Col>
                <Col sm={8} style={{backgroundColor:"#8b8ba6", borderRadius:"10px",paddingTop:"15px"}} >
                    <h5><span style={{color:"#ffff"}}>Name:</span> {selected[0]?.title}</h5>
                    <h5><span style={{color:"#ffff"}}>Description:</span> {selected[0]?.desc}</h5>
                    <h5><span style={{color:"#ffff"}}>Price: </span>${selected[0]?.price}</h5>
                    <h5><span style={{color:"#ffff"}}>Trainer:</span> {selected[0]?.provider}</h5>
                    <h5><span style={{color:"#ffff"}}>Rating:</span> {selected[0]?.rating}</h5>
                    <h5><span style={{color:"#ffff"}}>Reviews by:</span> {selected[0]?.count} people</h5>
                    <h5><span style={{color:"#ffff"}}>Imported by :</span> {selected[0]?.brand}</h5>
                </Col>
                
            </Row>
        </Container>
       
    );
};

export default ServiceDetail;
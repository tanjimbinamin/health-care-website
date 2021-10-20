import React ,{useEffect, useState}from 'react';
import { Card, Col,Container,Row} from 'react-bootstrap';

const Trainer = () => {

    const[trainers,setTrainers]=useState([])

    const trainersDetails=[

        {name:"Aren cesar",img:"https://skalp.com/wp-content/uploads/2016/08/bald-man-in-gym.png"},
        {name:"Arnold",img:"https://p.scooper.news/v2-EagleNews/Eagle-NewsImage/detail/20210328/f892db6ecdc88262b4716819f614d57e.webp"},
        {name:"Robinson",img:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/celebrity-fitness-trainer-harley-pasternak-helped-introduce-news-photo-518418190-1538158845.jpg"},
        {name:"Mactovish",img:"https://i.ibb.co/pL1fdBQ/Screenshot-2021-10-20-190024.png"},
        {name:"John Cena",img:"https://manofmany.com/wp-content/uploads/2021/06/john-cena-workout-and-diet-plan-1200x800.jpg"},
        {name:"Cavin Price",img:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F35%2F2013%2F03%2F16185852%2Fscott-thomson-420x420_0.jpg"}
    ]
    useEffect(()=>{
        setTrainers(trainersDetails)
    },[])
    return (
        
            <div className="text-center">
                    <h1>
                        We have the worlds best trainer
                    </h1>
                    <p>
                        A dedicated trainer can boost your confidence
                    </p>
                    <Container>
                        <Row xs={1} md={3} className="g-5">
                            {
                                trainers.map(trainer=> 
                                <Col  >
                                    <Card style={{border:"none",boxShadow: "6.4px 12.8px 12.8px hsl(0deg 0% 0% / 0.30)"}} className="d-flex justify-content-center align-items-center h-100">
                                    <Card.Img variant="top" style={{width:"250px",height:"250px",borderRadius:"20px",marginTop:"20px"}} src={trainer.img} />
                                    <Card.Body>
                                        <Card.Title>{trainer.name}</Card.Title>
                                    </Card.Body>
                                    </Card>
                                </Col>)
                            }
                        </Row>
                    </Container>
            </div>
        
    );
};

export default Trainer;
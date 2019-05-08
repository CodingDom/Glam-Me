import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import { Row, Container} from "../Grid/index";

const images = require("../../images.json");

function ProfileCarousel(props) {
    return (
       <Container fluid  >
        <Row>
        <Carousel style={{height:"300px", marginTop:"50x;", marginLeft:"20px", marginRight: "20px"}}>
  {images.map(currImage => (
    <Carousel.Item key={currImage.Id}style={{height:"100%",width:"100%"}}>
    <div style={{height:"100%",width:"25%",backgroundImage:`url(${currImage.image})`,backgroundSize:"cover",backgroundPosition:"center"}}></div>
    <div style={{height:"100%",width:"25%",backgroundImage:`url(${currImage.image})`,backgroundSize:"cover",backgroundPosition:"center"}}></div>
    <div style={{height:"100%",width:"25%",backgroundImage:`url(${currImage.image})`,backgroundSize:"cover",backgroundPosition:"center"}}></div>
    <div style={{height:"100%",width:"25%",backgroundImage:`url(${currImage.image})`,backgroundSize:"cover",backgroundPosition:"center"}}></div>
  </Carousel.Item>
  ))}
</Carousel>
        </Row>
       </Container>
    )
}

export default ProfileCarousel;
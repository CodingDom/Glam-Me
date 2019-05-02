import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import { Row, Container} from "../Grid/index";

const images = require("../../images.json");

function ProfileCarousel(props) {
    return (
       <Container fluid  >
        <Row>
        <Carousel style={{height:"300px", marginTop:"50px;", marginLeft:"20px", marginRight: "20px"}}>
  {images.map(currImage => (
    <Carousel.Item style={{height:"100%",width:"100%"}}>
    <div style={{height:"100%",width:"100%",backgroundImage:`url(${currImage.image})`,backgroundSize:"cover",backgroundPosition:"center"}}></div>
    <Carousel.Caption>
      <h3>GLame Me</h3>
      <p>The Best of Beauty !!</p>
    </Carousel.Caption>
  </Carousel.Item>
  ))}
</Carousel>
        </Row>
       </Container>
    )
}

export default ProfileCarousel;
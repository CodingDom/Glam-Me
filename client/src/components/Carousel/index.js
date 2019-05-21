import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import { Row, Container} from "../Grid/index";
import "./style.css";

const images = require("../../HomepageCarousel.json");

function carousel() {
    return (
       <Container fluid  >
        <Row>
          <Carousel indicators={false} style={{height:"500px"}}>
            {images.map(currImage => (
              <Carousel.Item style={{height:"100%",width:"100%"}}>
              <div style={{height:"100%",width:"100%",backgroundImage:`url(${currImage.image})`,backgroundSize:"cover",backgroundPosition:"center"}}></div>
            </Carousel.Item>
            ))}
          </Carousel>
         
        </Row>
       </Container>
    )
}

export default carousel;

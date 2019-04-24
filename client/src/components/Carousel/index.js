import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import { Row, Container} from "../Grid/index";
import "./style.css";



function carousel() {
    return (
       <Container fluid  >
        <Row>
        <Carousel >
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://imgs.mongabay.com/wp-content/uploads/sites/20/2019/01/30012227/madagascar_lemurs_0023-100x100.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Ftimedotcom.files.wordpress.com%2F2014%2F04%2Fdisappearing-animals-006.jpg%3Fquality%3D85&w=412&c=sc&poi=face&q=85"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Ftimedotcom.files.wordpress.com%2F2014%2F04%2Fdisappearing-animals-006.jpg%3Fquality%3D85&w=412&c=sc&poi=face&q=85"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </Row>
       </Container>
    )
}

export default carousel;
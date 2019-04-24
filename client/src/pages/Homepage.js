import React, { Component } from "react";
import Carousel from "../components/Carousel/index";
import { Container} from "../components/Grid/index";
import Jumbotron from "../components/Jumbotron/index";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./Homepage.css";
class Homepage extends Component {
    state = {  }
    render() {
        return (
        <Container >
            <Carousel className="carousel" />
            <div className="homepageJumbo">
         
                <Jumbotron />

               <Link to="/register">
               <Button variant="primary">Register Now</Button>
               </Link>
            </div>

        </Container>
        );
    }
}

export default Homepage;
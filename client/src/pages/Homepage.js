import React, { Component } from "react";
import Carousel from "../components/Carousel/index";
import { Container} from "../components/Grid/index";
import Jumbotron from "../components/Jumbotron/index";
import Button from "react-bootstrap/Button";
import Parallax from "../components/Parallax/index";
import { Link } from "react-router-dom";
import FadeIn from 'react-fade-in';
import NavBar from "../components/NavBar/index";
import "./Homepage.css";

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = props.info;
        console.log(this.state);
    }

    componentDidMount() {
        this.setState(this.props.info);
        document.querySelector("nav").style.display = "none";
        document.querySelector(".navBarContainer").parentElement.style.zIndex = "20";
    }
    componentWillUnmount() {
        document.querySelector("nav").style.display = "flex";
    }

    render() {
        return (
            <FadeIn>
                <div className="parallaxHome">
                    <Parallax />
                </div>
                <div className="navBarContainer">
                <div className="navBarHome">
                <NavBar loggedIn={this.state.loggedIn} name={this.state.name} id={this.state.id} test="bye" />
                </div>
                </div>
                
                
        <Container >
            <Carousel  />
            <div className="homepageJumbo">
         
                <Jumbotron />

               <Link to="/register">
               <Button style={{  boxShadow: "0 3px 6px #999, 0 3px 6px #999"}}variant="primary">Register Now</Button>
               </Link>
            </div>

        </Container>
        </FadeIn>
        );
    }
}

export default Homepage;
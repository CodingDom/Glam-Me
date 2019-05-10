import React, { Component } from "react";
import Carousel from "../components/Carousel/index";
import { Container} from "../components/Grid/index";
import Jumbotron from "../components/Jumbotron/index";
import Button from "react-bootstrap/Button";
import Parallax from "../components/Parallax/index";
import { Link } from "react-router-dom";
import FadeIn from 'react-fade-in';
import "./Homepage.css";
const $ = window.$;
class Homepage extends Component {
    state = { }
    constructor(props) {
        super(props);
        this.state = (props.info);
    }

    componentDidMount() {
        const origin = document.querySelector("nav").parentElement;
        this.setState({...this.props.info, origin});
        const currActive = document.querySelector(".navbar-nav .active");
        currActive && currActive.classList.remove("active");
        document.querySelector(`.navbar-nav [data-location="${window.location.pathname}"]`).classList.add("active");
        document.querySelector("nav").parentElement.insertBefore(document.querySelector(".parallaxHome"),document.querySelector("nav"));
        // console.log($(window).width()*.581, $(window).height()/2.5);
        // if ($(window).width()*.581 < $(window).height()/2.5) {
        //     $(".parallaxContainer").css("height","58.1vw")
        // }
        // $(window).on("resize", function() {
        //     console.log($(window).width()*.581, $(window).height()/2.5);
        //     if ($(window).width()*.581 < $(window).height()/2.5) {
        //         $(".parallaxContainer").css("height","58.1vw")
        //     }
        // });
    }
    componentWillUnmount() {
        document.querySelector(".parallaxHome").remove();
    }

    render() {
        
        return (
            <FadeIn>
                <div className="parallaxHome">
                    <Parallax />
                </div>
                <div className="navBarContainer">
                <div className="navBarHome">
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
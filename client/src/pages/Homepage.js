import React, { Component } from "react";
import Carousel from "../components/Carousel/index";
import { Container} from "../components/Grid/index";
import Jumbotron1 from "../components/Jumbotron/index";
import {Button, Jumbotron} from "react-bootstrap";
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
                
                
        <Container fluid className="main" >
        <div className="homepageJumbo1">
         
                <Jumbotron1 />
            </div>
            <Carousel  />

            <div className="homepageJumbo2">
            <Jumbotron fluid style={{   backgroundColor:"transparent", color:"black", textAlign:"center"}}>
            <Container >
            <h1 style={{fontFamily: "Lobster, cursive", fontSize:"50px"}}>Services Offered</h1>
            <hr />
            <p style={{fontSize:"x-large", lineHeight:"50px", letterSpacing:"1px"}}>
                
            </p>
            <div style={{textAlign:"left",marginLeft:"30%",width:"60%", fontSize:"x-large"}}>
            <ul style={{width:"50%",float:"left", listStyleImage:"url('/images/goldenArrow.png')"}}>
                <li>Eyelashes</li>
                <li>Hair</li>
                <li>Makeup</li>
                <li>Nails</li>
            </ul>
            <ul style={{width:"50%",float:"right", listStyleImage:"url('/images/goldenArrow.png')"}}>
                <li>Facials</li>
                <li>Massages</li>
                <li>Microblading</li>
                <li>Waxings</li>
            </ul>
            </div>
            </Container>
        </Jumbotron>


       
     </div>
           

        </Container>
        </FadeIn>
        );
    }
}

export default Homepage;

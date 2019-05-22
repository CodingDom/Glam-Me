import React, { Component } from "react";
import { Redirect , Link} from "react-router-dom";
import ServiceCards from "../components/ServicesCards/index";
import ArtistCards from "../components/ArtistCards/index";
import StylesCards from "../components/StyleCards/index"; 
import "./Appointments.css";
import { Col, Row, Container} from "../components/Grid/index";
import ImageUploader from 'react-images-upload';
import Parallax from "../components/Parallax/index";

import Button from "react-bootstrap/Button";
import serviceImage from "../serviceimages.json";

class Appointments extends Component {
     constructor (props){
         super(props);
         this.state = {
            servicesVisible: true,
            servicePicked: "",
            stylesPicked: "",
            stylesVisible: false,
            artistVisible: false,
             pictures: [] ,
           
            
         }
         this.onDrop = this.onDrop.bind(this)
     }
    
     onDrop = (picture) => {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });

        if(this.state.pictures){
            console.log("theres an image")
        }
    }
    
    handleInputChange = event => {
        const{ name, value} = event.target;
        this.setState({
            [name]: value
        });

    };
 
    handleServiceOnClick = event => {
        const elem= event.currentTarget;
        const val = elem.getAttribute("data-service");
   
        this.setState(
            { 
                servicePicked : val,
                servicesVisible : false, 
                stylesVisible: true 
            })
         
    }
    handleStylesOnClick = event => {
        const elem= event.currentTarget;
        const val = elem.getAttribute("data-style");
    
      
        this.setState({  
            stylesPicked: val,
            stylesVisible: false , 
            artistVisible: true
        })
       
    }
    handleArtisteOnClick = event => {
        const elem= event.currentTarget;
        const val = elem.getAttribute("data-artist");
        this.setState(
            { 
                servicePicked : val,
                servicesVisible : false, 
                stylesVisible: true 
            })
    }

    componentDidMount() {
        const currActive = document.querySelector(".navbar-nav .active");
        currActive && currActive.classList.remove("active");
        document.querySelector(`.navbar-nav [data-location="${window.location.pathname}"]`).classList.add("active");
        document.querySelector("nav").parentElement.insertBefore(document.querySelector(".parallaxHome"),document.querySelector("nav"));
    }

    componentWillUnmount() {
        document.querySelector(".parallaxHome").remove();
    }

    render() {
        
        return (
       
            <Container className="appointmentWrapper">
            <div className="parallaxHome">
                    <Parallax />
                </div>
            {/* <Row>
                <Col size="md-12">
                <div className="appointmentMsgContainer">
               
                </div>
                </Col>
                </Row> */}

                {/* <div className="cardsWrapper"> */}
                <Row>
                <div style={{margin:"auto"}}className="appointmentMsgText">
               {this.state.servicesVisible ? <h1>Select a service</h1> : null}
                {this.state.stylesVisible ? <h1>Select a style</h1> : null}
                {this.state.artistVisible ? <h1>Choose a possible Artist</h1> : null}
               </div>
               {this.state.servicesVisible ?
                <Col size="md-12">
                 <div className="serviceCards" >
                  <ServiceCards   onClick={this.handleServiceOnClick} /> 
                 </div>
                </Col>
                : null}
                {this.state.stylesVisible ?
                <Col size="md-12">
               <div className="stylesCards">
                <StylesCards getStyles={() => serviceImage.filter(style => { return style.service === this.state.servicePicked})[0]} onClick={this.handleStylesOnClick} /> 
               
               </div>
               {/* {this.state.stylesVisible ? <Link to={`/technicians?service=${this.state.servicePicked}&style=uploadingimage`}> <Button variant="primary">Continue to booking</Button> </Link> : null} */}
                </Col> 
                : null}
                <Col size="md-12">
               <div className="artistCards">
               {this.state.artistVisible ? <Redirect to={`/technicians?service=${this.state.servicePicked}&style=${this.state.stylesPicked}`} /> : null}
               </div>
                </Col>
              
               
            </Row>
            {/* </div> */}
            </Container>
            
        );
    }
}

export default Appointments;
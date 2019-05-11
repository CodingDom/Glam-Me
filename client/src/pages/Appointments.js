import React, { Component } from "react";
import { Redirect , Link} from "react-router-dom";
import ServiceCards from "../components/ServicesCards/index";
import ArtistCards from "../components/ArtistCards/index";
import StylesCards from "../components/StyleCards/index"; 
import "./Appointments.css";
import { Col, Row, Container} from "../components/Grid/index";
import ImageUploader from 'react-images-upload';

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
    }

    render() {
        
        return (
       
            <Container fluid className="appointmentWrapper">
            <Row>
                <Col size="md-12">
                <div className="appointmentMsgContainer">
               
                </div>
                </Col>
                </Row>

                <div className="cardsWrapper">
                <Row>
                <div style={{margin:"auto"}}className="appointmentMsgText">
               {this.state.servicesVisible ? <h1>Select a service</h1> : null}
                {this.state.stylesVisible ? <h1>Select your favorite style or upload images on booking page</h1> : null}
                {this.state.artistVisible ? <h1>Choose a possible Artist</h1> : null}
               </div>
                <Col size="md-12">
                 <div className="serviceCards" >
                 {this.state.servicesVisible ? <ServiceCards   onClick={this.handleServiceOnClick} /> : null}
                 </div>
                </Col>
                <Col size="md-12">
               <div className="stylesCards">
               {this.state.stylesVisible ? <StylesCards getStyles={() => serviceImage.filter(style => { return style.service === this.state.servicePicked})[0]} onClick={this.handleStylesOnClick} /> : null}
               
               </div>
               {this.state.stylesVisible ? <Link to={`/artist?service=${this.state.servicePicked}&style=uploadingimage`}> <Button variant="primary">Continue to booking</Button> </Link> : null}
                </Col> 
                <Col size="md-12">
               <div className="artistCards">
               {this.state.artistVisible ? <Redirect to={`/artist?service=${this.state.servicePicked}&style=${this.state.stylesPicked}`} /> : null}
               </div>
                </Col>
              
               
            </Row>
            </div>
            </Container>
            
        );
    }
}

export default Appointments;
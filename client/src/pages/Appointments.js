import React, { Component } from "react";
import ServiceCards from "../components/ServicesCards/index";
import ArtistCards from "../components/ArtistCards/index";
import StylesCards from "../components/StyleCards/index"; 
import "./Appointments.css";
import { Col, Row, Container} from "../components/Grid/index";
import serviceImage from "../serviceimages.json";

class Appointments extends Component {
     constructor (props){
         super(props);
         this.state = {
            servicesVisible: true,
            servicePicked: "",
            stylesPicked: "",
            stylesVisible: false,
            artistVisible: false

            
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

    render() {
        console.log(this.state)
        return (
       
            <Container fluid>
            <Row>
                <Col size="md-12">
                <div className="appointmentMsgContainer">
               <div className="appointmentMsgText">
               {this.state.servicesVisible ? <h1>Select a service</h1> : null}
                {this.state.stylesVisible ? <h1>Select your favorite style or upload images below</h1> : null}
                {this.state.artistVisible ? <h1>Choose a possible Artist</h1> : null}
               </div>
                </div>
                </Col>
                <Col size="md-12">
                 <div className="serviceCards">
                 {this.state.servicesVisible ? <ServiceCards   onClick={this.handleServiceOnClick} /> : null}
                 </div>
                </Col>
                <Col size="md-12">
               <div className="stylesCards">
               {this.state.stylesVisible ? <StylesCards getStyles={() => serviceImage.filter(style => { return style.service === this.state.servicePicked})[0]} onClick={this.handleStylesOnClick} /> : null}
               </div>
                </Col> 
                <Col size="md-12">
               <div className="artistCards">
               {this.state.artistVisible ? <ArtistCards onClick={this.handleArtisteOnClick}  /> : null}
               </div>
                </Col>
               
            </Row>
            </Container>
            
        );
    }
}

export default Appointments;
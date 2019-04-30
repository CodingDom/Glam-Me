import React, { Component } from "react";
import ServiceCards from "../components/ServicesCards/index";
import ArtistCards from "../components/ArtistCards/index";
import StylesCards from "../components/StyleCards/index"; 
import "./Appointments.css";
import { Col, Row, Container} from "../components/Grid/index";
import ServiceCards from "../components/ServicesCards/index";

class Appointments extends Component {
     constructor (props){
         super(props);
         this.state = {
            servicesVisible: true,
            servicePicked: "",
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
 
    render() {
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
                 {this.state.servicesVisible ? <ServiceCards  onChange={this.handleInputChange} onClick={() =>
                this.setState({ servicesVisible : false, stylesVisible: true })} /> : null}
                 </div>
                </Col>
                <Col size="md-12">
               <div classname="stylesCards">
               {this.state.stylesVisible ? <StylesCards onClick={() =>
                this.setState({  stylesVisible: false , artistVisible: true})} /> : null}
               </div>
                </Col> 
                <Col size="md-12">
               <div classname="artistCards">
               {this.state.artistVisible ? <ArtistCards onClick={() =>
                this.setState({  artistVisible: false})}  /> : null}
               </div>
                </Col>
               
            </Row>
            </Container>
            
        );
    }
}

export default Appointments;
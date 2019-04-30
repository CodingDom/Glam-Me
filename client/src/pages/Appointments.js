import React, { Component } from "react";
import FadeIn from 'react-fade-in';
import ServicesCards from "../components/ServicesCards/index";
import "./Appointments.css";
import { Col, Row, Container} from "../components/Grid/index";
import ServiceCards from "../components/ServicesCards/index";

class Appointments extends Component {
    state = {  
        services : ["Hair", "Nails", "Makeup", "Massage", "Facials", "Waxing" ],
        clickedOn : "Select a service",
    }
    render() {
        return (
            <FadeIn>
            <Container fluid>
            <Row>
                <Col size="md-10">
                    <div className="serviceMessage">
                    {this.state.clickedOn}
                    </div>
                
                </Col>
            </Row>
            <Row>
            <Col size="md-10">
            <div className= "servicesCards">
                <ServiceCards />
            </div>
            </Col>
            </Row>
            </Container>
            </FadeIn>
        );
    }
}

export default Appointments;
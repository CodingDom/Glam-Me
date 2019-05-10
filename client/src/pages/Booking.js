import React from "react";
import { Col, Row, Container} from "../components/Grid/index";
import Button from "react-bootstrap/Button";
import "./Booking.css";
import Calendar from "../components/Calendar/index";

export default class Booking extends React.Component {
    constructor(props){
        super(props)

        this.state= {
            clientName: ""
,           technicianName: "",
            appointmentTime: "",
            clientImages: [],
            selectedDay: undefined,
        }

    }

    handleDayClick = (day) => {
        this.setState({ selectedDay: day });
      }

    render() {

        return (
            <Container className="main" fluid >
            <Row>
                <Col size="md-12">
                <Calendar />
                {/* <div className="wrapper">
                <h2>Book an Appointment</h2>
                <br />
                <strong>With: {this.state.technicianName}</strong>
                <br />
                <strong> Client: {this.state.clientName}</strong>
                <br />

                Client Images : [],
                <br />



                
                
            
                
                <Button  variant="warning"> Book Now</Button>
                </div>

              */}
                </Col>
            </Row>
            </Container>
        )
    }
}
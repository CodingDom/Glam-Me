import React from "react";
import { Col, Row, Container} from "../components/Grid/index";
import DayPicker from 'react-day-picker';
import Button from "react-bootstrap/Button";
import "./Booking.css";
import 'react-day-picker/lib/style.css';


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
            <Container fluid >
            <Row>
                <Col size="md-12">
                <div className="wrapper">
                <h2>Book an Appointment</h2>
                <br />
                <strong>With: {this.state.technicianName}</strong>
                <br />
                <strong> Client: {this.state.clientName}</strong>
                <br />

                Client Images : [],
                <br />



                <DayPicker onDayClick={this.handleDayClick} />
            {this.state.selectedDay ? (
            <p>You selected {this.state.selectedDay.toLocaleDateString()}</p>
            ) : (
             <p>Please select a day.</p>
            )}

            
                
                <Button  variant="warning"> Book Now</Button>
                </div>

             
                </Col>
            </Row>
            </Container>
        )
    }
}
import React from "react";
import { Col, Row, Container} from "../components/Grid/index";
import "./ViewAppointments.css";


export default class ViewAppointments extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            BookedAppointments: [],

        }
    }

    componentDidMount(){
        //grab data
    }

    render(){
        return (
            <Container fluid >
            <Row>
            <Col size="md-12">
                <div className="appointmentWrapper">
                <h2>Booked Appointments</h2>
                <hr />
                
                </div>
            </Col>
            </Row>
            </Container>
        )
    }
}
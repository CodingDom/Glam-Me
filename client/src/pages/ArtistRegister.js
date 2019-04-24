import React, { Component } from "react";
import { Col, Row, Container} from "../components/Grid/index";
import ArtistForm from "../components/ArtistForm/index";
import LoginForm from "../components/LoginForm/index";
import "./ArtistRegister.css";

class ArtistRegister extends Component {
    state = {  }
    render() {
        return (
            <Container fluid>
            <Row>
                <Col size="md-4">
                <div className="artistRegisterForm">
                <h3>Artist sign up</h3>
                <hr></hr>
                <ArtistForm />
                </div>
                </Col>
                <Col size="md-4">
                <div className="artistLoginForm">
                <h3>Artist Login</h3>
                <hr></hr>
                <LoginForm />
                </div>
                </Col>
            </Row>
            </Container>
        );
    }
}
export default ArtistRegister;
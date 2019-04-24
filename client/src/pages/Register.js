import React, { Component } from "react";
import { Col, Row, Container} from "../components/Grid/index";
import { Link } from "react-router-dom";
import Form from "../components/Form/index";
import LoginForm from "../components/LoginForm/index"
import Button from 'react-bootstrap/Button';
import "./Register.css";

class Register extends Component {
    state = {  }
    render() {
        return (
            <Container fluid>
            <Row>
                <Col size="md-5">
                <div className="userRegisterForm">
                <h3>Client Sign Up</h3>
                <hr></hr>
                <Form  />
                </div>
                </Col>
                <Col size="md-3">
                <div className="userLoginForm">
                <h3>Client Login</h3>
                <hr></hr>
                <LoginForm />

                
                </div>
                </Col>
                <Col size="md-2">
                <div>
                <Link to="/artistRegister">
                <Button variant="danger">
                Register as artist
                </Button>
                </Link>
                </div>
                </Col>

            </Row>
            </Container>
        );
    }
}
export default Register;
import React, { Component } from "react";
import { Col, Row, Container} from "../components/Grid/index";
import { Link } from "react-router-dom";
import Form from "../components/Form/index";
import LoginForm from "../components/LoginForm/index"
import Button from 'react-bootstrap/Button';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import "./Register.css";

class Register extends Component {
    state = {  }
    render() {
        return (
            <Container fluid>
            <Row>
                <Col size="md-6">
                <div className="userRegisterForm">
                <Tabs>
                <TabList>
                <Tab><strong>Register</strong></Tab>
                <Tab><strong>Login</strong></Tab>
                </TabList>
 
                <TabPanel>
                <Form  />
                </TabPanel>
            <TabPanel>
                <LoginForm />
                </TabPanel>
    </Tabs>
              
                </div>
                </Col>
                <Col size="md-6">
                <div className="registerLinkButton">
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
import React, { Component } from "react";
import { Col, Row, Container} from "../components/Grid/index";
import { Link } from "react-router-dom";
import Form from "../components/Form/index";
import LoginForm from "../components/LoginForm/index"
import Button from 'react-bootstrap/Button';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import FadeIn from 'react-fade-in';
import "./Register.css";

class Register extends Component {
    state = {  }
    constructor(props) {
        super(props);
        this.updateInfo = props.updateInfo;
    }
    render() {
        return (
            <FadeIn>
            <Container fluid>
            <Row>
                <Col size="md-12">
                <div className="userRegisterForm mx-auto">
                <Tabs>
                <TabList>
                <Tab><strong>Register</strong></Tab>
                <Tab><strong>Login</strong></Tab>
                </TabList>
 
                <TabPanel>
                <Form  />
                </TabPanel>
            <TabPanel>
                <LoginForm updateInfo={this.updateInfo} />
                </TabPanel>
    </Tabs>
              
                </div>
                </Col>
                {/* <Col size="md-6">
                <div className="registerLinkButton">
                <Link to="/artistRegister">
                <Button style={{  boxShadow: "0 3px 6px #999, 0 3px 6px #999"}} variant="danger">
                Register as artist
                </Button>
                </Link>
                </div>
                </Col> */}

            </Row>
            </Container>
            </FadeIn>
        );
    }
}
export default Register;
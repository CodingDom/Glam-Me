import React, { Component } from "react";
import { Col, Row, Container} from "../components/Grid/index";
import ArtistForm from "../components/ArtistForm/index";
import LoginForm from "../components/LoginForm/index";
import FadeIn from 'react-fade-in';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import "./ArtistRegister.css";

class ArtistRegister extends Component {
    state = {  }
    render() {
        return (
            <FadeIn>
            <Container fluid>
            <Row>
                <Col size="md-4">
                <div className="artistRegisterForm">
                <Tabs>
                <TabList>
                <Tab><strong>Register as Artist</strong></Tab>
                <Tab><strong>Login as Artist</strong></Tab>
                </TabList>
 
                <TabPanel>
                <ArtistForm />
                </TabPanel>
                <TabPanel>
                <LoginForm />
                </TabPanel>
                </Tabs>
                </div>
                </Col>
            </Row>
            </Container>
            </FadeIn>
        );
    }
}
export default ArtistRegister;
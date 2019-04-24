import React, { Component } from "react";
import { Col, Row, Container} from "../components/Grid/index";

class Artist extends Component {
    state = {  }
    render() {
        return (
            <Container fluid>
            <Row>
                <Col size="md-10">
                <h1>Welcome to the makeup artist page</h1>
                </Col>
            </Row>
            </Container>
        );
    }
}

export default Artist;
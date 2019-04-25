import React, { Component } from "react";
import { Col, Row, Container} from "../components/Grid/index";
import SearchBar from "../components/SearchBar/index";
import ArtistCards from "../components/ArtistCards/index";
import "./Artist.css";

class Artist extends Component {
    state = {  }
    render() {
        return (
            <Container >
            <Row>
                <Col size="12">
                <div className="searchBarComponent">
                <SearchBar />
                </div>                
                </Col>
                </Row>
                <Row>
                <Col size="12">
                <div className="artistCardContainer">
                <ArtistCards />
                </div>
                </Col>
            </Row>
            </Container>
        );
    }
}

export default Artist;
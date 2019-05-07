import React, { Component } from "react";
import { Col, Row, Container} from "../components/Grid/index";
import SearchBar from "../components/SearchBar/index";
import ArtistCards from "../components/ArtistCards/index";
import FadeIn from 'react-fade-in';
import "./Artist.css";

class Artist extends Component {
    state = {  }
    componentDidMount(){
        const currActive = document.querySelector(".navbar-nav .active");
        currActive && currActive.classList.remove("active");
        document.querySelector(`.navbar-nav [data-location="${window.location.pathname}"]`).classList.add("active");
    }

    render() {
        return (
            <FadeIn>
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
            </FadeIn>
        );
    }
}

export default Artist;
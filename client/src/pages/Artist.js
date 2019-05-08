import React, { Component } from "react";
import { Col, Row, Container} from "../components/Grid/index";
import SearchBar from "../components/SearchBar/index";
import ArtistCards from "../components/ArtistCards/index";
import FadeIn from 'react-fade-in';
import "./Artist.css";
import axios from "axios";

let artistPage;

class Artist extends Component {
    state = { 
        artists: []
     }

     artistSearch(query) {
         console.log(query, query.replace(" ","+"));
        axios.get("/api/search?name=" + query.replace(" ","+"))
        .then(res => {
            artistPage.setState({
                artists: res.data
            });
        });
     }

    componentDidMount(){
        artistPage = this;
        const currActive = document.querySelector(".navbar-nav .active");
        currActive && currActive.classList.remove("active");
        document.querySelector(`.navbar-nav [data-location="${window.location.pathname}"]`).classList.add("active");
        axios.get("/api/search")
        .then(res => {
            this.setState({
                artists: res.data
            });
        });
    }

    render() {
        return (
            <FadeIn>
            <Container >
            <Row>
                <Col size="12">
                <div className="searchBarComponent">
                <SearchBar artistSearch={this.artistSearch} />
                </div>                
                </Col>
                </Row>
                <Row>
                <Col size="12">
                <div className="artistCardContainer">
                <ArtistCards artists={this.state.artists} />
                </div>
                </Col>
            </Row>
            </Container>
            </FadeIn>
        );
    }
}

export default Artist;
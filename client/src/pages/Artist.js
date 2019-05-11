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
        artists: [],
        loading: true
     }

     artistSearch(query) {
        artistPage.setState({
            loading: true,
            artists: []
        });
        axios.get("/api/search?name=" + query.trim().replace(" ","+"))
        .then(res => {
            artistPage.setState({
                artists: res.data,
                loading: false
            });
        });
     }

    componentDidMount(){
        artistPage = this;
        const currActive = document.querySelector(".navbar-nav .active");
        currActive && currActive.classList.remove("active");
        const currPage = document.querySelector(`.navbar-nav [data-location="${window.location.pathname}"]`)
        currPage && currPage.classList.add("active");
        axios.get("/api/search" + window.location.search)
        .then(res => {
            this.setState({
                artists: res.data,
                loading: false
            });
            console.log(this.state);
        });
    }

    render() {
        const loading = !this.state.loading ? "" : (
        <div id="page-loader" class="d-flex justify-content-center">
            <div id="page-spinner" class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
            </div>
        </div>)

         let results; 
         if (!this.state.loading && this.state.artists.length === 0)
            results = <h4>No results found!</h4>; 
         else 
            results = "";
        return (
            <FadeIn>
            <Container className="main" >
            <Row>
                <Col size="12">
                <div className="searchBarComponent">
                <SearchBar artistSearch={this.artistSearch} />
                {results}
                </div>
                {loading}          
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
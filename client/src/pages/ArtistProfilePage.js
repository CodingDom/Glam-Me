import React from "react";
import ArtistProfile from "../components/ArtistProfile/index";
import FadeIn from 'react-fade-in';
import { Col , Row , Container } from "../components/Grid/index";


class ArtistProfilePage extends React.Component {
    state = {
        artistName: "john",
        artistLocation: "america",
        artistRating: "5",
        artistAboutInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        artistProfileImage: "https://content-static.upwork.com/uploads/2014/10/02123010/profilephoto_goodcrop.jpg",
        artistWorkImages: "work images"

    }

    componentDidMount(){
        //grab user data
    }

    render(){
        return (
            <FadeIn>
            <Container fluid>
            <Row>
                <Col size="12">
                <div className = "profileComponent">
                <ArtistProfile profileImage={this.state.artistProfileImage} profileName={this.state.artistName} profileLocation={this.state.artistLocation} profileRating={this.state.artistRating} profileWorkImages={this.state.artistWorkImages} aboutInfo={this.state.artistAboutInfo}/>
                </div>

                </Col>
            </Row>
            </Container>
            </FadeIn>
        )
    }
}

export default ArtistProfilePage;
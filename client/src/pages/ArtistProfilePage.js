import React from "react";
import ArtistProfile from "../components/ArtistProfile/index";
import { Col , Row , Container } from "../components/Grid/index";


class ArtistProfilePage extends React.Component {
    state = {
        artistName: "john",
        artistLocation: "america",
        artistRating: "5",
        artistProfileImage: "image",
        artistWorkImages: "work images"

    }

    componentDidMount(){
    }

    render(){
        return (
            <Container fluid>
            <Row>
                <Col size="12">
                <div className = "profileComponent">
                <ArtistProfile profileImage={this.state.artistProfileImage} profileName={this.state.artistName} profileLocation={this.state.artistLocation} profileRating={this.state.artistRating} profileWorkImages={this.state.artistWorkImages}/>
                </div>

                </Col>
            </Row>
            </Container>
        )
    }
}

export default ArtistProfilePage;
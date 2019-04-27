import React from "react";
import "./style.css";
import { Col , Row, Container} from "../Grid/index";
import Button from "react-bootstrap/Button"


function ArtistProfile (props) {
    
            return (
                <Container fluid>
                <Row>
                    <Col size="md-12">
                    <div className="artistProfileWrapper">
                    <div className="artistProfileImage">
                   <img src={props.profileImage} alt="alt" />
                    </div>
                    <div className="artistProfileInfo">
                    <strong>Artist Name: {props.profileName}</strong>
                    <br></br>
                    <strong> Artist location: {props.profileLocation}</strong>
                    <br></br>
                    <strong>Artist Rating: {props.profileRating}</strong>
                    <br></br>
                    <strong>About Me: {props.aboutInfo}</strong>
                    <br></br>
                    <Button>Book Me</Button>
                    </div>
                    </div>
                   
                    </Col>
                    <Col size="md-12">
                    <div className="artistProfileWorkImages">
                    {/* Carosuel of work images */}
                    
                    {props.profileWorkImages}
                    </div>
                    </Col>
                </Row>
                </Container>
            )

}

export default ArtistProfile ;
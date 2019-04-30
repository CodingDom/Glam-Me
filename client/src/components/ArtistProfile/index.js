import React from "react";
import { Col , Row, Container} from "../Grid/index";


function ArtistProfile (props) {
    
            return (
                <Container fluid>
                <Row>
                    <Col size="md-12">
                    <div className="artistProfilePicture">
                    {props.profileImage}
                    </div>
                    </Col>
                    <Col size="md-12">
                    <div className="artistProfileInfo">
                    {props.profileName}
                    {props.profileLocation}
                    {props.profileRating}
                    {props.profileWorkImages}
                    </div>
                    </Col>
                </Row>
                </Container>
            )

}

export default ArtistProfile ;
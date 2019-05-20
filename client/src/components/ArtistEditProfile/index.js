import React from "react";
import "./style.css";
import { Col , Row, Container} from "../Grid/index";

function ArtistEditProfile (props) {
    
            return (
                <Container fluid>
                <Row>
                   
                    <Col size="md-2">
                    <div className="artistProfilePicture">
                    <img alt="omomo" src={props.profileImage} style={{height:"200px",width:"200px"}} />
                    </div>
                    </Col>
                    <Col size="md-10">
                    <div className="artistProfileInfo">
                    <strong>Technician: </strong>{props.profileName}
                    <br />
                    <strong>Location: </strong>{props.profileLocation}
                    <br />
                    <strong>Rating: </strong>{props.profileRating}
                    <br />
                    <strong>Rates:</strong> 25$- 150$
                    <br />
                    <strong>About Me: </strong>{props.profileAboutMe}
                    
                    </div>
                    </Col>
                
                </Row>
                </Container>
            )

}

export default ArtistEditProfile ;
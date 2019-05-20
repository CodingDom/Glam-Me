import React from "react";
import "./style.css";
import { Col , Row, Container} from "../Grid/index";

function ArtistProfile (props) {
    
            return (
                <Row>
                    {/* <Col size="s-12 md-3 picture"> */}
                    <div className="picture-container">
                    <div className="artistProfilePicture" style={{backgroundImage:`url('${props.profileImage}')`}}>
                    {props.button}
                    </div>
                    </div>
                    {/* </Col> */}
                    {/* // <Col size="s-12 md-9"> */}
                    <div className="info-container">
                    <div className="artistProfileInfo">
                    <strong>Technician: </strong>{props.profileName}
                    <br />
                    <strong>Location: </strong>{props.profileLocation}
                    <br />
                    <strong>Rating: </strong>{props.profileRating}
                    <br />
                    <strong>Rates:</strong> 25$- 150$
                    <br />
                    <strong>About Me: </strong><span id="blurb">{props.profileAboutMe}</span>
                    
                    </div>
                    </div>
                    {/* // </Col> */}
                
                </Row>
            )

}

export default ArtistProfile ;
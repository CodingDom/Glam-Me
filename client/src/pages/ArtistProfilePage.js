import React from "react";
import ArtistProfile from "../components/ArtistProfile/index";
import "./ArtistProfilePage.css";
import StarRating from "../components/StarRating/index";
import ProfileCarousel from "../components/ProfileCarousel/index";
import Button from "react-bootstrap/Button"
import images from "../images.json";
import { Col , Row , Container } from "../components/Grid/index";

import axios from "axios";

const artist = images.filter(artist => {
    return artist.id === parseInt(document.location.pathname.split("/")[2]);
})[0];

class ArtistProfilePage extends React.Component {
    state = {
        artistName: artist.name,
        artistProfileImage: artist.image,
        artistSpecialties: "",
        artistLocation: "Orlando, Florida",
        artistRating: <StarRating value={artist.rating} />,
        // artistProfileImage: "",
        artistWorkImages: "http://images5.fanpop.com/image/photos/31000000/haters-gonna-hate-random-31076705-550-413.jpg",
        artistAboutMe: artist.about

    }

    componentDidMount(){
        console.log("This is working");
        
        axios.get("/api/users/" + window.location.pathname.split("/")[2]).then(res => {
            const artist = res.data;
            this.setState({
                artistName: artist.name,
                artistSpecialties: artist.specialties,
                artistAboutMe: artist.blurb
            })
        });
        
    }

    render(){
        console.log("rendering");
        
        return (
            <Container fluid>
            <Row>
                <Col size="md-12">
                <div className = "profileComponent">
                 <ArtistProfile  profileImage={this.state.artistProfileImage} profileAboutMe={this.state.artistAboutMe} profileName={this.state.artistName} profileLocation={this.state.artistLocation} profileRating={this.state.artistRating} />
                 <br />
                 <br />
                 <Button style={{marginLeft:"100px", marginTop:"35px", marginBottom:"50px"}} variant="danger">Book Appointment</Button>
                
                 <div className="profileImageShowCase">
                <ProfileCarousel  />
                </div>

                </div>
            \

                </Col>
            </Row>
            </Container>
        )
    }
}

export default ArtistProfilePage;
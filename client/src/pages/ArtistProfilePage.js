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
        artistId: artist._id,
        artistName: artist.name,
        artistProfileImage: artist.image,
        artistSpecialties: "",
        artistLocation: "Orlando, Florida",
        artistRating: <StarRating value={artist.rating} />,
        // artistProfileImage: "",
        artistWorkImages: "http://images5.fanpop.com/image/photos/31000000/haters-gonna-hate-random-31076705-550-413.jpg",
        artistAboutMe: artist.about,
        myProfile: false

    }

    componentDidMount(){
        console.log("This is working");
        
        axios.get("/api/users/" + window.location.pathname.split("/")[2]).then(res => {
            
            const artist = res.data;
            console.log(artist);
            this.setState({
                artistName: artist.name,
                artistSpecialties: artist.specialties,
                artistAboutMe: artist.blurb,
                myProfile: artist.isMyProfile,
                artistId: artist._id,
            })
        });
        
    }

    render(){
        console.log("rendering");
        let button;
        if (this.state.myProfile) {
            button = <Button href={"/artistedit/" + window.location.pathname.split("/")[2]} style={{marginLeft:"100px", marginTop:"35px", marginBottom:"50px"}} variant="warning">Edit Profile</Button>;
        } else {
            button = <Button href={"/Booking" + window.location.search} style={{marginLeft:"100px", marginTop:"35px", marginBottom:"50px"}} variant="danger">Book Appointment</Button>
        }
        return (
            <Container fluid>
            <Row>
                <Col size="md-12">
                <div className = "profileComponent">
                 <ArtistProfile  profileImage={this.state.artistProfileImage} profileAboutMe={this.state.artistAboutMe} profileName={this.state.artistName} profileLocation={this.state.artistLocation} profileRating={this.state.artistRating} profileSpecialties={this.state.artistSpecialties}/>
                 <br />
                 <br />
                 {button}
                 <div className="profileImageShowCase">
                <ProfileCarousel  />
                </div>

                </div>
            

                </Col>
            </Row>
            </Container>
        )
    }
}

export default ArtistProfilePage;
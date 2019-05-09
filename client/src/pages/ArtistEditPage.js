import React from "react";

import Button from "react-bootstrap/Button"
import images from "../images.json";

import { Col , Row , Container } from "../components/Grid/index";
import ImageUploader from 'react-images-upload';
import { Redirect } from "react-router-dom";
import Input from "../components/Input/index";
import axios from "axios";
import "./ArtistEditPage.css";

const artist = images.filter(artist => {
    return artist.id === parseInt(document.location.pathname.split("/")[2]);
})[0];

class ArtistEditProfilePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            artistName: "",
            artistProfileImage: "",
            artistLocation: "Orlando, Florida",
            artistSpecialties: "",
            artistAboutMe: "",
            artistId: "",

            myProfile: false,
            redirect: false

    
        }
     
    }


    componentDidMount(){
        axios.get("/api/users/" + window.location.pathname.split("/")[2]).then(res => {
            
            const artist = res.data;
            console.log(artist);
            this.setState({
                artistId: artist._id,
                artistName: artist.name,
                artistSpecialties: artist.specialties,
                artistAboutMe: artist.blurb,
                myProfile: artist.isMyProfile,
            })
        });
    
    }
    



      handleInputChange = event => {
        const{ name, value} = event.target;
        this.setState({
            [name]: value
        });

    };

    handleProfileUpdate = event => {
        axios.put("/api/user", this.state)
        .then(res => {
            console.log("profile updated");
            this.setState({
                redirect: true
            });
        })
     
    }
    onDrop = (picture) => {
        this.setState({
            artistProfileImage: this.state.artistProfileImage.concat(picture),
        });

        
    }

    render(){
        console.log("rendering");
        
        return (
            (this.state.myProfile ?
                <Container fluid>
                {this.state.redirect ? <Redirect to={"/artist/" + this.state.artistId} /> : ""}
                <Row>
                   <Col size="md-12">
                    <div style={{marginTop:"100px", marginLeft:"480px"}}><strong><h1 >Edit Profile</h1></strong></div>
                   <div className="editWrapper">
    
                   <strong>Edit Name</strong>
                    <br />
                    <Input name="artistName" value={this.state.artistName} onChange={this.handleInputChange}></Input>
                    <br />
                    <strong>Edit Location</strong>
                    <br />
                    <Input name="artistLocation" value={this.state.artistLocation} onChange={this.handleInputChange}></Input>
                    <br />
                    <strong>Edit Specialties</strong>
                    <br />
                    <Input name="artistSpecialties" value={this.state.artistSpecialties} onChange={this.handleInputChange}></Input>
                    <br />
                    <strong>Edit About Me</strong>
                    <br />
                    <Input name="artistAboutMe" value={this.state.artistAboutMe} onChange={this.handleInputChange}></Input>
                    <br />
                    <strong>Change profile image </strong>
                    <ImageUploader
                    withIcon={true}
                    buttonText='Upload Image'
                    onChange={this.onDrop}
                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                    maxFileSize={5242880}
                />
    
                <Button onClick={this.handleProfileUpdate} variant="warning"> Save Changes</Button>
                   </div>
    
                    </Col>
                  
                </Row>
                
                </Container> : <Redirect to={"/artist/" + this.state.artistId} />)
        )
    }
}

export default ArtistEditProfilePage;
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
            name: "",
            profileImage: "",
            location: "Orlando, Florida",
            specialties: "",
            blurb: "",
            artistId: window.location.pathname.split("/")[2],

            myProfile: false,
            redirect: false,
            loaded: false

    
        }
     
    }


    componentDidMount(){
        axios.get("/api/users/" + window.location.pathname.split("/")[2]).then(res => {
            
            const artist = res.data;
            this.setState({
                name: artist.name,
                specialties: artist.specialties,
                blurb: artist.blurb,
                myProfile: artist.isMyProfile,
                loaded: true
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
            profileImage: this.state.profileImage.concat(picture),
        });

        
    }

    render(){
        return (
            (this.state.myProfile ?
                <Container className="main" fluid>
                {this.state.redirect ? <Redirect to={"/artist/" + this.state.artistId} /> : ""}
                <Row>
                   <Col size="md-12">
                    <h1 ><strong>Edit Profile</strong></h1>
                   <div className="editWrapper">
    
                   <strong>Name</strong>
                    <br />
                    <Input name="name" value={this.state.name} onChange={this.handleInputChange} />
                    <br />
                    <strong>Location</strong>
                    <br />
                    <Input name="location" value={this.state.location} onChange={this.handleInputChange} />
                    <br />
                    <strong>Specialties</strong>
                    <br />
                    <Input name="specialties" value={this.state.specialties} onChange={this.handleInputChange} />
                    <br />
                    <strong>About Me</strong>
                    <br />
                    <textarea className="form-control" rows="5" name="blurb" value={this.state.blurb} onChange={this.handleInputChange} />
                    <br />
                    <strong>Change profile image </strong>
                    <ImageUploader
                    withIcon={true}
                    buttonText='Upload Image'
                    onChange={this.onDrop}
                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                    maxFileSize={5242880}
                    withPreview={true}
                    singleImage={true}
                />
    
                <Button onClick={this.handleProfileUpdate} variant="warning"> Save Changes</Button>
                   </div>
    
                    </Col>
                  
                </Row>
                
                </Container> : this.state.loaded ? <Redirect to={"/artist/" + this.state.artistId} /> : "")
        )
    }
}

export default ArtistEditProfilePage;
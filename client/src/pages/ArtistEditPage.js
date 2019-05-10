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
                name: artist.name,
                specialties: artist.specialties,
                blurb: artist.blurb,
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
                redirect: false
            });
        })
     
    }
    onDrop = (picture) => {
        this.setState({
            profileImage: this.state.profileImage.concat(picture),
        });

        
    }

    render(){
        console.log("rendering");
        console.log("Artist Id: "+this.state.artistId);
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
                    <Input name="name" value={this.state.name} onChange={this.handleInputChange}></Input>
                    <br />
                    <strong>Edit Location</strong>
                    <br />
                    <Input name="location" value={this.state.location} onChange={this.handleInputChange}></Input>
                    <br />
                    <strong>Edit Specialties</strong>
                    <br />
                    <Input name="specialties" value={this.state.specialties} onChange={this.handleInputChange}></Input>
                    <br />
                    <strong>Edit About Me</strong>
                    <br />
                    <Input name="blurb" value={this.state.blurb} onChange={this.handleInputChange}></Input>
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
                
                </Container> : "" /*<Redirect to={"/artist/" + this.state.artistId} />*/)
        )
    }
}

export default ArtistEditProfilePage;
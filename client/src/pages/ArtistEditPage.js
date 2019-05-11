import React from "react";

import Button from "react-bootstrap/Button"
import images from "../images.json";
import Select from "react-select";
import { Col , Row , Container } from "../components/Grid/index";
import ImageUploader from 'react-images-upload';
import { Redirect } from "react-router-dom";
import Input from "../components/Input/index";
import axios from "axios";
import "./ArtistEditPage.css";

const $ = window.$;
const artist = images.filter(artist => {
    return artist.id === parseInt(document.location.pathname.split("/")[2]);
})[0];


const options = [
    { value: 'Makeup', label: 'Makeup' },
    { value: 'Skincare', label: 'Skincare' },
    { value: 'Nails', label: 'Nails' },
    { value: 'Hair', label: 'Hair'},
    { value: 'Massage', label: 'Massage'},
    { value: 'Facials', label: 'Facials'},
  ]
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
            console.log(artist.specialties);
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
        const updateMyInfo = () => {
            console.log(this.state);
            axios.put("/api/user", this.state)
            .then(res => {
                console.log("profile updated");
                this.setState({
                    redirect: true
                });
            })
        }
        if (this.state.profileImage) {
            var formData = new FormData();
            Object.keys(this.state).forEach(key => {
                formData.append(key === 'profileImage' ? 'image' : key, this.state[key]);
            });
            axios({
            method: "POST",
            url: "/api/upload", 
            data: formData
            })
            .then(res => {
                console.log("profile updated");
                this.setState({
                    redirect: true
                });
            }).catch(err => {
                console.log("Error Occurred: ", err)
            });
        } else {
            updateMyInfo();
        }

        
    }

    handleSelection = (sel) => {
        this.setState({
            specialties: sel.map(val => val.value)
        })
    }

    onDrop = (picture, file) => {
        this.setState({
            profileImage: picture[0],
        });

        console.log(picture);
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
                    <Select hasValue={true} defaultValue={this.state.specialties.map(spec => ({value: spec, label: spec}))} isMulti options={options} onChange={this.handleSelection}/>
                    {/* <select class="chosen-select" onChange={this.handleInputChange} >
                    <option value={this.artistSpecialties} name="Makeup">Makeup</option>
                    <option value={this.artistSpecialties} name="Skincare">Skincare</option>
                    <option value={this.artistSpecialties} name="Nails">Nails</option>
                    <option value={this.artistSpecialties} name="Hair">Hair</option>
                    <option value={this.artistSpecialties} name="Massage">Massage</option>
                    <option value={this.artistSpecialties} name="Facials">Facials</option>
                    </select> */}
                   
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
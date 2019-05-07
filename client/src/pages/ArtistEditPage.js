import React from "react";
import ArtistProfile from "../components/ArtistProfile/index";
import "./ArtistProfilePage.css";
import StarRating from "../components/StarRating/index";
import ProfileCarousel from "../components/ProfileCarousel/index";
import Button from "react-bootstrap/Button"
import images from "../images.json";
import Modal from "../components/Modal/index";
import { Col , Row , Container } from "../components/Grid/index";
import ImageUploader from 'react-images-upload';
import axios from "axios";
import "./ArtistEditPage.css";

const artist = images.filter(artist => {
    return artist.id === parseInt(document.location.pathname.split("/")[2]);
})[0];

class ArtistEditProfilePage extends React.Component {
    constructor(props, context) {
        super(props, context)

        this.state = {
            artistName: artist.name,
            artistProfileImage: artist.image,
            // artistName: "John Doe",
            artistLocation: "Orlando, Florida",
            artistRating: <StarRating value={2}/>,
            // artistProfileImage: "data:image/jpeg;base64,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",
            artistWorkImages: "http://images5.fanpop.com/image/photos/31000000/haters-gonna-hate-random-31076705-550-413.jpg",
            artistAboutMe: artist.about,

            showModal : false,

            editName: "",
            editLocation: "",
            editRates: "",
            editAboutMe: "",
            editProfileImage: []


    
        }
     
    }


    componentDidMount(){
        console.log("This is working");
    
    }
    

    hideModal = () => {
        this.setState({ showModal: false });
      };
    
    showModal = ()  => {
        this.setState({ showModal: true });
      };

      handleInputChange = event => {
        const{ name, value} = event.target;
        this.setState({
            [name]: value
        });

    };

    handleFormSubmit = event => {
        axios.put("/api/users/" + artist.id, this.state)
        this.setState({ })
    }
    onDrop = (picture) => {
        this.setState({
            editProfileImage: this.state.editProfileImage.concat(picture),
        });

        if(this.state.pictures){
            console.log("theres an image")
        }
    }

    render(){
        console.log("rendering");
        
        return (
            <Container fluid>
                
            <Row>
                <Col size="md-12">
                {this.state.showModal ?   <Modal
            className="modal"
            show={this.state.showModal}
            close={this.hideModal}>
                
                <br />
                Edit Name
                <br />
                <input type="text" name="editName" value={this.state.editName} onChange={this.handleInputChange}/>
                <br />
                Edit Location
                <br />
                <input type="text" name="editlocation" value={this.state.editLocation} onChange={this.handleInputChange}/>
                <br />
                Edit Rates
                <br />
                <input type="text" name="editrates" value={this.state.editRates} onChange={this.handleInputChange}/>
                <br />
                Edit About Me
                <br />
                <input type="text"  name="editAboutMe" value={this.state.editAboutMe} onChange={this.handleInputChange}/>
                <br />

                <ImageUploader
                withIcon={true}
                buttonText='Change profile Image'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
                  <button className="btn-cancel" onClick={this.hideModal}>CLOSE</button>
                    <button className="btn-continue" onClick={this.handleFormSubmit}>Save Changes</button>
                 </Modal>
                 :null}
                </Col>
                <Col size="md-12">
                <div className = "profileComponent">
                
                 <ArtistProfile  profileImage={this.state.artistProfileImage} profileAboutMe={this.state.artistAboutMe} profileName={this.state.artistName} profileLocation={this.state.artistLocation} profileRating={this.state.artistRating}/>
                 
                 <br />
                 <br />
                 </div>
                  
                 
                <Button className="open-modal-btn" onClick={this.showModal}>Edit Profile</Button>

            
                 <div className="profileImageShowCase">
                <ProfileCarousel  />
                
                </div>
                
        
             
            

                </Col>
              
            </Row>
            
            </Container>
        )
    }
}

export default ArtistEditProfilePage;
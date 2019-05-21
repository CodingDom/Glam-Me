import React from "react";
import { Redirect } from "react-router-dom";
import {Button, Form, Col} from 'react-bootstrap';
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import axios from "axios";

class form extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      artist: false,
      city: "",
      state: "",
      zipCode: "",
      specialties: "",
      errorVisible : true,
      redirect: false
    }
    this.updateInfo = props.updateInfo;
    this.addNotification = this.addNotification.bind(this);
    this.notificationDOMRef = React.createRef();
  }

  renderRedirect = () => {
    if (this.state.redirect)
      return <Redirect to={this.state.redirect} />;
  }

  handleInputChange = event => {
      const{ name, value} = event.target;
      this.setState({
          [name]: value
      });
      console.log(name, value);
    };
 
    handleFormSubmit = event => {
        event.preventDefault();
        if(this.state.password === this.state.confirmPassword){
          const {firstName, lastName, email, password, artist, /*city, state, zipCode,*/ specialties} = this.state;
          let userInfo = {
            firstName,
            lastName,
            email,
            password
          }
          const artistInfo = {
            artist,
            specialties
          }
          if (artist) {
            userInfo = {...userInfo, ...artistInfo};
          }  
          console.log(userInfo);
          axios.post("/api/signup", userInfo)
          .then(res => {
            if (this.updateInfo) {
              this.updateInfo();
            }
            this.setState({
              redirect: res.data
            });
          })
          .catch(error => {
            console.log(error)
          })
        } else{
          this.setState({ errorVisible: true})
        }
        
        //save user to database
      
        
      };
      addNotification () {
        this.notificationDOMRef.current.addNotification({
          title: "Error",
          message: "Passwords dont match!",
          type: "error",
          insert: "top",
          container: "top-center",
          animationIn: ["animated", "fadeIn"],
          animationOut: ["animated", "fadeOut"],
          dismiss: { duration: 2000 },
          dismissable: { click: true }
        });
      }
    render(){
        return (
         <div>
             {this.errorVisible ? <ReactNotification ref={this.notificationDOMRef} /> : <h1>helllo</h1>} 
           </div>,
          <div>
         

            <Form method="post" action="/api/signup">
            {this.renderRedirect()}
      <Form.Row>
        <Form.Group as={Col} controlId="formGridFirstName">
          <Form.Label><strong>First Name</strong></Form.Label>
          <Form.Control onChange={this.handleInputChange} value={this.state.firstName}name="firstName" type="text" placeholder="Enter first name" />
        </Form.Group>
    
        <Form.Group as={Col} controlId="formGridLastName">
          <Form.Label><strong>Last Name</strong></Form.Label>
          <Form.Control onChange={this.handleInputChange} value={this.state.lastName} name="lastName" type="text" placeholder="Enter last name" />
        </Form.Group>
      </Form.Row>
      <Form.Group controlId="formGridEmail">
          <Form.Label><strong>Email</strong></Form.Label>
          <Form.Control onChange={this.handleInputChange} value={this.state.email} name="email"type="email" placeholder="Enter email" />
        </Form.Group>
      <Form.Group controlId="formGridPassword">
          <Form.Label><strong>Password</strong></Form.Label>
          <Form.Control onChange={this.handleInputChange} value={this.state.password} name="password" type="password" placeholder="Enter password" />
        </Form.Group>
        <Form.Group controlId="formGridConfirmPassword">
          <Form.Label><strong>Confirm password</strong></Form.Label>
          <Form.Control onChange={this.handleInputChange} value={this.state.confirmPassword} name="confirmPassword" type="password" placeholder="Confirm password" />
        </Form.Group>
    
      <Form.Row style={{display: this.state.artist === true ? "flex" : "none"}}><Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control  onChange={this.handleInputChange} value={this.state.city} name="city" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Control  onChange={this.handleInputChange} value={this.state.state} name="state" as="select">
            <option>Choose...</option>
            <option>Alabama</option>
            <option>Alaska</option>
            <option>Arizona</option>
            <option>Arkansas</option>
            <option>California</option>
            <option>Colorado</option>
            <option>Connecticut</option>
            <option>Delaware</option>
            <option>District Of Columbia</option>
            <option>Florida</option>
            <option>Georgia</option>
            <option>Hawaii</option>
            <option>Idaho</option>
            <option>Illinois</option>
            <option>Indiana</option>
            <option>Iowa</option>
            <option>Kansas</option>
            <option>Kentucky</option>
            <option>Louisiana</option>
            <option>Maine</option>
            <option>Maryland</option>
            <option>Massachusetts</option>
            <option>Michigan</option>
            <option>Minnesota</option>
            <option>Mississippi</option>
            <option>Missouri</option>
            <option>Montana</option>
            <option>Nebraska</option>
            <option>Nevada</option>
            <option>New Hampshire</option>
            <option>New Jersey</option>
            <option>New Mexico</option>
            <option>New York</option>
            <option>North Carolina</option>
            <option>North Dakota</option>
            <option>Ohio</option>
            <option>Oklahoma</option>
            <option>Oregon</option>
            <option>Pennsylvania</option>
            <option>Rhode Island</option>
            <option>South Carolina</option>
            <option>South Dakota</option>
            <option>Tennessee</option>
            <option>Texas</option>
            <option>Utah</option>
            <option>Vermont</option>
            <option>Virginia</option>
            <option>Washington</option>
            <option>West Virginia</option>
            <option>Wisconsin</option>
            <option>Wyoming</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>ZipCode</Form.Label>
          <Form.Control  onChange={this.handleInputChange} value={this.state.zipCode} name="zipCode"/>
        </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridArtistSpecialties" style={{display: this.state.artist === true ? "block" : "none"}}>
        <Form.Label>Specialties</Form.Label>
        <Form.Control onChange={this.handleInputChange} value={this.state.specialties}  name="specialties"as="select">
        <option>Makeup</option>
        <option>Skincare</option>
        <option>Nails</option>
        <option>Hair</option>
        <option>Waxing</option>
        <option>Facials</option>
        <option>Eyes-Lash Extension</option>
        <option>Microblading</option>
        </Form.Control>
      </Form.Group>
      <Form.Group 
        onChange={e => {
          this.setState({
            artist: e.target.checked
          });
        }} 
        controlId="artist">
        <Form.Check type="checkbox" label="I am registering as a beauty technician." name="artist" />
      </Form.Group>
      <Button onClick={this.handleFormSubmit}variant="warning" type="submit">
            Sign up!
      </Button>
    </Form>
    </div>
        )
    }
}

export default form 

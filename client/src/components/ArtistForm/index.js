import React from "react";
import {Button, Form, Col} from 'react-bootstrap'
import axios from "axios";
import "./style.css";
import { Redirect } from "react-router-dom";

export default class Artistform extends React.Component {
      constructor(props){
        super(props)

        this.state = {
          artistfirstname: "",
        artistlastname: "",
        artistemail: "",
        artistpassword: "",
        artistconfirmpassword: "",
        artistspecialties: "",
        artistcity: "",
        artiststate: "",
        artistzipcode: "",
        redirect: false
    };
  }

    renderRedirect = () => {
      if (this.state.redirect)
        return <Redirect to={this.state.redirect} />;
    }

    handleInputChange = event => {
        const { name, value} = event.target;
        this.setState({
            [name]: value
        });

    };
 
    handleFormSubmit = event => {
        event.preventDefault();
        const userInfo = {
          firstName: this.state.artistfirstname,
          lastName: this.state.artistlastname,
          email: this.state.artistemail,
          password: this.state.artistpassword,
          specialties: [this.state.artistspecialties]
        }
        //save user to database
        if(this.state.artistpassword === this.state.artistconfirmpassword) {
          axios.post("/api/signup", userInfo)
          .then(res => {
            this.setState({
              redirect: res.data
            });
          })
          .catch(error => {
            console.log(error)
          })
        }
      }

      render(){
        return (
          <div className="artistForm">
            <Form method="post" action="/api/signup " >
            {this.renderRedirect()}
      <Form.Row>
        <Form.Group as={Col} controlId="formGridArtistFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control value={this.state.artistfirstname}name="artistfirstname" onChange={this.handleInputChange}type="text" placeholder="Enter first name" />
        </Form.Group>
    
        <Form.Group as={Col} controlId="formGridArtistLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control onChange={this.handleInputChange} value={this.state.artistlastname} name="artistlastname" type="text" placeholder="Enter last name" />
        </Form.Group>
      </Form.Row>
      <Form.Group as={Col} controlId="formGridArtistEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control onChange={this.handleInputChange} value={this.state.artistemail} name="artistemail"type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Row>
      <Form.Group as={Col} controlId="formGridArtistPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={this.handleInputChange} value={this.state.artistpassword} name="artistpassword" type="password" placeholder="Enter password" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridArtistConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control onChange={this.handleInputChange} value={this.state.artistconfirmpassword} name="artistconfirmpassword" type="password" placeholder="Confirm password" />
        </Form.Group>
        </Form.Row>
        <Form.Row>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control  onChange={this.handleInputChange} value={this.state.artistcity} name="artistcity" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Control  onChange={this.handleInputChange} value={this.state.artiststate} name="artiststate" as="select">
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
          <Form.Control  onChange={this.handleInputChange} value={this.state.artistzipcode} name="artistzipcode"/>
        </Form.Group>
        </Form.Row>

        <Form.Group as={Col} controlId="formGridArtistSpecialties">
        <Form.Label>Specialties</Form.Label>
        <Form.Control onChange={this.handleInputChange} value={this.state.artistspecialties}  name="artistspecialties"as="select">
        <option>Makeup</option>
        <option>Skincare</option>
        <option>Nails</option>
        <option>Hair</option>
        <option>Waxing</option>
        <option>Facials</option>
        </Form.Control>
        </Form.Group>
    
    
    
      <Button onClick={this.handleFormSubmit}variant="warning" type="submit">
            Sign up!
      </Button>
    </Form>
          </div>
        )
      }
    
  
    }
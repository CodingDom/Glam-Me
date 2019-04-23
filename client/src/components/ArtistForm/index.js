import React from "react";
import {Button, Form, Col} from 'react-bootstrap'


class Artistform extends React.Component {
    state={
        artistfirstname: "",
        artistlastname: "",
        artistemail: "",
        artistpassword: "",
        artistconfirmpassword: "",
        artistspecialties: "",


    };

    handleInputChange = event => {
        const { name, value} = event.target;
        this.setState({
            [name]: value
        });

    };
 
    handleFormSubmit = event => {
        console.log(this.state)

        //save user to database
        
      };
    render(){
        return (
            <Form method="post" action="/ " >
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
      <Form.Group as={Col} controlId="formGridArtistPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={this.handleInputChange} value={this.state.artistpassword} name="artistpassword" type="password" placeholder="Enter password" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridArtistConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control onChange={this.handleInputChange} value={this.state.artistconfirmpassword} name="artistconfirmpassword" type="password" placeholder="Confirm password" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridArtistSpecialties">
        <Form.Label>Specialties</Form.Label>
        <Form.Control onChange={this.handleInputChange} value={this.state.artistspecialties}  name="artistspecialties"as="select">
        <option>Makeup</option>
        <option>Skincare</option>
        <option>Nails</option>
        <option>Hair</option>
        </Form.Control>
        </Form.Group>
    
    
    
      <Button onClick={this.handleFormSubmit}variant="primary" type="submit">
            Sign up!
      </Button>
    </Form>
        )
    }
}

export default Artistform 

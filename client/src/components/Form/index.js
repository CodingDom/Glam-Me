import React from "react";
import {Button, Form, Col} from 'react-bootstrap';
import axios from "axios";


class form extends React.Component {
    state={
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmpassword: "",
    };

    handleInputChange = event => {
        const{ name, value} = event.target;
        this.setState({
            [name]: value
        });

    };
 
    handleFormSubmit = event => {
        console.log(this.state)
        event.preventDefault();
        if (this.state.password === this.state.confirmpassword){
          axios.post("/api/signup", this.state)
          .then(res => {
            alert("Account Created")
          })
        } else {
          alert("Passwords dont match")
        }
        
      };
    render(){
        return (
            <Form method="post" action="/api/signup" >
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
      <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label><strong>Email</strong></Form.Label>
          <Form.Control onChange={this.handleInputChange} value={this.state.email} name="email"type="email" placeholder="Enter email" />
        </Form.Group>
      <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label><strong>Password</strong></Form.Label>
          <Form.Control onChange={this.handleInputChange} value={this.state.password} name="password" type="password" placeholder="Enter password" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridConfirmPassword">
          <Form.Label><strong>Confirm password</strong></Form.Label>
          <Form.Control onChange={this.handleInputChange} value={this.state.confirmpassword} name="confirmpassword" type="password" placeholder="Confirm password" />
        </Form.Group>
    
    
    
      <Button onClick={this.handleFormSubmit}variant="primary" type="submit">
            Sign up!
      </Button>
    </Form>
        )
    }
}

export default form 

import React from "react";
import {Button, Form, Col} from 'react-bootstrap'


class form extends React.Component {
    state={
        firstname: "",
        lastname: "",
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
        
        //save user to database
        
      };
    render(){
        return (
            <Form method="post" action="" >
      <Form.Row>
        <Form.Group as={Col} controlId="formGridFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control onChange={this.handleInputChange} value={this.state.firstname}name="firstname" type="text" placeholder="Enter first name" />
        </Form.Group>
    
        <Form.Group as={Col} controlId="formGridLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control onChange={this.handleInputChange} value={this.state.lastname} name="lastname" type="text" placeholder="Enter last name" />
        </Form.Group>
      </Form.Row>
      <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control onChange={this.handleInputChange} value={this.state.email} name="email"type="email" placeholder="Enter email" />
        </Form.Group>
      <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={this.handleInputChange} value={this.state.password} name="password" type="password" placeholder="Enter password" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
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

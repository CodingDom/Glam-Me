import React from "react";
import {Button, Form, Col} from 'react-bootstrap'


class Loginform extends React.Component {
    state={
        email: "",
        password: "",
    };

    handleInputChange = event => {
        const{ name, value} = event.target;
        this.setState({
            [name]: value
        });

    };
 
    handleFormSubmit = event => {
        console.log(this.state)

        //look for user
      };
    render(){
        return (
            <Form method="post" action="/api/users" >
      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control onChange={this.handleInputChange} value={this.state.email} name="email"  type="text" placeholder="Email Address" />
        </Form.Group>
      </Form.Row>
      <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={this.handleInputChange} value={this.state.password} name="password"type="password" placeholder="Password" />
        </Form.Group>
    
    
      <Button onClick={this.handleFormSubmit}variant="primary" type="submit">
            Login!
      </Button>
    </Form>
        )
    }
}

export default Loginform ;

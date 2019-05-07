/* eslint-disable no-unused-expressions */
import React from "react";
import {Button, Form, Col} from 'react-bootstrap';
import axios from "axios";
import { Redirect } from "react-router-dom";


class Loginform extends React.Component {
    state={
        email: "",
        password: "",
        redirect : false
    };

    constructor(props) {
      super(props);
      this.updateInfo = props.updateInfo;
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

    };
 
    handleFormSubmit = event => {
        console.log(this.state)
        event.preventDefault();
        axios.post("/api/login", this.state ).then((res) => {
          if (this.updateInfo) {
            this.updateInfo();
            console.log("Updated Info");
          }
          this.setState({
            redirect: res.data
          })
          
        }).catch((err) => {
          console.log(err);
        })
        //look for user
      };
    render(){
        return (
            <Form method="post" action="/api/login" className="text-white" >
            {this.renderRedirect()}
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

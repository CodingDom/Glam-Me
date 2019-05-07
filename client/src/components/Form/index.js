import React from "react";
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
      confirmpassword: "",
      errorVisible : true
    }
    this.addNotification = this.addNotification.bind(this);
    this.notificationDOMRef = React.createRef();
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
        if(this.state.password === this.state.confirmpassword){
          axios.post("/api/signup", this.state)
          this.setState({ firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmpassword: ""})
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
    </div>
        )
    }
}

export default form 

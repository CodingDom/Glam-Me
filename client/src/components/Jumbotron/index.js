/* eslint-disable no-unused-expressions */
import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Container } from "../Grid/index";


function jumbotron(){
  return (
    <Jumbotron fluid style={{  boxShadow: "0 3px 6px #999, 0 3px 6px #999"}}>
    <Container >
      <h1>About Us</h1>
      <p>
      Welcome to Glam Me, an on-call beauty service thats offers licensed technicians who specialize in :
      Hair, Makeup, Nails, Waxings, Massages and facials, clients are able to book appointments with technicians 
      once they have registered and logged in. If you would like to register as a technician view the register and login
      tab for artist.
      </p>
    </Container>
  </Jumbotron>
  )
}

export default jumbotron;
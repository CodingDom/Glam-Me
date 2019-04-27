/* eslint-disable no-unused-expressions */
import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Container } from "../Grid/index";


function jumbotron(){
  return (
    <Jumbotron fluid>
    <Container>
      <h1>About Us</h1>
      <p>
      For your convenience, we are open 7 days a week. In addition, we offer memberships to help you de-stress, relax and maintain a healthy lifestyle.
      Our highly experienced and friendly staff bring you the latest in styles, trends, treatments, and products for you to enjoy, in a comforting and welcoming environment.
At Glame me , we take pride in creating a rewarding and relaxing experience for all of our clients and ensure that your visit with us leaves you with a feeling of satisfaction and overall well-being. Indulge in the escape to an elegant tranquil respite of exceptional service and unsurpassed expertise to renew your health and vitality.
      </p>
    </Container>
  </Jumbotron>
  )
}

export default jumbotron;
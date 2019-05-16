/* eslint-disable no-unused-expressions */
import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Container } from "../Grid/index";


export default function jumbotron(){
  return (
    <Jumbotron fluid style={{   backgroundColor:"transparent", color:"black", fontFamily:"Aref Ruqaa, serif", textAlign:"center"}}>
    <Container >
     <h1 style={{fontFamily: "Lobster, cursive", fontSize:"50px"}}>What is Glam Me ?</h1>
     <hr />
      <p style={{fontSize:"x-large", lineHeight:"50px", letterSpacing:"1px"}}>
      Glam Me, is an on-call beauty service offers licensed technicians to the masses. Once registered, clients are able to book appointments with technicians around their area. Glam Me's goal is to provide a platform for freelance technicians to widen their clientele while providing clients on demand beauty expertise right at their door step.
      </p>
    </Container>
  </Jumbotron>
  )
}


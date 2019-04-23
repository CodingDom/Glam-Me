import React from "react";
import {Tabs, Tab} from 'react-bootstrap/Tabs'




function tab(){
    return (
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
  <Tab eventKey="home" title="Home">
    <h1>hello></h1>
  </Tab>
  <Tab eventKey="profile" title="Profile">
  <h1>whyy</h1>
  </Tab>
  <Tab eventKey="contact" title="Contact" disabled>
    <h1>emnknncm</h1>
  </Tab>
</Tabs>
    )
}

export default tab;
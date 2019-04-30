import React from "react";
import "./someStyling.css";

import serviceImage from "../../serviceimages.json";

function ServiceCards(props) {
    return(
        <div className="serviceCardWrapper">
      {serviceImage.map(service => (
          <span  key={service.service}      
          value={service.service} 
          onClick={props.onClick} 
          onChange={props.handleInputChange}name="servicePicked">
        <div className="cards">
      <div className="service-img-container">
        <img alt={service.service} src={service.styles} />
       
      </div>
    
    </div>
    </span>
      ))}
      </div>

      
    
    )
}

export default ServiceCards ;
import React from "react";
import "./styleCards.css";

import serviceImage from "../../serviceimages.json";

function StyleCards(props) {
    return(
        <div className="styleCardWrapper">
      {serviceImage.map(service => (
          <span  key={service.styles}      
          value={service.styles} 
          onClick={props.onClick} 
          onChange={props.handleInputChange}name="servicePicked">
        <div className="cards">
      <div className="style-img-container">
        <img alt={service.styles} src={service.styles} />
       
      </div>
    
    </div>
    </span>
      ))}
      </div>

      
    
    )
}

export default StyleCards ;
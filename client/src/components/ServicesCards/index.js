import React from "react";
import "./someStyling.css";

import serviceImage from "../../serviceimages.json";

function ServiceCards(props) {
    return(
        <div className="serviceCardWrapper">
      {serviceImage.map(service => (
          <div  key={service.service}     
          data-service={service.service} 
          onClick={props.onClick} 
          name="servicePicked">
          {service.service}
        <div className="cards">
      <div className="service-img-container">
        <img alt={service.service} src={service.image} />
       
      </div>
    
    </div>
    </div>
      ))}
      </div>

      
    
    )
}

export default ServiceCards ;
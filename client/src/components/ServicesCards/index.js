import React from "react";
import "./someStyling.css";

import serviceImage from "../../serviceimages.json";

function ServiceCards(props) {
    return(
        <div className="serviceCardWrapper">
      {serviceImage.sort((a,b) => {
        const x = a.service.toLowerCase();
        const y = b.service.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
      }).map(service => (
          <div  key={service.service}     
          data-service={service.service} 
          onClick={props.onClick} 
          name="servicePicked" className="s-card">
          <strong style={{color:"#d2b57f"}}>{service.service}</strong>
      <div className="img-container" style={{backgroundImage:`url('${service.image}')`}}>
       
      </div>
    </div>
      ))}
      </div>

      
    
    )
}

export default ServiceCards ;
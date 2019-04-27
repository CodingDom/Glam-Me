import React from "react";
import "./styles.css";
import serviceImage from "../../serviceimages.json";

class ServiceCards extends React.Component {
    state = {
        services: serviceImage
    }
    render() {
        return (
            <div className="serviceCards">
            {this.state.services.map(service => (
                <div className="card">
                <div className="service-img-container">
                  <img alt={"sss"} src={service.image} />
                 
                </div>
               {/*} <span onClick={() => props.removeFriend(props.id)} className="remove">
                  𝘅
              </span> */}
              </div>
            
            ))}
            </div>
        )
    }
}

export default ServiceCards ;
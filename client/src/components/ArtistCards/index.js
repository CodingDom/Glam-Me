import React from "react";
import images from "../../images.json";
import StarRating from "../StarRating/index";
import "./style.css";

class ArtistCard extends React.Component {
      constructor (props) {
        super(props)
        this.state = {
          artists:props.artists,
        }
      }
      
      componentWillReceiveProps(props){
        console.log("Artists: ",props.artists);
        this.setState({
          artists:props.artists
        })
      }
  
  render() {
    return (
      <span  
      onClick={this.props.onClick} 
      onChange={this.props.handleInputChange}name="servicePicked">
      <div className="artistCardWrapper">
      {this.state.artists.map(artist => (
        <div className="card">
      <div className="img-container">
        <div className="img-div" style={{backgroundImage:`url('${artist.profileImage}')`}}></div>
      </div>
      <div className="content">
        <ul>
          <li style={{ whiteSpace: "nowrap" }}>
            <strong>Technician: </strong> {artist.name}
          </li>
          <li>
            <strong>Specialties</strong> {artist.specialties}
          </li>
          <li>
            <strong>Rating</strong> <StarRating value={artist.rating}/>
          </li>
          <li>
           
            <a className="btn btn-danger" href={"/technicians/"+artist.id+window.location.search}>
              View Profile
            </a>
          </li>
        </ul>
      </div>
     {/*} <span onClick={() => props.removeFriend(props.id)} className="remove">
        𝘅
    </span> */}
    </div>
      ))}
      </div>
      </span>

      
    )
  }
}

export default ArtistCard;

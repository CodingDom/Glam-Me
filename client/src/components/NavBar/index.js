import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "./style.css";
import Axios from 'axios';

export default class Navbar extends Component {
  state = {}

  setActive(e) {
    const nav = e.currentTarget;
    const currActive = document.querySelector(".navbar-nav .active");
    currActive && currActive.classList.remove("active");
    nav.classList.toggleClass("active");
  }

  signOut() {
    Axios.get("/logout").then(res => {
        window.location.replace(res.data);
    });
  }

  componentDidMount() {
    console.log("Updated nav");
  }

  componentWillReceiveProps(props) {
    this.setState({
      loggedIn: props.loggedIn,
      name: props.name,
      id: props.id,
      isArtist: props.artist
    });
  }

  render() {
    const userMenu = () => {
      if (this.state.loggedIn) {
        return (
          <div id="account" className="nav-link">
            <button className="dropdown-toggle text-white" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{background:"none",border:"none"}}>
              {this.state.name}
            </button>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              {!this.state.isArtist ? "" : <a className="dropdown-item" href={"/artist/" + this.state.id}>My profile</a>}
              <a className="dropdown-item" href="/myappointments">My Appointments</a>
              <button className="dropdown-item" onClick={this.signOut}>Sign Out</button>
            </div>
          </div>
        )
      } else {
        return (
          <div id="register" className="nav-item">
              <Link
                to="/register"
                className="nav-link active text-white"
              >
                Signup / Login
              </Link>
            </div>
        )
      }
    }

    const navigators = [
      {
        location: "/",
        name: "Home"
      },
      {
        location: "/appointments",
        name: "Book Appointment"
      },
      {
        location: "/technicians",
        name: "View Technicians"
      }
    ];

    return (
      <nav className="navbar navbar-expand-lg navbar-dark">
        <Link className="navbar-brand" to="/">
        <img src="/images/logo.png" height="35" alt="Glam Me" />
        </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            {navigators.map(item => (
              <li className="nav-item">
                <Link
                  to={item.location}
                  className={window.location.pathname === item.location ? "nav-link active" : "nav-link"}
                  data-location={item.location}
                >
                  {item.name}
                  {item !== navigators[navigators.length-1] ? <span className="bullet" style={{textDecoration:"none",color:"#d2b57f",marginLeft:"15px"}}>&bull;</span> : ""}
                </Link>
              </li>
            ))}
          </ul> 
          {userMenu()}
          </div>
      </nav>
  )};
}
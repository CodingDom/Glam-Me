import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "./style.css";

export default class Navbar extends Component {
  state = {}

  componentDidMount() {
    console.log("Updated nav");
  }

  componentWillReceiveProps(props) {
    this.setState({
      loggedIn: props.loggedIn,
      name: props.name,
      id: props.id
    });
  }

  render() {
    const userMenu = () => {
      if (this.state.loggedIn) {
        return (
          <div className="nav-link" style={{ position:"absolute", right:"30px" }}>
            <button className="dropdown-toggle text-white" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{background:"none",border:"none"}}>
              {this.state.name}
            </button>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a className="dropdown-item" href="/artistedit/:userId">My profile</a>
              <a className="dropdown-item" href="/viewAppointments">View Appointments</a>
              <a className="dropdown-item" href="#">Sign Out</a>
            </div>
          </div>
        )
      } else {
        return (
          <div className="nav-item" style={{ position:"absolute", right:"0" }} >
              <Link
                to="/register"
                className="nav-link active text-white"
              >
                Login
              </Link>
            </div>
        )
      }
    }

    return (
      <nav className="navbar navbar-expand-lg navbar-black bg-black">
        <Link className="navbar-brand" to="/">
          Glam Me
        </Link>
          <ul className="navbar-nav">
          <li className="nav-item">
              <Link
                to="/"
                className={
                  window.location.pathname === "/" || window.location.pathname === "/"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/artist"
                className={window.location.pathname === "/artist" ? "nav-link active" : "nav-link"}
              >
              Find an Artist
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/appointments"
                className={window.location.pathname === "/appointments" ? "nav-link active" : "nav-link"}
              >
              Make an appointment
              </Link>
            </li>
          </ul>
          {userMenu()}
      </nav>
  )};
}
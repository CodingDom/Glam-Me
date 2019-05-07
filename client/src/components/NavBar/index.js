import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "./style.css";

export default class Navbar extends Component {
  state = {}
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     loggedIn: props.loggedIn,
  //     name: props.name,
  //     id: props.id
  //   }
  //   console.log("Navbar: ",props);
  // }

  componentDidMount() {
    console.log("Updated nav");
  }

  componentWillReceiveProps(props) {
    this.setState = {
      loggedIn: props.loggedIn,
      name: props.name,
      id: props.id
    }
    console.log("Navbar: ",props);
  }

  render() {
    const userMenu = () => {
      if (this.state.loggedIn) {
        return (
          <div class="nav-link" style={{ position:"absolute", right:"30px" }}>
            <button class="dropdown-toggle text-white" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{background:"none",border:"none"}}>
              {this.state.name}
            </button>

            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a class="dropdown-item" href="/mysettings">Settings</a>
              <a class="dropdown-item" href="#">View Appointments</a>
              <a class="dropdown-item" href="#">Sign Out</a>
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
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
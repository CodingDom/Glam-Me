import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom'

export default class Navbar extends Component {

logOut(e){
    e.preventDefault()
    localStorage.removeItem('useertoken')
    this.props.history.push('/')
}



  render() {
      const loginRegLink = (
          <ul className="navbar-nav">
              <li className="nav-item">
                  <Link to="/profile" className="nav-linl">
                    User
                  </Link>
              </li>
              <li className="nav-item">
                  <a href="" onClick={this.logOut.bind(this)} className="nav-link">
                      logOut
                  </a>
              </li>
          </ul>
      )
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
          <button className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          aria-controls="navbar1"
          aria-expanded="false"
          aria-lable="Toggle navigation">
              <span className="navbar-toggle-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-md-center" id="navbar1">
              <ul className="navbar-nav">
                  <li className="nav-item">
                      <Link to="/" className="nav-link">
                          Home
                      </Link>
                  </li>
              </ul>
              {localStorage.usertoken ? userLink : loginRegLink}
          </div>
      </nav>
    )
  }
}

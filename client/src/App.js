import React, { Component } from "react";
import { browerRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'



// import logo from "./logo.svg";
// import "./App.css";

class App extends Component {
  render() {
    return (
     <Router>
       <div className="App">
         <Navbar />
         <Route exact path="/" Component={Header} />
         <div className="container">
           <Route exact path="/register" Component={Register}/>
           <Route exact path="/login" Component={Login}/>
           <Route exact path="/profile" Component={Profile}/>

         </div>
       </div>
     </Router>
    );
  }
}

export default App;

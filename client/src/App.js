import React, { Component } from "react";

import Navbar from "./components/NavBar/index";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Homepage from './pages/Homepage';
import Register from "./pages/Register";
import Artist from "./pages/Artist";
import Appointments from './pages/Appointments';
import ArtistProfilePage from "./pages/ArtistProfilePage";
import Footer from "./components/Footer/index";
import NoMatch from "./pages/NoMatch";
import FadeIn from "react-fade-in";
import axios from "axios";
import "./App.css";
import ArtistEditProfilePage from "./pages/ArtistEditPage";
import BookingPage from "./pages/Booking";
import ViewAppointments from "./pages/ViewAppointments";

let app;

class App extends Component {
  state = {
    loggedIn: false,
    name: "",
    id: "",
    artist: false
  }

  updateNavbar(e) {
    console.log("Rerouting: ",e);
  }

  updateInfo() {
    axios.get("/api/user_data").then(res => {
      const info = res.data;
      app.setState({
        loggedIn: (info.name !== undefined),
        name: info.name,
        id: info.id,
        artist: info.artist
      }, () => {
        console.log("Grabbed user information2: ",app.state);
      });
    });
  }

  componentDidMount() {
    app = this;
    console.log("App is now mounted!",Date.now());
    this.updateInfo();
  }

  render() {
    console.log("Current state: ",this.state);
    return (
 <Router>
   <div>
      <FadeIn>
      <Navbar loggedIn={this.state.loggedIn} name={this.state.name} id={this.state.id} artist={this.state.artist} />
        <Switch>
        <Route exact path="/" render={() => (<Homepage info={this.state} />)} />
        <Route exact path="/register" render={() => (<Register updateInfo={this.updateInfo}/>) }/>
        <Route exact path = "/technicians" component={Artist} />
        <Route exact path = "/technicians/:userId/edit" component={ArtistEditProfilePage} />
        <Route exact path = "/technicians/:userId" component={ArtistProfilePage} />
        <Route exact path = "/technicians/:userId/booking" render={() => (<BookingPage />)} />
        <Route exact path = "/appointments" component={Appointments} />
        <Route exact path = "/myAppointments" component={ViewAppointments} />
        <Route component={NoMatch} />


      </Switch>
      <Footer />
    </FadeIn>
    
   </div>
  
 </Router>
 
    );
  }
}

export default App;

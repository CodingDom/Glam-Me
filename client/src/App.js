import React, { Component } from "react";

import Navbar from "./components/NavBar/index";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Homepage from './pages/Homepage';
import Register from "./pages/Register";
import Artist from "./pages/Artist";
import Appointments from './pages/Appointments';
import ArtistRegister from "./pages/ArtistRegister";
import ArtistProfilePage from "./pages/ArtistProfilePage";
import Footer from "./components/Footer/index";
import NoMatch from "./pages/NoMatch";
import FadeIn from "react-fade-in";
import axios from "axios";
import "./App.css";
import ArtistEditProfilePage from "./pages/ArtistEditPage";



let app;

class App extends Component {
  state = {
    loggedIn: false,
    name: "",
    id: ""
  }

  updateInfo() {
    axios.get("/api/user_data").then(res => {
      const info = res.data;
      app.setState({
        loggedIn: (info.name != undefined),
        name: info.name,
        id: info.id
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
      <Navbar loggedIn={this.state.loggedIn} name={this.state.name} id={this.state.id} />
        <Switch>
        <Route exact path="/" render={() => (<Homepage info={this.state} />)} />

        </Switch>
        <Switch>
        <Route exact path="/register" render={() => (<Register updateInfo={this.updateInfo}/>) }/>
        <Route exact path = "/artist" component={Artist} />
        <Route exact path = "/appointments" component={Appointments} />
        <Route exact path = "/artistregister" component={ArtistRegister} />
        <Route exact path = "/artist/:userId" component={ArtistProfilePage} />
        <Route exact path = "/artistedit/:userId" component={ArtistEditProfilePage} />
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

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
import FadeIn from "react-fade-in";
import axios from "axios";
import "./App.css";
import ArtistEditProfilePage from "./pages/ArtistEditPage";



class App extends Component {
  state = {
    loggedIn: false
  }

  updateInfo() {
    axios.get("/api/user_data").then(res => {
      const info = res.data;
      this.setState({
        loggedIn: (info.name !== undefined),
        name: info.name,
        id: info.id
      });
      console.log("Grabbed user info: ",this.state);
    });
  }

  render() {
    console.log("Current state: ",this.state);
    return (
 <Router>
   <div>
      <FadeIn>
      <Navbar loggedIn={this.state.loggedIn} name={this.state.name} id={this.state.id} test="hey" />
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


      </Switch>
      <Footer />
    </FadeIn>
    
   </div>
  
 </Router>
 
    );
  }
}

export default App;

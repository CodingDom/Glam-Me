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
import "./App.css";

class App extends Component {
  render() {
    return (
 <Router>
   <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/register" component={Register} />
        <Route exact path = "/artist" component={Artist} />
        <Route exact path = "/appointments" component={Appointments} />
        <Route exact path = "/artistregister" component={ArtistRegister} />
        <Route exact path = "/artistprofile" component={ArtistProfilePage} />
      </Switch>
    
   </div>
 </Router>
    );
  }
}

export default App;

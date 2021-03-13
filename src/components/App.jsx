import React from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContexts";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Splash } from "./SplashScreen/Splash";
import Login from "./LoginSignup/Login";
import Signup from "./LoginSignup/Signup";
import PrivateRoute from "./PrivateRoute";
import ParticleBackground from ".././ParticleBG";

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Switch>
            <Redirect exact from="/" to="/welcome" />
            <Route path="/welcome" component={Splash} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            {/* <PrivateRoute exact path="/interface" component={Interface} /> */}
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;

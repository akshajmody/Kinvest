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
import Particles from "react-particles-js";

function App() {
  return (
    <Container
    // className="d-flex align-items-center justify-content-center"
    // style={{ minHeight: "90vh" }}
    >
      {/* <div className="w-100" style={{ maxWidth: '425px' }}> */}
      <Router>
        <AuthProvider>
          <Switch>
            {/* <ParticleBackground
              style={{
                position: "fixed",
                zIndex: "-100",
                height: "100%",
                width: "100%",
              }}
            /> */}
            <Redirect exact from="/" to="/welcome" />
            <Route path="/welcome" component={Splash} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            {/* <PrivateRoute exact path="/interface" component={Interface} /> */}
          </Switch>
        </AuthProvider>
      </Router>
      {/* </div> */}
    </Container>
  );
}

export default App;

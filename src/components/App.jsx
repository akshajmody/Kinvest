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

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "90vh" }}
    >
      {/* <div className="w-100" style={{ maxWidth: '425px' }}> */}
      <Router>
        <AuthProvider>
          <Switch>
            {/* <PrivateRoute exact path="/" component={Interface} /> */}
            <Redirect exact from="/" to="/welcome" />
            <Route path="/welcome" component={Splash} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
          </Switch>
        </AuthProvider>
      </Router>
      {/* </div> */}
    </Container>
  );
}

export default App;

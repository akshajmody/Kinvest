import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import ParticleBackground from "../../ParticleBG";
import "../../styles/particles.css";

export const Splash = () => {
  const history = useHistory();

  return (
    <div>
      <ParticleBackground />
      <div className="w-100 text-center position-absolute">
        <div>PLACEHOLDER</div>
        <div>IMAGE</div>
        <div>
          <Link className="link" to="/signup">
            Don't have an account? Sign up here!
          </Link>
        </div>
      </div>
    </div>
  );
};

import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import ParticleBackground from "../../ParticleBG";

export const Splash = () => {
  const history = useHistory();

  return (
    <div className="w-100" style={{ maxWidth: "425px" }}>
      <div>PLACEHOLDER</div>
      <div>IMAGE</div>
      <div className="w-100 text-center mb-3">
        <Link className="link" to="/signup">
          Don't have an account? Sign up here!
        </Link>
      </div>
    </div>
  );
};

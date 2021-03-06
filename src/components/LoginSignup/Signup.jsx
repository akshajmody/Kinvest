import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContexts";
import { Link, useHistory } from "react-router-dom";
import ParticleBackground from "../../ParticleBG";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Password confirmation failed");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Account creation failed");
    }

    setLoading(false);
  }

  return (
    //FRAGMENT
    <>
      {/* <ParticleBackground /> */}
      <div className="w-100 " style={{ maxWidth: "425px" }}>
        <Card className="card">
          <Card.Body>
            <h1 className="text-center mb-3">kinvest</h1>
            <h6 className="text-center mb-3">Join today!</h6>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
              <Form.Group id="password-confirm">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control
                  type="password"
                  ref={passwordConfirmRef}
                  required
                />
              </Form.Group>
              <Button
                variant="success"
                disabled={loading}
                className="w-100"
                type="submit"
              >
                SIGN UP
              </Button>
            </Form>
          </Card.Body>
          <div className="w-100 text-center mb-3">
            <Link className="link" to="/login">
              Existing user? Log In here!
            </Link>
          </div>
        </Card>
      </div>
    </>
  );
}

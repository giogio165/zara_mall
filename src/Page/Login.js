import React from "react";
import { Container } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function Login({ setLogin }) {
  const navigate = useNavigate();
  const loginUser = () => {
    setLogin(true);
    navigate("/");
  };
  return (
    <Container>
      <Form>
        {/* Form & type이 submit이어서 onSubmit을 써줘야한다 onClick말고  그리고 새로고침하니까 preventDefault()써줘야함*/}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>ID</Form.Label>
          <Form.Control type="email" placeholder="Enter ID" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="dark" onClick={loginUser}>
          Log in
        </Button>
      </Form>
    </Container>
  );
}

export default Login;

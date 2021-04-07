import React, {useState} from 'react';
import './signup.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SignUp = (props) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div class="signup">
      <Row>
        <Col class="loginbox">
          <h3>Welcome Back</h3>
          <p>To keep connected with us please login with your personal info</p>
          <Button variant="light" class="sign-in--btn">Sign In</Button>
        </Col>
        <Col>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Control
                type="text"
                placeholder="Name"
                value={name}
                onChange={e => setName(e.target.value)}/>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit">Sign Up</Button>
          </Form>
        </Col>
      </Row>
    </div>
  )
};

export default SignUp;

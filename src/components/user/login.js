import React, {useState} from 'react';
import './signup.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Login = (props) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div class="login">
      <Row>
        <Col>
          <Form>
            <h3>Sign in to React Tally!</h3>
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
            <Button variant="primary" type="submit">Login</Button>
          </Form>
        </Col>
        <Col class="signupbox">
          <h3>Hello Friend!~</h3>
          <p>Enter your personal details and tally up your work!</p>
          <Button variant="light" class="sign-in--btn" onClick={() => props.toggleLogin(!props.hasAccount)}>Sign Up</Button>
        </Col>
      </Row>
    </div>
  )
};

export default Login;

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
    <div className="login">
      <Row xs={1} md={2}>
        <Col className="p-4 login--col d-flex align-items-center">
          <Form>
            <h2 className="signup--title mb-4">Login to Your Account</h2>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="p-3"/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="p-3"/>
            </Form.Group>
            <Button type="submit" className="sign-up--btn py-2 px-5 my-4">Login</Button>
          </Form>
        </Col>
        <Col className="signupbox p-4 d-flex justify-content-center flex-column">
          <h2 className="login--title">Hello Friend!~</h2>
          <p className="login--content my-3">Enter your personal details and tally up your work!</p>
          <Button className="sign-in--btn py-2 px-5 my-3" onClick={() => props.toggleLogin(!props.hasAccount)}>Sign Up</Button>
        </Col>
      </Row>
    </div>
  )
};

export default Login;

import React, {useState} from 'react';
import './signup.css';

import localforage from 'localforage';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

const SignUp = (props) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validated, handleValidation] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    // Prevent default behavior of button submission
    event.preventDefault();

    // Prevent events from bubbling up to parent
    event.stopPropagation();

    // Toggle the form to show validation styles whether it's valid or invalid
    handleValidation(true);

    if (form.checkValidity()) {
      console.log('Form is valid', form.checkValidity());
      const account = {
        name,
        email,
        password
      };
      localforage.setItem('account', account).then((value) => {
        console.log(value);
      }).catch((err) => {
        console.error(err);
      })
    }

  }


  return (
    <div class="signup">
      <Row>
        <Col class="loginbox">
          <h3>Welcome Back</h3>
          <p>To keep connected with us please login with your personal info</p>
          <Button variant="light" class="sign-in--btn" onClick={() => props.toggleLogin(!props.hasAccount)}>Sign In</Button>
        </Col>
        <Col>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicName">
              <Form.Control
                type="text"
                placeholder="Name"
                value={name}
                required
                onChange={e => setName(e.target.value)}/>
              <FormControl.Feedback type="valid">Nice name!</FormControl.Feedback>
              <FormControl.Feedback type="invalid">Please enter your name</FormControl.Feedback>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                required
                onChange={e => setEmail(e.target.value)}/>
              <FormControl.Feedback type="valid">Looks good!</FormControl.Feedback>
              <FormControl.Feedback type="invalid">Please enter a valid Email</FormControl.Feedback>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                required
                onChange={e => setPassword(e.target.value)}/>
              <FormControl.Feedback type="valid">Looks good!</FormControl.Feedback>
              <FormControl.Feedback type="invalid">Please enter a password</FormControl.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit">Sign Up</Button>
          </Form>
        </Col>
      </Row>
    </div>
  )
};

export default SignUp;

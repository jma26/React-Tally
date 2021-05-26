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
    <div className="signup">
      <Row xs={1} md={2}>
        <Col className="loginbox login--col p-4 d-flex align-items-center">
          <div className="login-container">
            <h2 className="login--title">Welcome Back</h2>
            <p className="login--content my-3">To keep connected with us please login with your personal info</p>
            <Button className="sign-in--btn py-2 px-5 my-4" onClick={() => props.toggleLogin(!props.hasAccount)}>Sign In</Button>
          </div>
        </Col>
        <Col className="p-4">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <h2 className="signup--title mb-4">Create Free Account</h2>
            <Form.Group controlId="formBasicName">
              <Form.Control
                type="text"
                placeholder="Name"
                value={name}
                required
                onChange={e => setName(e.target.value)}
                className="p-3"/>
              <FormControl.Feedback type="valid">Nice name!</FormControl.Feedback>
              <FormControl.Feedback type="invalid">Please enter your name</FormControl.Feedback>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                required
                onChange={e => setEmail(e.target.value)}
                className="p-3"/>
              <FormControl.Feedback type="valid">Looks good!</FormControl.Feedback>
              <FormControl.Feedback type="invalid">Please enter a valid Email</FormControl.Feedback>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                required
                onChange={e => setPassword(e.target.value)}
                className="p-3"/>
              <FormControl.Feedback type="valid">Looks good!</FormControl.Feedback>
              <FormControl.Feedback type="invalid">Please enter a password</FormControl.Feedback>
            </Form.Group>
            <Button type="submit" className="sign-up--btn py-2 px-5 my-4">Sign Up</Button>
          </Form>
        </Col>
      </Row>
    </div>
  )
};

export default SignUp;

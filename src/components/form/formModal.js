import React, {useState} from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const FormModal = (props) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div class="form">
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
    </div>
  )
};

export default FormModal;

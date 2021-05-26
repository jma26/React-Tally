import React from 'react';
import './home.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import UserForm from '../../components/user/userForm.js';

const Home = () => (
  <div className="home">
    <Container>
      <Row>
        <Col>
          <h1>React Tally</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <UserForm />
        </Col>
      </Row>
    </Container>
  </div>
);

export default Home;

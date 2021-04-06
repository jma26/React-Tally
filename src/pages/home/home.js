import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import FormModal from '../../components/form/formModal';

const Home = (props) => (
  <div class="home">
    <Container>
      <Row>
        <Col>
          <h1>React Tally</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormModal />
        </Col>
      </Row>
    </Container>
  </div>
);

export default Home;

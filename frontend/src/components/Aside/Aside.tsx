import React from 'react'
import { Button, ButtonGroup, Container, Row } from 'react-bootstrap';
import './Aside.scss';

const Aside = () => {
  return (
    <Container id="aside-container" className="app__flexColumn app__container">
      <Row className="aside-tasks">
        <h4 className="app__header-text aside-header">Tasks</h4>
        <ButtonGroup vertical>
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
        </ButtonGroup>
        <h4 className="app__header-text aside-header">Projects</h4>
        {/* Project Categories */}
      </Row>
    </Container>
  )
}

export default Aside
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { CardFormComp } from '../components/CardFormComp'
import { GroupCardsComp } from '../components/GroupCardsComp'

export const TodoPage = () => {
  return (
    <>
      <Container>
        <Row>
          <Col sm={9}>
            <GroupCardsComp/>
          </Col>
          <Col sm={3}>
            <CardFormComp/>
          </Col>
        </Row>
      </Container>
    </>
  )
}

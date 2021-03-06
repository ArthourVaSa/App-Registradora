import React, { useContext, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { CardFormComp } from '../components/CardFormComp'
import {CardsComp} from '../components/CardsComp'
import ServicesContext from '../context/Services/ServicesContext'


export const AutoPage = () => {

  const serviceContext = useContext(ServicesContext);

  useEffect(() => {
    serviceContext.getServices('auto');
  },[]);

  return (
    <>
      <Container>
        <Row>
          <Col sm={9}>
            <Row className='group-cards'>
              {serviceContext.selectedService.length !== 0 ? serviceContext.selectedService.map(service => <CardsComp key={service.id} id={service.id} title={service.nombre} desc={service.descripcion}/>) : <h1>No hay datos aún</h1>}
            </Row>
          </Col>
          <Col sm={3}>
            <CardFormComp/>
          </Col>
        </Row>
      </Container>
    </>
  )
}

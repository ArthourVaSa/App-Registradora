import React, {useContext} from 'react'
import { CardsComp } from '../components/CardsComp'
import {Row} from 'react-bootstrap'
import ServicesContext from '../context/Services/ServicesContext'

export const GroupCardsComp = () => {

    const servicesContext = useContext(ServicesContext);

  return (
    <>
        <Row className='group-cards'>
            {servicesContext.services.length !== 0 ? servicesContext.services.map(service => <CardsComp key={service.id} id={service.id} title={service.nombre} desc={service.descripcion}/>) : <h1>No hay datos aún</h1>}
        </Row>
    </>
  )
}

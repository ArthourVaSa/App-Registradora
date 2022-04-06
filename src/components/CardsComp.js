import React, { memo, useContext } from 'react'
import {Card,Button} from 'react-bootstrap'
import ServicesContext from '../context/Services/ServicesContext'

import './styles.css'

export const CardsComp = memo(({id,title,desc}) => {

  const serviceContext = useContext(ServicesContext);

  const handleEliminar = (id) => {
    serviceContext.deleteService(id);
  }

  const handleEditar = (id) => {
    serviceContext.editService(id);
  }

  return (
    <Card style={{ width: '17rem', padding: '0' }} key={id} className='cards'>
    <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {desc}
        </Card.Text>
    </Card.Body>
    <Card.Footer>
        <Button variant="link" className='btn' onClick={() => handleEditar(id)}>Editar</Button>
        <Button variant="link" className='btn' onClick={() => handleEliminar(id)}>Eliminar</Button>
    </Card.Footer>
    </Card>
  )
});

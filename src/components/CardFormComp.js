import React, { useContext } from 'react'
import {Card,Button, Form} from 'react-bootstrap'
import { useForm } from '../hooks/useForm'
import ServiceContext from '../context/Services/ServicesContext'

export const CardFormComp = () => {
    const serviceContext = useContext(ServiceContext);
    const {form,handleChange,handleSubmit, handleCancel, handleEdit} = useForm();
    const {nombre, descripcion, select} = form;

    console.log(serviceContext.ediService);
  return (
    <Card style={{ width: '100%' }} className='form-card'>
    <Card.Body>
        {serviceContext.ediService[0] === null ? <Card.Title>Servicio</Card.Title> : <Card.Title>{serviceContext.ediService[0].nombre}</Card.Title>}
        <Form noValidate>
        <Form.Group className="mb-3" controlId="nombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" name='nombre' onChange={handleChange} value={nombre} required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="descripcion">
            <Form.Label>Descripcion</Form.Label>
            <Form.Control type="text" name='descripcion' onChange={handleChange} value={descripcion} required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="descripcion">
            <Form.Label>Identificador</Form.Label>
            <Form.Select aria-label="Default select example" onChange={handleChange} name='select' value={select}>
                <option value="">Elija un Identificador</option>
                <option value="auto">Auto</option>
                <option value="salud">Salud</option>
                <option value="hogar">Hogar</option>
            </Form.Select>
        </Form.Group>
        </Form>
    </Card.Body>
    <Card.Footer>
        {serviceContext.ediService[0] === null ? <Button variant="outline-success" onClick={handleSubmit}>Grabar</Button> : <Button variant="outline-success" onClick={handleEdit}>Editar</Button>}
        <Button variant="outline-danger" onClick={handleCancel}>Cancelar</Button>
    </Card.Footer>
    </Card>
  )
}

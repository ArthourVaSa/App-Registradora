import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

export const NavBarComp = () => {
  return (
      <Navbar bg="light" variant="light" className='navBar'>
        <Container>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to='/'>Todo</Nav.Link>
          <Nav.Link as={NavLink} to='/auto'>Auto</Nav.Link>
          <Nav.Link as={NavLink} to='/salud'>Salud</Nav.Link>
          <Nav.Link as={NavLink} to='/hogar'>Hogar</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
  )
}

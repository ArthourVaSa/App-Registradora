import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import { NavBarComp } from './components/NavBarComp'
import { RoutesApp } from './routes/RoutesApp'

import 'bootstrap/dist/css/bootstrap.min.css';
import { ServicesState } from './context/Services/ServicesState';

export const PruebaApp = () => {
  return (
    <>
        <ServicesState>
          <BrowserRouter>
              <NavBarComp/>
              <RoutesApp/>
          </BrowserRouter>
        </ServicesState>
    </>
  )
}

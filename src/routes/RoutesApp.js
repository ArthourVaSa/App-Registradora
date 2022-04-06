import React from 'react'
import {Routes, Route} from 'react-router-dom'

import {TodoPage} from '../pages/TodoPage'
import {AutoPage} from '../pages/AutoPage'
import {SaludPage} from '../pages/SaludPage'
import {HogarPage} from '../pages/HogarPage'

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path='/' element={<TodoPage/>}/>
      <Route path='/auto' element={<AutoPage/>}/>
      <Route path='/salud' element={<SaludPage/>}/>
      <Route path='/hogar' element={<HogarPage/>}/>
    </Routes>
  )
}

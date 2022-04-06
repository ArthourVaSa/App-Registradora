import React, {useReducer} from 'react'
import { ADD_SERVICE, GET_SERVICE, DELETE_SERVICE, EDIT_SERVICE, MODAL_SERVICE } from '../types'

import ServiceContext from './ServicesContext'
import ServiceReducer from '../../reducer/ServicesReducer'

export const ServicesState = (props) => {

    const initialState = {
        services: [],
        selectedService: [],
        ediService: [null],
        modalState: false,
    }

    const [state, dispatch] = useReducer(ServiceReducer, initialState);

    const pullServices = (service) => {
        try {
            dispatch({type: ADD_SERVICE, payload: service});
        } catch (error) {
            console.log(error);
        }
    }

    const getServices = (select) => {
        try {
            const datos = state.services.filter((service) => service.select === select);
            dispatch({type: GET_SERVICE, payload: datos});
        } catch (error) {
            console.log(error);
        }
    }

    const deleteService = (id) => {
        console.log(id);
        try {
            dispatch({type: DELETE_SERVICE, payload: state.services.map(service => {
                if(service.id === id){
                    state.services.splice(state.services.indexOf(service), 1);
                    return state.services;
                }
            })});
        } catch (error) {
            console.log(error);
        }
    }

    const editService = (id) => {
        try {
            if(id != null){
            const servicio = state.services.find(service => service.id === id);
            dispatch({type: EDIT_SERVICE, payload: servicio});
            }else {
                dispatch({type: EDIT_SERVICE, payload: null});
            }
        } catch (error) {
            console.log(error);
        }
    }

    const modalState = () => {
        try {
            dispatch({type: MODAL_SERVICE,payload:true});
        } catch (error) {
            console.log(error);
        }
            
    }

  return (
    <ServiceContext.Provider
        value={{
            services: state.services,
            selectedService: state.selectedService,
            ediService: state.ediService,
            modalState: state.modalState,
            pullServices,
            getServices,
            deleteService,
            editService,
            modalState,
        }}
    >
        {props.children}
    </ServiceContext.Provider>
  )
}

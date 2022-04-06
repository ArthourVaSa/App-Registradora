import {ADD_SERVICE, GET_SERVICE, DELETE_SERVICE, EDIT_SERVICE, MODAL_SERVICE} from '../context/types'

export default (state, action) => {
    const {payload, type} = action;

    switch(type) {
        case ADD_SERVICE:
            return {
                ...state,
                services: [payload,...state.services ],
            }
        case GET_SERVICE:
            return {
                ...state,
                selectedService: payload,
            }
        case DELETE_SERVICE:
            return {
                ...state,
                services: state.services,
            }
        case EDIT_SERVICE:
            return {
                ...state,
                ediService: [payload],
            }
        case MODAL_SERVICE:
            return {
                ...state,
                modalService: payload,
            }
        default:
            return state;
    }
}
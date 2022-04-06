import React from 'react'

export const getServicios = () => {

    const listaServicios = [];
    const services = {
        id: "",
        name: "",
        description: "",
    }

    const servicioNuevo = services;

    servicioNuevo.id = "Auto";
    servicioNuevo.name = "Servicio 1";
    servicioNuevo.description = "Descripcion del servicio 1";

    

    listaServicios.push(servicioNuevo);

    console.log(listaServicios);

  return listaServicios;
}

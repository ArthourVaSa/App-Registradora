import { useState, useContext } from 'react'
import ServicesContext from '../context/Services/ServicesContext'

export const useForm = () => {

    const servicesContext = useContext(ServicesContext);

    const [form, setForm] = useState({nombre: "", descripcion: "", select:"", id: ""});

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        if(form.nombre === "" || form.descripcion === "" || form.select === ""){
            console.log("Campos vacíos");
        }else{
            servicesContext.pullServices(form);
            form.id = servicesContext.services.length + 1;
            setForm({nombre: "", descripcion: "", select:""});
        }
        
    }

    const handleEdit = (e) => {
        const [servicio] = servicesContext.ediService;
        if(form.nombre === "" || form.descripcion === "" || form.select === ""){
            console.log("Campos vacíos");
        }else {
            servicio.nombre = form.nombre;
            servicio.descripcion = form.descripcion;
            servicio.select = form.select;
            servicesContext.editService(null);
            setForm({nombre: "", descripcion: "", select:""});
        }
    }

    const handleCancel = (e) => {
        servicesContext.editService(null);
        setForm({nombre: "", descripcion: "", id:"", select:""});
    }

  return {form,handleChange,handleSubmit, handleCancel, handleEdit};
}

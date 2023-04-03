import React from "react";
import { useEffect, useState } from "react";
import { FormularioAlumno, TablaAlumno } from "../components";
import { getAll } from "../services/EstudianteService";
import { Link } from "react-router-dom";


const AdminPage = () => {
    const [estudiante, setEstudiante]=useState(null);

    const obtenerEstudiantes=async()=>{
        setEstudiante(await getAll());
    }
    //cada vez que la pagina se recargue, el useEffect corre
    //cada vez que las variables que enten dentro de los [] CAMBIEN el useEffect va a correr 
    useEffect(()=>{
        console.log(estudiante)
        obtenerEstudiantes();
    },[])

    //esto es un comentario
    return (
        <div className='container md-4'>
            <div className='row'>
                <TablaAlumno estudiante={estudiante} />
                <FormularioAlumno />
                <Link to="/FormularioDeAlumnos"><button type="button" class="btn btn-info">Ir a formulario</button></Link>
                <a href="/TablaDeAlumnos"><button type="button" class="btn btn-info">Ir a Tabla</button></a>
            </div>
        </div>
    )
}
export default AdminPage;
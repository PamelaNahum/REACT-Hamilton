import React from "react";
import FormularioAlumno from '../components/FormularioAlumno';
import TablaAlumno from '../components/TablaAlumno';
import { Link } from "react-router-dom";

const AdminPage =()=>{
    //esto es un comentario
    return (
        <div className='container md-4'>
            <div className='row'>
                <TablaAlumno/>
                <FormularioAlumno/>
                <Link to="/FormularioDeAlumnos"><button type="button" class="btn btn-info">Ir a formulario</button></Link>
                <a href="/TablaDeAlumnos"><button type="button" class="btn btn-info">Ir a Tabla</button></a>
            </div>
        </div>
    )
}
export default AdminPage;
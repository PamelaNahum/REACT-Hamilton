import React from "react";
import { useEffect, useState } from "react";
import "../css/formulario.css"

const estudianteInit = {
    "estudiante_id": 0,
    "nombre": "",
    "apellido": "",
    "equipo_id": 0
}

const FormularioAlumno = ({ agregarEstudiante, estudianteEditado, setEstudianteEditado, editarEstudiante }) => {
    const [estudiante, setEstudiante] = useState(estudianteInit);
    //descomponemos al estudiante
    const { estudiante_id, nombre, apellido, equipo_id } = estudiante;

    const handleInputChange = (e) => {
        const handleFormValue = {
            //con los 3 puntos yo me aseguro de que los datos que tiene el estudiante PERSISTEN, NO SE PIERDEN
            //y desde eso le agrego el nuevo cambio desde el evento del formulario
            ...estudiante,
            [e.target.name]: e.target.value,
        }
        setEstudiante(handleFormValue);
    }

    useEffect(() => {
        if (estudianteEditado !== null) {
            setEstudiante(estudianteEditado);
        } else {
            setEstudiante(
                {
                    "estudiante_id": 0,
                    "nombre": "",
                    "apellido": "",
                    "equipo_id": 0
                }
            )
        }


    }, [estudianteEditado])


    return (
        <div className='col-4'>
            {estudianteEditado !== null ? (<h1>Editar Alumno</h1>) : (<h1>Agregar Alumno</h1>)}

            {estudianteEditado !== null ? (<div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">ID Estudiante</label>
                <input
                    type="text"
                    class="form-control"
                    placeholder="ID"
                    id="estudiante_id"
                    name="estudiante_id"
                    value={estudiante_id}
                    onChange={handleInputChange}
                    disabled />
            </div>)
                :
                (<></>)}

            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Nombre</label>
                <input
                    type="text"
                    class="form-control"
                    placeholder="Nombre"
                    id="nombre"
                    name="nombre"
                    value={nombre}
                    onChange={handleInputChange} />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Apellido</label>
                <input
                    type="text"
                    class="form-control"
                    placeholder="Apellido"
                    id="apellido"
                    name="apellido"
                    value={apellido}
                    onChange={handleInputChange} />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Número de Equipo</label>
                <input
                    type="text"
                    class="form-control"
                    placeholder="Número Equipo"
                    id="equipo_id"
                    name="equipo_id"
                    value={equipo_id}
                    onChange={handleInputChange} />
            </div>
            {estudianteEditado !== null ? (<div class="mb-3">
                <button type="button" class="btn btn-success" onClick={() => editarEstudiante(estudiante)}>Editar</button>
                <button type="button" class="btn btn-danger" onClick={() => setEstudianteEditado(null)}>Cancelar</button>
            </div>
            ) : (
            <div class="mb-3">
                <button type="button" class="btn btn-primary" onClick={() => agregarEstudiante(estudiante)}>Guardar</button>
            </div>)}


        </div>
    )
}

const FormularioLogin = () => {
    return (
        <div className='col-4'>
            <h1>Formulario</h1>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Correo</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Correo" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Contraseña</label>
                <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Contraseña" />
            </div>
            <div class="mb-3">
                <button type="button" class="btn btn-primary">Guardar</button>
            </div>

        </div>
    )
}

export { FormularioAlumno, FormularioLogin };
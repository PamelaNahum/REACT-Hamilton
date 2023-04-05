import React from "react";

const TablaAlumno = ({ estudiante, eliminarEstudiante }) => {
    return (
        <div className='col-8'>
            <h1>Lista de estudiantes</h1>
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Equipo</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {estudiante.map(estudiante => (
                        <tr>
                            <th scope="row">{estudiante.estudiante_id}</th>
                            <td>{estudiante.nombre}</td>
                            <td>{estudiante.apellido}</td>
                            <td>{estudiante.equipo_id}</td>
                            <td><button type="button" class="btn btn-warning">Editar</button>
                                <button type="button" class="btn btn-danger ms-2" onClick={()=> eliminarEstudiante(estudiante.estudiante_id)}>Eliminar</button></td>
                        </tr>

                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default TablaAlumno;
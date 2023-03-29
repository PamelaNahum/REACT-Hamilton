import React from "react";

const TablaAlumno =()=>{
    return(
        <div className='col-8'>
                    <h1>Lista</h1>
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
                            <tr>
                                <th scope="row">1</th>
                                <td>Fabian</td>
                                <td>Zúñiga</td>
                                <td>8</td>
                                <td><button type="button" class="btn btn-warning">Editar</button>
                                    <button type="button" class="btn btn-danger ms-2">Eliminar</button></td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Daniela</td>
                                <td>Gómez</td>
                                <td>1</td>
                                <td><button type="button" class="btn btn-warning">Editar</button>
                                    <button type="button" class="btn btn-danger ms-2">Eliminar</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
    )
}

export default TablaAlumno;
import React from 'react';

const App = () => {
    //esto es un comentario
    return (
        <div className='container md-4'>
            <div className='row'>
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
                <div className='col-4'>
                    <h1>Formulario</h1>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Nombre</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Nombre" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Apellido</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Apellido" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Número de Equipo</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Número Equipo" />
                    </div>
                    <div class="mb-3">
                        <button type="button" class="btn btn-primary">Guardar</button>
                    </div>

                </div>
            </div>
        </div>
    )

}

export default App;
import React from "react";

const FormularioAlumno = () => {
    return (
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
    )
}

export default FormularioAlumno;
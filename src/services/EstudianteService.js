import axios from "axios";
const baseURL = "http://localhost:8080";

const getAll = async ()=>{
//                               http://127.0.0.1:8080/estudiante/FindAll
    const rest = await axios.get(baseURL+"/estudiante/FindAll");
    console.log(rest);
    return rest.data;
}

//sintaxis de servicio para enviar un estudiante
const estudianteAdd = async (estudiante) => {
    /*
    como debería venir la variable estudiante
    {
        estudiante_id:1,
        nombre: "Pamela",
        apellido: "Nahum"
        equipo_id: 1
    }
    cuando AGREGAMOS un nuevo estudiante a la base, no debemos preocupar de que no venga el dato id,
    ya que este se agrega de fomra automatica en la base de datos
    entonces deberia venir así:
    {
        nombre: "Pamela",
        apellido: "Nahum"
        equipo_id: 1
    }
    
    */
   
    const rest = await axios.post(baseURL+"/estudiante/Save", estudiante);
    console.log(rest);
    return rest.data;
}

const estudianteEdit =  async (estudiante) =>{
    /*const estu ={
        estudiante_id:46,
        nombre: "Pamela",
        apellido: "Nahum",
        equipo_id: 5
    }*/
    const rest = await axios.put(baseURL+"/estudiante/Update", estudiante);
    console.log(rest);
    return rest.data;
}

const estudianteDelete = async (id) =>{
    //const estudiante_id= 46
    //si consideramos que id = 3 -> http://localhost:8080/estudiante/Delete/3
    const rest = await axios.delete(baseURL+"/estudiante/Delete/"+id);
    console.log(rest);
    return rest.data;
}



export {getAll, estudianteAdd, estudianteEdit, estudianteDelete}
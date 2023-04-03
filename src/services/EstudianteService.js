import axios from "axios";
const baseURL = "http://localhost:8080";

const getAll = async ()=>{
//                               http://127.0.0.1:8080/estudiante/FindAll
    const rest = await axios.get(baseURL+"/estudiante/FindAll");
    console.log(rest);
    return rest.data;
}

export {getAll}
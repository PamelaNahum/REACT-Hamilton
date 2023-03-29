import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import FormularioPage from './pages/FormularioPage';
import ListaPage from './pages/ListaPage';


const App = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<AdminPage/>}></Route>
            <Route path='/TablaDeAlumnos' element={<ListaPage/>}></Route>
            <Route path='/FormularioDeAlumnos' element={<FormularioPage/>}></Route>
        </Routes>
        </BrowserRouter>
    )

}

export default App;
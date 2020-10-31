// Importamos los archivos que necesitamos
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return (
        
        <header className = 'header'>

            <div className = 'nullHeader'></div>
            <Link to = '/' className= 'headerLink'>Inicio</Link>
            <div className = 'nullHeader'></div>
            <Link to = '/login' className= 'headerLink'>Login</Link>
            <div className = 'nullHeader' ></div>
            <Link to = '/signup' className= 'headerLink'>Registro</Link>
            <div id='nullTitulo'></div>
            <div className='titulo'><h1>Clínica Dental</h1></div>
            <div id='nullTitulo'></div>
            <div className='imagenLogo'></div>

            
        </header>
    )
}

export default Header;







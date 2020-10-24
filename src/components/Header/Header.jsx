// Importamos los archivos que necesitamos
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return (
        
        <header className = 'header'>
            <div className = 'nullHeader'></div>
            <Link to = '/'>Inicio</Link>
            <div className = 'nullHeader'></div>
            <Link to = '/Login'>Login</Link>
            <div className = 'nullHeader'></div>
            <Link to = '/Registro'>Registro</Link>
            <div>
            
            </div>
        </header>
    )
}

export default Header;







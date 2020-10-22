// Importamos los archivos que necesitamos
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return (
        
        <header className = 'header'>
            <span className = 'nullHeader'></span>
            <Link to = '/'>Inicio</Link>
            <span className = 'nullHeader'></span>
            <Link to = '/Login'>Login</Link>
            <span className = 'nullHeader'></span>
            <Link to = '/Registro'>Registro</Link>
            <div>
            
            </div>
        </header>
    )
}

export default Header;







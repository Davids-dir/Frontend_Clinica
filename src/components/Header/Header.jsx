// Importamos los archivos que necesitamos
import Axios from 'axios';
import React from 'react';

import { Link } from 'react-router-dom';
import './Header.scss';



const Header = ({ customer, setCustomer }) => {

    // Funciona para limpiar el LocalStorage
    const logout = () => {

        Axios.get ('http://localhost:8000/api/user/logout')

        .then (res => {
            localStorage.clear ()
            setCustomer (null)
        })
        .catch (error => {console.log (error)})
    }

    return (

        <header className = 'header'>

            <div className = 'nullHeader'></div>
            <div id='nullTitulo'></div>
            <div className='titulo'><h1>Clínica Dental</h1></div>
            <div id='nullTitulo'></div>

            <Link to = '/' className= 'headerLink'>Inicio</Link>
            <div className = 'nullHeader'></div>

            { customer ?
                <div className='customerData'>
                    <Link to = '/profile' className='headerLink'>Perfil</Link>
                    <div className = 'nullHeader' ></div>
                    <div className = 'nullHeader' ></div>
                    <Link to = '/' className='headerLink' onClick={ logout }>Cerrar sesión</Link>
                </div>
                :
                <div className='customerNull'>
                    <Link to = '/login' className='headerLink'>Iniciar sesión</Link>
                    <div className = 'nullHeaderAlt' ></div>
                    <Link to = '/signup' className= 'headerLink'>Registrarse</Link>
                </div>
            }

        </header>
    )
}

export default Header;
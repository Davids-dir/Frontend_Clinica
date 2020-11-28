// Acceso a otros archivos o dependencias
import React from 'react';
import { Link } from 'react-router-dom';

// Hoja de estilos
import './Header.scss';

// Contenedor HEADER
const Header = ({ customer, setCustomer }) => {

        // Función para limpiar el LocalStorage
       const logout = () => {
           localStorage.clear ();
            setCustomer (null)
        }

    return (
        
        <header className = 'header'>

            <div className = 'nullHeader'></div>
            <Link to = '/' className= 'headerLink'>Inicio</Link>
            <div className = 'nullHeader'></div>

            { customer ?
                <div className='customerData'>
                    <div className = 'nullHeader'></div>
                    <Link to = '/' className='headerLink' onClick={ logout }>Cerrar sesión</Link>
                </div> 
                :
                <div className='customerNull'>
                    <Link to = '/login' className= 'headerLink'>Iniciar sesión</Link>
                    <div className = 'nullHeaderAlt' ></div>
                    <Link to = '/signup' className= 'headerLink'>Registrarse</Link>
                </div> 
            }

                <div id='nullTitulo'></div>
                <div className='titulo'><h1>Clínica Dental</h1></div>
                <div id='nullTitulo'></div>
                <div className='imagenLogo'></div> 

            
        </header>
    )
}

export default Header;







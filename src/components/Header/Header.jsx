// Importamos los archivos que necesitamos
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = ({ customer, setCustomer}) => {
    
       /*const logout = () => {
            
            localStorage.clear ();
            setCustomer (null)
        }*/

    return (
        
        <header className = 'header'>

            <div className = 'nullHeader'></div>
            <Link to = '/' className= 'headerLink'>Inicio</Link>
            <div className = 'nullHeader'></div>

            
                <div className='customerData'>
                    <div className = 'nullHeader' ></div>
                    {/*<Link to = '/' className='headerLink'>Cerrar sesion</Link>*/}
                </div> 
                <div className='customerNull'>
                    <Link to = '/login' className= 'headerLink'>Iniciar sesion</Link>
                    <div className = 'nullHeaderAlt' ></div>
                    <Link to = '/signup' className= 'headerLink'>Registrarse</Link>
                </div>
                <div id='nullTitulo'></div>
                <div className='titulo'><h1>Clínica Dental</h1></div>
                <div id='nullTitulo'></div>
                <div className='imagenLogo'></div>
    

            
        </header>
    )
}

export default Header;







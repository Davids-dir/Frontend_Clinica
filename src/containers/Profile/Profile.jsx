// Importo las dependencias que vamos a emplear
import React from 'react'
import { Link } from 'react-router-dom';
// import axios from 'axios';
import './Profile.scss';



const Profile = () => {
    return (

        <div className = 'divProfile'>
            <div className = 'nullTop'>Espacio</div>
            <div className = 'nullProfile'>Panel de control
                <ul>
                    <li><Link to = '/createdate' className = 'profileLink'>Reservar cita</Link></li>
                    <li><Link to = '/showdate' className = 'profileLink'>Mostrar citas</Link></li>
                </ul>
            </div>
            <div className = 'renderDiv'>Prueba</div>
        </div>
    )
}

export default Profile;
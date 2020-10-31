// Importo las dependencias que vamos a emplear
import React from 'react'
import { Link } from 'react-router-dom';
// import axios from 'axios';
import './Profile.scss';



const Profile = () => {
    return (

        <div className = 'divProfile'>
            <div className = 'nullProfile'>Panel de control</div>
                <ul>
                    <li><Link to = '/createdate' className = 'profileLink'>Reservar cita</Link></li>
                    <li><Link to = '/showdate' className = 'profileLink'>Mostrar citas</Link></li>
                    <li><Link to = '/deletedate' className = 'profileLink'>Cancelar cita</Link></li>
                </ul>
            
            
        </div>
    )
}

export default Profile;
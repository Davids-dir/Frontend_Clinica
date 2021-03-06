// Importo las dependencias que vamos a emplear
import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom';

// import axios from 'axios';
import './Profile.scss';



const Profile = () => {

    const customer = JSON.parse ( localStorage.getItem ('customer' ));

    // const redirect = useHistory ();
    const getDate = () => {

        axios.get ('http://localhost:8000/api/costumer' + customer.id)

        .then ( res => { 
            
            console.log (res.data)
            localStorage.setItem('dates', JSON.stringify (res.data ));

            /* setTimeout = (() => {
                redirect.push ('/showdates')
            }, 1200); */
        })
        .catch ( error => {
            console.log  ( error )
        })
    };

    return (

        <div className = 'divProfile'>
            <div className = 'nullTop'></div>
            <div className = 'nullProfile'>Panel de control
                <ul>
                    <li><Link to = '/createdate' className = 'profileLink'>Reservar cita</Link></li>
                    <li><Link to = '/showdates' className = 'profileLink' onClick={ () => { getDate () }}>Mostrar citas</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Profile;
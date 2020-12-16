// Importo las dependencias necesarias
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import './Login.scss';

const Login = () => {

    // HOOK
    const [customer, setCustomer] = useState({
        email: "",
        password: ""
    })

    // Importo la funcion para redirigir al cliente
    const redirect = useHistory ();

    // Manejador de eventos
    const handleEvent = ev => { setCustomer({ ...customer, [ev.target.name]: ev.target.value }); };

    // POST hacia la base de datos
    const Send = () => {

        axios.post ( 'http://localhost:8000/api/user/login', customer )

            .then ( res => {
                
                console.log (res.data)
                localStorage.setItem ( 'customer',  JSON.stringify (res.data[1]))
                localStorage.setItem ( 'token', res.data[2].token )

                setTimeout (() => {
                    redirect.push ('/profile')
                }, 1200);

            })
            .catch ( error => {
                console.log ( error  )

            })

    };

    return (

        <div className='divLogin'>
            <form>
                <label>Email</label>
                <input type="email" name='email' placeholder='Correo electronico' onChange={handleEvent} />
                <label>Constraseña</label>
                <input type="password" name='password' placeholder='Contraseña' onChange={handleEvent} />
                <button type='button' onClick={ () => { Send () }}>Enviar</button>
            </form>
        </div>
    )
}


export default Login;
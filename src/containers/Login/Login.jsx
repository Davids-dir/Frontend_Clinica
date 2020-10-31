// Importo las dependencias necesarias
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import './Login.scss';

const Login = () => {

    // HOOK
    const [customer, setCustomer] = useState({
        name: "",
        surname: "",
        email: "",
        password: ""
    })

    // Importo la funcion para redirigir al cliente
    const redirect = useHistory ();

    // Manejador de eventos
    const handleEvent = ev => { setCustomer({ ...customer, [ev.target.name]: ev.target.type === "number" ? +ev.target.value : ev.target.value }); };

    const Send = () => {

        /*const body = {
            name: customer.name,
            surname: customer.surname,
            email: customer.email,
            password: customer.password
        };*/

        axios.post ( 'http://localhost:3001/customers/login', customer )
        // 'https://backend-clinica-dental.herokuapp.com/customers/login'

            .then ( res => {

                localStorage.setItem ('token', res.data.token)
                console.log (res.data)
                
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
                <input type="text" name='password' placeholder='Contraseña' onChange={handleEvent} />
                <button type='button' onClick={ () => { Send () }}>Enviar</button>
            </form>
        </div>
    )
}


export default Login;
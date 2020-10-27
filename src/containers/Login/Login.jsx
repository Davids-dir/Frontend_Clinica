// Importo las dependencias necesarias
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import './Login.scss';

const Login = () => {

    // HOOK
    const [Customer, setCustomer] = useState({
        name: "",
        surname: "",
        email: "",
        password: ""
    })

    // Importo la funcion para redirigir al cliente
    const redirect = useHistory ();

    // Manejador de eventos
    const handleEvent = ev => { setCustomer({ ...Customer, [ev.target.name]: ev.target.type === "number" ? +ev.target.value : ev.target.value }); };

    const Send = () => {

        let body = {
            name: Customer.name,
            surname: Customer.surname,
            email: Customer.email,
            password: Customer.password
        };

        axios.post('https://backend-clinica-dental.herokuapp.com/customers/login', body)

            .then(res =>
                console.log (res.data).send ({ message: `Bienvenido de nuevo ${Customer.name}.` }))

            .catch(error => {
                console.log(error)
            })

            setTimeout (() => {
                redirect.push ('/')
            }, 1500)
    };

    return (

        <div className='divLogin'>
            <form>
                <label>Email:<p></p><input type="email" name='email' placeholder='Correo electronico' onChange={handleEvent} />
                </label>
                <label>Constraseña:<p></p><input type="text" name='password' placeholder='Contraseña' onChange={handleEvent} />
                </label>
                <button type='button' onClick={ () => { Send () }}>Enviar</button>
            </form>
        </div>
    )
}


export default Login;
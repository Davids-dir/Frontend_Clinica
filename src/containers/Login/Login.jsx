// Importo las dependencias necesarias
import React, { useState } from 'react';
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
                console.log(res.data).send({ message: `Bienvenido de nuevo ${Customer.name}.` }))

            .catch(error => {
                console.log(error)
            })
    };

    return (

        <div className='divLogin'>
            <form>
                <label>Nombre:<p></p><input type="text" name='name' placeholder='Introduce tu nombre' onChange={handleEvent} />
                </label>
                <label>Apellidos:<p></p><input type="text" name='surname' placeholder='Introduce tus apellidos' onChange={handleEvent} />
                </label>
                <label>Email:<p></p><input type="email" name='email' placeholder='Introduce tu correo electronico' onChange={handleEvent} />
                </label>
                <label>Constraseña:<p></p><input type="text" name='password' placeholder='Introduce tu contraseña' onChange={handleEvent} />
                </label>
                <button type='submit' onClick={() => { Send() }}>Enviar</button>
            </form>
        </div>
    )
}


export default Login;
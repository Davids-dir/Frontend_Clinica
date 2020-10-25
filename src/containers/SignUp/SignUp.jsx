// Importo las dependencias necesarias
import React, { useState } from 'react';
import axios from 'axios';

import './SignUp.scss';

// Logica con el registro de usuario
const SignUp = () => {

    // HOOK
    const [NewCustomer, setNewCustomer] = useState({
        name: "",
        surname: "",
        email: "",
        password: ""
    })

    // Manejador de eventos
    const handleEvent = ev => { setNewCustomer({ ...NewCustomer, [ev.target.name]: ev.target.type === "number" ? +ev.target.value : ev.target.value }); };

    // POST hacia la base de datos
     const  Send = () => {

        let body = {
            name: NewCustomer.name,
            surname: NewCustomer.surname,
            email: NewCustomer.email,
            password: NewCustomer.password
        };

        axios.post ( 'https://backend-clinica-dental.herokuapp.com/customers/signup', body )

            .then (res => {
                console.log ( body )
            })
            .catch (error => {
                console.log (error)
            })
    };

    return (

        <div className='divSignup'>
            <form>
                <label>Nombre: <input type="text" name='name' placeholder='Introduce tu nombre' onChange={handleEvent} />
                </label>
                <label>Apellidos: <input type="text" name='surname' placeholder='Introduce tus apellidos' onChange={handleEvent} />
                </label>
                <label>Email: <input type="text" name='email' placeholder='Introduce tu correo electronico' onChange={handleEvent} />
                </label>
                <label>Constraseña: <input type="text" name='password' placeholder='Introduce tu contraseña' onChange={handleEvent} />
                </label>
                <button type='submit' onClick={ () =>  { Send () }}>Enviar</button>
            </form>
        </div>
    )
}


export default SignUp;
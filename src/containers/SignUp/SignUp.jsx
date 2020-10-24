// Importo las dependencias necesarias
import React, { useState } from 'react';
import axios from 'axios';

// Logica con el registro de usuario
const SignUp = () => {

    // HOOK
    const [customer, setCustomer] = useState({
        name: "",
        surname: "",
        email: "",
        password: ""
    })

    // Manejador de eventos
    const handleEvent = ev => { setCustomer({ ...customer, [ev.target.name]: ev.target.type === "number" ? +ev.target.value : ev.target.value });};

    return (
        <div>
            <form action="/menu" method='POST' >
                <label>Nombre
                <input type="text" name='name' placeholder='Introduce tu nombre' onChange={handleEvent}/>
                </label>
                <label>Apellidos
                <input type="text" name='surname' placeholder='Introduce tus apellidos' onChange={handleEvent}/>
                </label>
                <label>Email
                <input type="text" name='email' placeholder='Introduce tu correo electronico' onChange={handleEvent}/>
                </label>
                <label>Constraseña
                <input type="text" name='password' placeholder='Introduce tu contraseña' onChange={handleEvent}/>
                </label>
                <button type='submit'>Finalizar</button>
            </form>
        </div>
    )
}


export default SignUp;
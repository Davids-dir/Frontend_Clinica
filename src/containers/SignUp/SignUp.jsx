// Importo las dependencias necesarias
import React, { useState, notification } from 'react';
import axios from 'axios';

import './SignUp.scss';

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
    const handleEvent = ev => { setCustomer({ ...customer, [ev.target.name]: ev.target.type === "number" ? +ev.target.value : ev.target.value }); };

    // POST hacia la base de datos
     const  Singup = () => {

        axios.post ( process.env.REACT_APP_BASE_URL + '/customers/signup', customer )
            .then (res => {
                console.log ( res.data )
                notification.success ({ message: 'Tu usuario ha sido registrado con exito.' })
            })
            .catch (error => {
                notification.error({ error, message: 'Se ha producido un error en el registro.' })
            })

            setTimeout (() => {
                history.push ( '/dates/show/_id' )
            }, 1500);
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
                <button type='submit' onClick={ Singup }>Finalizar</button>
            </form>
        </div>
    )
}


export default SignUp;
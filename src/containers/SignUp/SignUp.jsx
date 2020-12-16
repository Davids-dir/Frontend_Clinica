// Importo las dependencias necesarias
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

// Importo la hoja de estilos
import './SignUp.scss';

// Logica con el registro de usuario
const SignUp = () => {

    // HOOK
    const [customer, setCustomer] = useState ({
        name: "",
        last_name: "",
        telephone: "",
        birthday: {},
        email: "",
        password: "",
    });

    // Importo la función para redirigir al cliente
    const redirect = useHistory ();

    // Manejo de eventos
    const handleEvent = ev => { setCustomer({ ...customer, [ev.target.name]: ev.target.value }); };

    // POST hacia la base de datos
     const Send = () => {

         axios.post( "http://localhost:8000/api/user", customer )

         .then (res => {
             
                setTimeout (() => {
                    redirect.push ('/')
                }, 1200)
        })
        .catch (error => {console.log(error)})
     }

    return (

        <div>
            <form>
                <label>Nombre</label>
                <input type="text" name='name' placeholder='Nombre' onChange={handleEvent} />
                <label>Apellidos</label>
                <input type="text" name='last_name' placeholder='Apellidos' onChange={handleEvent} />
                <label>Teléfono</label>
                <input type="text" name="telephone" placeholder="Teléfono" onChange={handleEvent} />
                <label>Fecha de Nacimiento</label>
                <input type="date" name="birthday" onChange={handleEvent} />
                <label>Email</label>
                <input type="text" name='email' placeholder='Correo electrónico' onChange={handleEvent} />
                <label>Contraseña</label>
                <input type="password" name='password' placeholder='Contraseña' onChange={handleEvent} />
                <button type="button" onClick={ () =>  { Send () }}>Enviar</button>
            </form>
        </div>
    )
}

export default SignUp;
// Importo las dependencias necesarias
import React, { useState } from 'react';
import {useHistory } from 'react-router-dom';
import axios from 'axios';

// Importo la hoja de estilos
import './SignUp.scss';

// Logica con el registro de usuario
const SignUp = () => {

    // HOOK
    const [customer, setCustomer] = useState ({
        name: "",
        surname: "",
        phone: {},
        email: "",
        password: ""
    });

    // Importo la funcion para redirigir al cliente
    const redirect = useHistory ();

    // Manejador de eventos
    const handleEvent = ev => { setCustomer({ ...customer, [ev.target.name]: ev.target.value }); };

    // POST hacia la base de datos
     const  Send = () => {
        
         axios.post ( 'http://localhost:3001/customers/signup', customer )
         // 'https://backend-clinica-dental.herokuapp.com/customers/signup'
         
         .then (res => {

            //localStorage.setItem ( 'token', res.data.token );
            localStorage.setItem ( 'customer', JSON.stringify ( res.data ));
            console.log ( res.data );
            
                setTimeout (() => {
                    redirect.push ('/profile')
                }, 1200)
        })
        .catch (error => { console.log (error)})
     }

    return (

        <div>
            <form>
                <label>Nombre</label>
                <input type="text" name='name' placeholder='Nombre' onChange={handleEvent} />
                <label>Apellido</label>
                <input type="text" name='surname' placeholder='Apellidos' onChange={handleEvent} />
                <label>Teléfono</label>
                <input type="text" name="phone" placeholder="Teléfono" onChange={handleEvent} />
                <label>Email</label>
                <input type="email" name='email' placeholder='Correo electronico' onChange={handleEvent} />
                <label>Constraseña</label>
                <input type="text" name='password' placeholder='Contraseña' onChange={handleEvent} />
                <button  type="button" onClick={ () =>  { Send () }}>Enviar</button>
            </form>
        </div>
    )
}

export default SignUp;
// Importo las dependencias necesarias
import React, { useState } from 'react';
import axios from 'axios';

// Importo la hoja de estilos
import './SignUp.scss';

// Logica con el registro de usuario
const SignUp = () => {

    // HOOK
    const [customer, setCustomer] = useState({
        name: "",
        surname: "",
        email: "",
        password: ""
    });

    // Manejador de eventos
    const handleEvent = ev => { setCustomer ({ ...customer, [ev.target.name]: ev.target.type === "number" ? +ev.target.value : ev.target.value })};

    // POST hacia la base de datos
     const  Send = () => {
        
        axios.post ( 'https://backend-clinica-dental.herokuapp.com/customers/signup', customer )
        .then (res => { console.log ( res.data )})
        .catch (error => { console.log (error)})
    }

    return (

        <div>
            <form>
                <label>Nombre:<p></p><input type="text" name='name' onChange={handleEvent} /></label>
                <label>Apellidos:<p></p><input type="text" name='surname' onChange={handleEvent} /></label>
                <label>Email:<p></p><input type="email" name='email' onChange={handleEvent} /></label>
                <label>Constraseña:<p></p><input type="text" name='password' onChange={handleEvent} /></label>
                <button  type="button" onClick={ () =>  { Send () }}>Enviar</button>
            </form>
        </div>
    )
}

export default SignUp;
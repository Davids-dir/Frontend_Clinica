// Importo los archivos necesarios
import axios from 'axios';
import React, { useState } from 'react';


// Importo la hoja de estilos
import './ShowDates.scss';


// Lógica para realizar la vista de las citas del cliente
const ShowDates = () => {

    let customer = localStorage.getItem ('customer')
    const [ dates, setDates ] = useState (JSON.parse (localStorage.getItem ('dates')))

    axios.get ('http://localhost:8000/api/user/' + customer.id)

    return (
        
        <div className="container">
            <div className="nullLeft">Left</div>
            <div className="mainContainer">
                <div className="tableDates">tabla</div>
            </div>
            <div className="nullRight">Right</div>
        </div>

    )
}


export default ShowDates;
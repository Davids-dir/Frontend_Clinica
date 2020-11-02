// Importo los archivos necesarios
import React, { useState } from 'react';
import axios from 'axios';

// Importo la hoja de estilos
import './ShowDates.scss';


// Logica para realizar la vista de las citas del cliente
const ShowDates = () => {

    return (

        <div className='containerDates'>Listado de citas
            <div className='datesInfo'></div>
        </div>

    )
}


export default ShowDates;
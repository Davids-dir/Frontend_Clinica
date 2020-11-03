// Importo los archivos necesarios
import React, { useState } from 'react';


// Importo la hoja de estilos
import './ShowDates.scss';


// Logica para realizar la vista de las citas del cliente
const ShowDates = () => {

    const [ dates, setDates ] = useState (JSON.parse ( localStorage.getItem ('dates')))

    return (
        
        <table className='datesTable'>
            <tr className='headerTable'>
                <th>Motivo</th>
                <th>Fecha</th>
                <th>Observaciones</th>
            </tr>
            <tr className='dataTable'>
                <td>PRUEBA</td>
            </tr>
        </table>

    )
}


export default ShowDates;
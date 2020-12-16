// Dependencias necesarias
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


//  Acceso a otros archivos del proyecto
import  Header from './components/Header/Header';
import Home from './containers/Home/Home';
import SignUp from './containers/SignUp/SignUp';
import Login from './containers/Login/Login';
import Profile from './containers/Profile/Profile';
import  CreateDate  from './containers/CreateDate/CreateDate';
import ShowDates from './containers/ShowDates/ShowDates';

// Hoja de estilos
import './App.css';


function App () {

  // Variables
  const [customer, setCustomer] = useState (JSON.parse ( localStorage.getItem ('customer')));
  
  return (

    <BrowserRouter>

        <Header customer={ customer } setCustomer={ setCustomer } />

      <Switch>
        
          {/* Rutas de usuario */}
          <Route path='/' component={ Home } exact />
          <Route path='/login' component={ Login } exact />
          <Route path='/signup' component={ SignUp } exact />
          <Route path='/profile' component={ Profile } exact />
          <Route path='/createdate' component={ CreateDate } exact />
          <Route path= '/showdates' component={ ShowDates } exact />
          
      </Switch>

    </BrowserRouter>

  );
}

export default App;

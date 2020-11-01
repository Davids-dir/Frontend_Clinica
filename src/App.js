// Importamos las librerias que necesitamos
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//  Importamos las rutas de acceso a otros archivos
import  Header from './components/Header/Header';
import SignUp from './containers/SignUp/SignUp';
import Login from './containers/Login/Login';
import Profile from './containers/Profile/Profile';

import './App.css';
import { CreateDate } from './containers/CreateDate/CreateDate';

function App () {
  return (
    <BrowserRouter>

      <Header/>

      <Switch>
        
          {/* Rutas de usuario */}
          <Route path='/login' component={ Login } exact />
          <Route path='/signup' component={ SignUp } exact />
          <Route path='/profile' component={ Profile } exact />
          <Route path='/createdate' component={ CreateDate } exact />
          
      </Switch>

    </BrowserRouter>

  );
}

export default App;

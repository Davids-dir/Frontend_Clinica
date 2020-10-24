// Importamos las librerias que necesitamos
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//  Importamos las rutas de acceso a otros archivos
import  Header from './components/Header/Header';
import SignUp from './containers/SignUp/SignUp';

import './App.css';

function App () {
  return (
    <BrowserRouter>

      <Header/>

      <Switch>

          <Route path='/signup' component={SignUp} exact/>
          
      </Switch>

    </BrowserRouter>

  );
}

export default App;

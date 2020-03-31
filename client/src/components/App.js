import React from 'react';
import {Switch, Route} from 'react-router-dom';
import About from './About/About'
import Login from './RegisterLogin/Login'

function App() {
  return (
    <>
    <Switch>
      <Route exact path='/' component={About} />
      <Route path='/login' component={Login} />
    </Switch>
   
    </>
  );
}

export default App;

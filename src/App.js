import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Signup from './controllers/User/signup';
import Signin from './controllers/User/Signin';
import Home from './controllers/Pages/Home';
import Menu from './controllers/Pages/Menu';

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signin" component={Signin} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
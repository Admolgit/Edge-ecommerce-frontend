import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Signup from './controllers/User/Signup';
import Signin from './controllers/User/Signin';
import Home from './controllers/Pages/Home';
import PrivateRoute from './auth/PrivateRoute';
import Dashboard from './controllers/User/UserDashboard'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signin" component={Signin} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
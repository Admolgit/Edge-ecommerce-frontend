import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Signup from './controllers/User/Signup';
import Signin from './controllers/User/Signin';
import Home from './controllers/Pages/Home';
import PrivateRoute from './auth/PrivateRoute';
import Dashboard from './controllers/User/UserDashboard';
import AdminRoute from './auth/AdminRoute';
import AdminDashboard from './Admin/AdminDashboard';
import AddCategory from './Admin/AddCategory';
import AddProduct from './Admin/AddProduct';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signin" component={Signin} />
        <PrivateRoute exact path="/user/dashboard" component={Dashboard} />
        <AdminRoute exact path="/admin/dashboard" component={AdminDashboard} />
        <AdminRoute exact path="/create/category" component={AddCategory} />
        <AdminRoute exact path="/create/product" component={AddProduct} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
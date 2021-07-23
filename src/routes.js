import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./screens/home";
import Register from "./screens/auth/register";
import Login from "./screens/auth/login";
import BiosIndex from "./screens/bios/index";
import UsuarioEdit from "./screens/usuarios/edit";

import PrivateRouter from './components/auth/private_route';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path='/login' component={Login}  />
      <PrivateRouter exact path='/bios' component={BiosIndex}  />
      <PrivateRouter exact path='/usuario/edit' component={UsuarioEdit}  />
    </Switch>
  </BrowserRouter>
);

export default Routes;

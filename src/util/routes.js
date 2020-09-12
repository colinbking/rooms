import React, { lazy } from 'react';
import { Route } from 'react-router-dom';


const Landing = lazy(() => import('../components/Landing'));
const Login = lazy(() => import('../components/Login'));


const routes = [
  <Route path="/login" exact component={Login} key="login" />,
  <Route path="/" exact component={Landing} allowCondition={true} key="landing" />
]

export default routes;
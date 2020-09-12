import React, { lazy } from 'react';
import { Route } from 'react-router-dom';


const Landing = lazy(() => import('../components/Landing'));
const Login = lazy(() => import('../components/Login'));
const ZoomAuth = lazy(() => import('../components/ZoomAuth'));
const Home = lazy(() => import('../components/Home'));
const Gym = lazy(() => import('../components/Gym'));


const routes = [
  <Route path="/login" exact component={Login} key="login" />,
  <Route path="/zoomAuth" exact component={ZoomAuth} key="zoomAuth" />,
  <Route path="/home" exact component={Home} key="home" />,
  <Route path="/gym" exact component={Gym} key="gym" />,
  <Route path="/" exact component={Landing} key="landing" />
]

export default routes;
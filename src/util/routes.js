import React, { lazy } from 'react';
import { Route } from 'react-router-dom';


const Landing = lazy(() => import('../components/Landing'));
const Login = lazy(() => import('../components/Login'));
const ZoomAuth = lazy(() => import('../components/ZoomAuth'));
const SpotifyAuth = lazy(() => import('../components/SpotifyAuth'));
const Home = lazy(() => import('../components/Home'));
const Gym = lazy(() => import('../components/Gym'));
const Cafe = lazy(() => import('../components/Cafe'));


const routes = [
  <Route path="/login" exact component={Login} key="login" />,
  <Route path="/zoomAuth" exact component={ZoomAuth} key="zoomAuth" />,
  <Route path="/spotifyAuth" exact component={SpotifyAuth} key="spotifyAuth" />,
  <Route path="/home" exact component={Home} key="home" />,
  <Route path="/gym" exact component={Gym} key="gym" />,
  <Route path="/cafe" exact component={Cafe} key="cafe" />,
  <Route path="/" exact component={Landing} key="landing" />
]

export default routes;
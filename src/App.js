import React, { Suspense } from 'react';
import { CssBaseline, makeStyles } from '@material-ui/core';
import './App.css';
import FadeIn from 'react-fade-in';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Switch, useLocation } from 'react-router-dom';
import 'fontsource-roboto';
import { Spinner } from 'react-spinners-css';
import { ThemeProvider } from '@material-ui/core/styles';
import globalTheme from './util/globalTheme';
import Header from './components/Header';
import routes from './util/routes';

const useStyles = makeStyles((theme) => ({
  spinner: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '10rem'
  }
}));

export default function App() {
  let location = useLocation();
  const classes = useStyles();

  return (
    <FadeIn>

      <ThemeProvider theme={globalTheme}>
        <CssBaseline />

        { location.pathname !== '/gym' && location.pathname !== '/cafe' && location.pathname !== '/home' &&
          <Header />
        }

      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          classNames="fade"
          timeout={300}
        >
          <Suspense fallback={<Spinner className={classes.spinner} color="#3E9795" />}>
            <section className="route-section">
              <Switch location={location}>
                {routes}
              </Switch>
            </section>
          </Suspense>
        </CSSTransition>
      </TransitionGroup>
      </ThemeProvider>
    </FadeIn>
  )
}
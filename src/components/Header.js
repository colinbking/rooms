import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from '../assets/gymRoom.png';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  logo: {
    maxHeight: '3rem'
  }
}));

export default function Header() {

    const classes = useStyles();

    return (
        <>
          <AppBar position="static">
              <Toolbar>
                <Link to='/'><img src={logo} className={classes.logo} alt="logo" /></Link>             
                <Typography variant="h6">&nbsp;&nbsp;<Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>ROOMY</Link></Typography>
              </Toolbar>
          </AppBar>
        </>
    );
}
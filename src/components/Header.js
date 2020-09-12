import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from '../assets/gymRoom.png';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  left: {
    flexGrow: 1,
  },
  logo: {
    maxHeight: '3rem'
  }
}));

export default function Header() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
              <Link to='/'><img src={logo} className={classes.logo} alt="logo" /></Link>             
              <Typography variant="h6">&nbsp;&nbsp;ROOMY</Typography>
            </Toolbar>
        </AppBar>
        </div>
    );
}
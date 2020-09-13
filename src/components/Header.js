import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import logo from '../assets/gymRoom.png';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  logo: {
    maxHeight: '5rem'
  },
  header: {
    backgroundColor: 'white',
    marginTop: '1rem'
  },
  logoBox: {
      // backgroundColor: '#e8e8e8',
  },
  logoText: {
      marginTop: '1.25rem',
  },
}));

export default function Header() {

    const classes = useStyles();

    return (
        <>
          <Box display="flex" flexDirection="row" className={classes.logoBox}>
              <Link to='/'><img src={logo} className={classes.logo} alt="logo" /></Link>
              <Box className={classes.logoText}>
                  <Typography variant="h4">&nbsp;&nbsp;<Link to="/" style={{ textDecoration: 'none', color: '#43200C' }}>ROOMY</Link></Typography>
              </Box>
          </Box>
        </>
    );
}


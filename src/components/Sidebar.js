import React, { useState, useEffect } from 'react';
import { Box, Grid, List, ListItem, ListItemIcon, Typography, ListItemText, Divider } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import pfp from '../assets/pfp.png';
import logo from '../assets/gymRoom.png';
import Axios from 'axios';

const api = Axios.create({
    baseURL: 'https://papps2020.uc.r.appspot.com/'
});
const headers = {
    'Content-Type': 'application/json'
}

const useStyles = makeStyles(() => ({
    bar: {
        // paddingTop: '3rem',
        height: '100vh',
        backgroundColor: '#F2F2F2',
        marginRight: '-4rem'
    },
    profileBox: {
        padding: '2rem',
        paddingRight: '0rem'
    },
    pfp: {
        height: '10rem',
        width: '10rem',
        borderRadius: '50%'
    },
    rightBox: {
        marginTop: '3rem'
    },
    usersBox: {
        marginTop: '1rem',
        marginLeft: '2rem',
        marginRight: '2rem'
    },
    logo: {
        maxHeight: '5rem',
    },
    logoBox: {
        marginBottom: '1rem',
        backgroundColor: '#e8e8e8'
    }
}));

export default function Sidebar() {
    const classes = useStyles();
    const [activeUsers, setActiveUsers] = useState([]);
    
    useEffect(() => {
        // TODO: poll
        api.get('/br/11/whos_active', {headers: headers})
        .then(res => {
            console.log("whos active res:");
            console.log(res);
            setActiveUsers(res.data);
        })
        .catch((err) => {
            console.log(err.response);
    });
    }, [])

    return (
        <Box className={classes.bar}>
            <Box className={classes.profileBox}>
                <Box display="flex" flexDirection="row" className={classes.logoBox}>
                    <Link to='/'><img src={logo} className={classes.logo} alt="logo" /></Link>             
                    <Typography variant="h6">&nbsp;&nbsp;<Link to="/" style={{ textDecoration: 'none', color: '#43200C' }}>ROOMY</Link></Typography>
                </Box>
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <img alt="Profile pic" src={pfp} className={classes.pfp} />
                    </Grid>
                    <Grid item xs={6} className={classes.rightBox}>
                        <Typography align='center' variant='h4'>
                            { localStorage.getItem("username") }
                        </Typography>
                        <Typography align='center' variant='subtitle1'>
                            Chillin'
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Divider />
            <Box className={classes.usersBox}>
                <Typography variant='h4'>
                    Roomies
                </Typography>
                <br />
                <Typography variant="h6">
                    Current users on the server:
                </Typography>
                <List component="nav" aria-label="secondary mailbox folder">
                    {activeUsers.map((user, i) => {
                        return (
                            <ListItem button key={i}>
                                <ListItemIcon>
                                    <PersonIcon color='secondary' />
                                </ListItemIcon>
                                <ListItemText primary={user} />
                            </ListItem>
                        );
                    })}
                </List>
            </Box>
        </Box>
    )
}
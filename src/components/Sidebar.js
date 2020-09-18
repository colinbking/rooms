import React, { useState, useEffect } from 'react';
import { Box, Button, Grid, List, ListItem, ListItemIcon, Typography, ListItemText, Divider } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import pfp from '../assets/pfp.png';
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
        
    },
    profileBox: {
        padding: '2rem',
        paddingRight: '0rem'
    },
    pfp: {
        height: '8rem',
        width: '8rem',
        borderRadius: '50%'
    },
    rightBox: {
        marginTop: '2rem'
    },
    usersBox: {
        marginTop: '1rem',
        marginLeft: '2rem',
        marginRight: '2rem'
    },
}));

export default function Sidebar() {
    const classes = useStyles();
    const [activeUsers, setActiveUsers] = useState([]);
    const history = useHistory();

    function getAllActiveUsers() {
        api.get('/br/11/whos_active', {headers: headers})
        .then(res => {
            console.log("whos active res:");
            console.log(res);
            setActiveUsers(res.data);
        })
        .catch((err) => {
            console.log(err.response);
        });
    }

    function handleLogout() {
        const body = {
            "username" : localStorage.getItem("username")
        }
        api.post('/br/11/left_br', body, {headers: headers})
        .then(res => {
            console.log('left big room');
            history.push('/');
        })
        .catch((err) => {
            console.log(err.response);
        });
    }
    
    useEffect(() => {
        // TODO: poll for individual rooms
        getAllActiveUsers();
        const interval = setInterval(() => {
            getAllActiveUsers();
        }, 3000)
        return () => clearInterval(interval);
    }, [])

    return (
        <Box className={classes.bar}>
            <Box className={classes.profileBox}>
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
                <br />
                <Button 
                    variant="contained"
                    fullWidth
                    onClick={() => handleLogout()}
                >
                    Logout
                </Button>
            </Box>
        </Box>
    )
}
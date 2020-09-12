import React, { useState } from 'react';
import { Box, Grid, List, ListItem, ListItemIcon, Typography, ListItemText, Divider } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import PersonIcon from '@material-ui/icons/Person';
import { makeStyles } from '@material-ui/core/styles';
import pfp from '../assets/pfp.png';


const useStyles = makeStyles(() => ({
    bar: {
        height: '93vh',
        backgroundColor: '#CDCDCD',
        boxShadow: '0px 3px 2px rgba(0, 0, 0, 0.5)',
        marginRight: '1rem'
    },
    profileBox: {
        padding: '2rem'
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
    }
}));

export default function Sidebar() {
    const classes = useStyles();

    // TODO: get this from API call useEffect
    const activeUsers = [ 'sj43', 'cbk1', 'cmz2', 'tmg5', 'pinser98' ]

    return (
        <Box className={classes.bar}>
            <Box className={classes.profileBox}>
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <img alt="Profile pic" src={pfp} className={classes.pfp} />
                    </Grid>
                    <Grid item xs={6} className={classes.rightBox}>
                        <Typography align='center' variant='h4'>
                            { sessionStorage.getItem("username") }
                        </Typography>
                        <Typography align='center' variant='subtitle1'>
                            Chillin'
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Divider />
            <Box className={classes.usersBox}>
                <Typography variant='h3'>
                    Nogrammers
                </Typography>
                <br />
                <Typography variant="h6">
                    Current users on the server:
                </Typography>
                <List component="nav" aria-label="secondary mailbox folder">
                    {activeUsers.map((user, i) => {
                        return (
                            <ListItem button>
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
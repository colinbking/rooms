import React, { useState } from 'react';
import { Box, Grid, List, ListItem, ListItemIcon, Typography, ListItemText, Divider } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
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
        marginTop: '2rem'
    }
}));

export default function Sidebar() {
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    return (
        <Box className={classes.bar}>
            <Box className={classes.profileBox}>
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <img alt="Profile pic" src={pfp} className={classes.pfp} />
                    </Grid>
                    <Grid item xs={6} className={classes.rightBox}>
                        <Typography align='center' variant='h4'>
                            Username
                        </Typography>
                        <Typography align='center' variant='subtitle1'>
                            pog
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Divider />
            <Typography align='center' variant='h3'>
                Nogrammers
            </Typography>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem
                    button
                    selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick(event, 0)}
                >
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
                </ListItem>
                <ListItem
                    button
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                >
                <ListItemIcon>
                    <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
                </ListItem>
            </List>
            <Divider />
            <List component="nav" aria-label="secondary mailbox folder">
                <ListItem
                    button
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                >
                <ListItemText primary="Trash" />
                </ListItem>
                <ListItem
                    button
                    selected={selectedIndex === 3}
                    onClick={(event) => handleListItemClick(event, 3)}
                >
                <ListItemText primary="Spam" />
                </ListItem>
            </List>
        </Box>
    )
}
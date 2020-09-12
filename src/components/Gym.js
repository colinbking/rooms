import React from 'react';
import { Container, Grid, Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import RoomGrid from './RoomGrid';
import Sidebar from './Sidebar';
import { makeStyles } from '@material-ui/core/styles';
import gymImg from '../assets/gymRoomFull.svg';

const useStyles = makeStyles(() => ({
    gymDiv: {
        backgroundImage: `url(${gymImg})`,
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',

    }
}));

export default function Gym() {
    const classes = useStyles();
    
    return (
        <div className={classes.gymDiv}>

        </div>
    )
}
import React from 'react';
import { Container, Grid, Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import gymImg from '../assets/gymFull.png';
import gymImgYT from '../assets/gymFullYT.png';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    gymDiv: {
        backgroundImage: `url(${gymImg})`,
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }, youtubeBtn: {
        height: '4rem',
        width: '6rem',
        position: 'absolute',
        top: '22.5rem',
        left: '39rem',
        color: 'transparent',
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        cursor: 'pointer',
        outline: 0
    },
    spotifyBtn: {
        height: '12rem',
        width: '15rem',
        position: 'absolute',
        top: '3rem',
        right: '34rem',
        color: 'transparent',
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        cursor: 'pointer',
        outline: 0
    },
    doorBtn: {
        height: '25rem',
        width: '8rem',
        position: 'absolute',
        top: '22rem',
        left: '6rem',
        color: 'transparent',
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        cursor: 'pointer',
        outline: 0
    },
}));

export default function Gym() {
    const classes = useStyles();
    const history = useHistory();
    
    function handleYTHover() {
        // TODO: change image
    }

    function handleYTClick() {
        // TODO: play YT vid
    }
    
    function handleSpotifyHover() {
        // TODO: change image
    }

    function handleSpotifyClick() {
        // TODO: play YT vid
    }
    
    function handleDoorHover() {
        // TODO: change image
    }

    function handleDoorClick() {
        history.push('/home');
    }

    return (
        <div className={classes.gymDiv}>
            <button className={classes.youtubeBtn} onMouseEnter={() => handleYTHover()} onClick={() => handleYTClick()}/>
            <button className={classes.spotifyBtn} onMouseEnter={() => handleSpotifyHover()} onClick={() => handleSpotifyClick()}/>
            <button className={classes.doorBtn} onMouseEnter={() => handleDoorHover()} onClick={() => handleDoorClick()}/>
        </div>
    )
}
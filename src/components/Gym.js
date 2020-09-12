import React, { useState } from 'react';
import { Container, Grid, Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import gymImg from '../assets/gymFull.png';
import gymImgYT from '../assets/gymFullYT.png';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    defaultBackground: {
        backgroundImage: `url(${gymImg})`,
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }, ytHighlight: {
        backgroundImage: `url(${gymImgYT})`,
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
    spotifyFrame: {
        position: 'absolute',
        right: '34.5rem',
        top: '12.5rem',
        transform: 'rotate(30deg)'
    }
}));

export default function Gym() {
    const classes = useStyles();
    const history = useHistory();
    const [showSpotify, setShowSpotify] = useState(false);
    const [gClass, setGClass] = useState(classes.defaultBackground);
    
    function handleYTHover() {
        // TODO: change image
        setGClass(classes.ytHighlight);
    }

    function handleYTClick() {
        // TODO: play YT vid
    }
    
    function handleSpotifyHover() {
        // TODO: change image
    }

    function handleSpotifyClick() {
        setShowSpotify(!showSpotify);
    }
    
    function handleDoorHover() {
        // TODO: change image
    }

    function handleDoorClick() {
        history.push('/home');
    }

    function resetBackground() {
        setGClass(classes.defaultBackground);
    }

    return (
        <div className={gClass}>
            <button className={classes.youtubeBtn} onMouseEnter={() => handleYTHover()} onMouseOut={() => resetBackground()} onClick={() => handleYTClick()}/>
            <button className={classes.spotifyBtn} onMouseEnter={() => handleSpotifyHover()} onClick={() => handleSpotifyClick()}/>
            <button className={classes.doorBtn} onMouseEnter={() => handleDoorHover()} onClick={() => handleDoorClick()}/>
            { showSpotify && 
                <iframe src="https://open.spotify.com/embed/playlist/5sHebLj2M8wPPc1rfLKtX9?si=ulRKMYT9R8C7Scmcny3fJQ" className={classes.spotifyFrame} width="300" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            }
        </div>
    )
}
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import cafeDefault from '../assets/cafeDefault.png';
import cafeOpen from '../assets/cafeOpen.png';
import cafeSpotify from '../assets/cafeSpotify.png';
import cafeYT from '../assets/cafeYT.png';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    defaultBackground: {
        backgroundImage: `url(${cafeDefault})`,
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }, ytHighlight: {
        backgroundImage: `url(${cafeYT})`,
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }, spotifyHighlight: {
        backgroundImage: `url(${cafeSpotify})`,
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }, openDoor: {
        backgroundImage: `url(${cafeOpen})`,
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }, youtubeBtn: {
        height: '4rem',
        width: '6rem',
        position: 'absolute',
        top: '22.5rem',
        left: '43rem',
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
        right: '40rem',
        color: 'transparent',
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        cursor: 'pointer',
        outline: 0
    },
    doorBtn: {
        height: '25rem',
        width: '12rem',
        position: 'absolute',
        top: '24rem',
        left: '3rem',
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

export default function Cafe() {
    const classes = useStyles();
    const history = useHistory();
    const [showSpotify, setShowSpotify] = useState(false);
    const [gClass, setGClass] = useState(classes.defaultBackground);
    
    function handleYTHover() {
        setGClass(classes.ytHighlight);
    }

    function handleYTClick() {
        // TODO: play YT vid
    }
    
    function handleSpotifyHover() {
        setGClass(classes.spotifyHighlight);
    }

    function handleSpotifyClick() {
        setShowSpotify(!showSpotify);
    }
    
    function handleDoorHover() {
        setGClass(classes.openDoor);
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
            <button className={classes.spotifyBtn} onMouseEnter={() => handleSpotifyHover()} onMouseOut={() => resetBackground()} onClick={() => handleSpotifyClick()}/>
            <button className={classes.doorBtn} onMouseEnter={() => handleDoorHover()} onMouseOut={() => resetBackground()} onClick={() => handleDoorClick()}/>
            { showSpotify && 
                <iframe title="spotify" src="https://open.spotify.com/embed/playlist/5sHebLj2M8wPPc1rfLKtX9?si=ulRKMYT9R8C7Scmcny3fJQ" className={classes.spotifyFrame} width="300" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            }
        </div>
    )
}
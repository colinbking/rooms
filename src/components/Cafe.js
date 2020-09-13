import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import cafeDefault from '../assets/cafeDefault.png';
import cafeOpen from '../assets/cafeOpen.png';
import cafeWhiteboard from '../assets/cafeWhiteboard.png';
import cafeSpotify from '../assets/cafeSpotify.png';
import cafeZoom from '../assets/cafeZoom.png';
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
    }, zoomHighlight: {
        backgroundImage: `url(${cafeZoom})`,
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }, whiteboardHighlight: {
        backgroundImage: `url(${cafeWhiteboard})`,
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
    zoomBtn: {
        height: '7rem',
        width: '15rem',
        position: 'absolute',
        top: '29rem',
        left: '20rem',
        color: 'transparent',
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        cursor: 'pointer',
        outline: 0
    },
    whiteboardBtn: {
        height: '8rem',
        width: '6rem',
        position: 'absolute',
        top: '13rem',
        right: '34rem',
        color: 'transparent',
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        cursor: 'pointer',
        outline: 0
    },
    spotifyFrameHidden: {
        position: 'absolute',
        right: '1rem',
        top: '1rem',
        visibility: 'hidden'
    },
    spotifyFrameShow: {
        position: 'absolute',
        right: '1rem',
        top: '1rem',
        visibility: 'visible'
    },
    whiteboardFrameShow: {
        position: 'absolute',
        right: '1rem',
        bottom: '1rem',
        visibility: 'visible'
    },
    whiteboardFrameHidden: {
        position: 'absolute',
        right: '1rem',
        bottom: '1rem',
        visibility: 'hidden'
    },
    ytFrameShow: {
        position: 'absolute',
        left: '1rem',
        top: '1rem',
        visibility: 'visible'
    },
    ytFrameHidden: {
        position: 'absolute',
        left: '1rem',
        top: '1rem',
        visibility: 'hidden'
    },
}));

export default function Cafe() {
    const classes = useStyles();
    const history = useHistory();
    const [sClass, setSClass] = useState(classes.spotifyFrameHidden);
    const [gClass, setGClass] = useState(classes.defaultBackground);
    const [wClass, setWClass] = useState(classes.whiteboardFrameHidden);
    const [yClass, setYClass] = useState(classes.ytFrameHidden);

    function handleYTHover() {
        setGClass(classes.ytHighlight);
    }

    function handleYTClick() {
        if (yClass === classes.ytFrameShow) {
            setYClass(classes.ytFrameHidden);
        } else {
            setYClass(classes.ytFrameShow)
        }
    }

    function handleWhiteboardHover() {
        setGClass(classes.whiteboardHighlight);
    }

    function handleWhiteboardClick() {
        if (wClass === classes.whiteboardFrameShow) {
            setWClass(classes.whiteboardFrameHidden);
        } else {
            setWClass(classes.whiteboardFrameShow)
        }
    }

    function handleZoomHover() {
        setGClass(classes.zoomHighlight);
    }

    function handleZoomClick() {
        // Join/create zoom meeting
        // const body = {
        //     "username" : localStorage.getItem("username"),
        //     "id" : 4
        // }        
        // api.put('/gym/' + localStorage.getItem("gym_id") + '/joined_gym', body, {headers: headers})
        // .then(res => {
        //     localStorage.setItem("meeting", res.data.meeting);
        //     window.open(
        //         res.data.meeting,
        //         '_blank' // <- This is what makes it open in a new window.
        //     );
        // })
        // .catch((err) => {
        //     console.log(err.response);
        // })
    }
    
    function handleSpotifyHover() {
        setGClass(classes.spotifyHighlight);
    }

    function handleSpotifyClick() {
        if (sClass === classes.spotifyFrameShow) {
            setSClass(classes.spotifyFrameHidden);
        } else {
            setSClass(classes.spotifyFrameShow)
        }
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
            <button className={classes.whiteboardBtn} onMouseEnter={() => handleWhiteboardHover()} onMouseOut={() => resetBackground()} onClick={() => handleWhiteboardClick()}/>
            <button className={classes.zoomBtn} onMouseEnter={() => handleZoomHover()} onMouseOut={() => resetBackground()} onClick={() => handleZoomClick()}/>
            <iframe title="spotify" src="https://open.spotify.com/embed/playlist/2P8cx6O6JIu0sT2ItymYNI" className={sClass} width="300" height="185" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            <iframe title="whiteboard" width="400px" className={wClass} height="650px" src="https://r3.whiteboardfox.com/3680838-4977-9597"></iframe>
            <iframe title="youtube" className={yClass} width="560" height="315" src="https://www.youtube.com/embed/5qap5aO4i9A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}
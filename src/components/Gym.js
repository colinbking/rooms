import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import gymDefault from '../assets/gymDefault.png';
import gymOpen from '../assets/gymOpen.png';
import gymWhiteboard from '../assets/gymWhiteboard.png';
import gymSpotify from '../assets/gymSpotify.png';
import gymZoom from '../assets/gymZoom.png';
import gymYT from '../assets/gymYT.png';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';

const api = Axios.create({
    baseURL: 'https://papps2020.uc.r.appspot.com/'
    // baseURL: 'https://20200912t152951-dot-papps2020.uc.r.appspot.com/'
});
const headers = {
    'Content-Type': 'application/json'
}


const useStyles = makeStyles(() => ({
    defaultBackground: {
        backgroundImage: `url(${gymDefault})`,
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }, ytHighlight: {
        backgroundImage: `url(${gymYT})`,
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }, spotifyHighlight: {
        backgroundImage: `url(${gymSpotify})`,
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }, whiteboardHighlight: {
        backgroundImage: `url(${gymWhiteboard})`,
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }, openDoor: {
        backgroundImage: `url(${gymOpen})`,
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }, zoomHighlight: {
        backgroundImage: `url(${gymZoom})`,
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
    zoomBtn: {
        height: '12rem',
        width: '15rem',
        position: 'absolute',
        bottom: '15rem',
        right: '34rem',
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
    whiteboardBtn: {
        height: '8rem',
        width: '7rem',
        position: 'absolute',
        top: '22rem',
        right: '27rem',
        color: 'transparent',
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        cursor: 'pointer',
        outline: 0
    },
    spotifyFrameShow: {
        position: 'absolute',
        right: '1rem',
        top: '1rem',
        visibility: 'visible'
    },
    spotifyFrameHidden: {
        position: 'absolute',
        right: '1rem',
        top: '1rem',
        visibility: 'hidden'
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

export default function Gym() {
    const classes = useStyles();
    const history = useHistory();
    const [gClass, setGClass] = useState(classes.defaultBackground);
    const [sClass, setSClass] = useState(classes.spotifyFrameHidden);
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
        const body = {
            "username" : localStorage.getItem("username"),
            "id" : 4
        }        
        api.put('/gym/' + localStorage.getItem("gym_id") + '/joined_gym', body, {headers: headers})
        .then(res => {
            localStorage.setItem("meeting", res.data.meeting);
            window.open(
                res.data.meeting,
                '_blank' // <- This is what makes it open in a new window.
            );
        })
        .catch((err) => {
            console.log(err.response);
        })
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
            <iframe title="spotify" src="https://open.spotify.com/embed/playlist/5sHebLj2M8wPPc1rfLKtX9?si=ulRKMYT9R8C7Scmcny3fJQ" className={sClass} width="300" height="185" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            <iframe title="whiteboard" width="400px" className={wClass} height="650px" src="https://r3.whiteboardfox.com/3680679-5793-8386"></iframe>
            <iframe title="youtube" className={yClass} width="560" height="315" src="https://www.youtube.com/embed/2pLT-olgUJs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}
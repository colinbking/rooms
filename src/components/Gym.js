import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import gymDefault from '../assets/gymDefault.png';
import gymOpen from '../assets/gymOpen.png';
import gymWhiteboard from '../assets/gymWhiteboard.png';
import gymSpotify from '../assets/gymSpotify.png';
import gymZoom from '../assets/gymZoom.png';
import gymYT from '../assets/gymYT.png';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import { Button } from '@material-ui/core';

const api = Axios.create({
    baseURL: 'https://papps2020.uc.r.appspot.com/'
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
    // ytFrameHidden: {
    //     position: 'absolute',
    //     left: '1rem',
    //     top: '1rem',
    //     visibility: 'hidden'
    // },
}));

export default function Gym() {
    const classes = useStyles();
    const history = useHistory();
    const [gClass, setGClass] = useState(classes.defaultBackground);
    const [sClass, setSClass] = useState(classes.spotifyFrameHidden);
    const [wClass, setWClass] = useState(classes.whiteboardFrameHidden);
    // const [yClass, setYClass] = useState(classes.ytFrameHidden);
    const [showYT, setShowYT] = useState(false);
    const [ytLink, setYTLink] = useState("https://www.youtube.com/embed/2pLT-olgUJs?autoplay=1");
    
    useEffect(() => {
        // Get/create zoom meeting
        const body = {
            "username" : localStorage.getItem("username"),
            "id" : localStorage.getItem("id")
        }
        api.put('/gym/' + localStorage.getItem("gym_id") + '/joined_gym', body, {headers: headers})
        .then(res => {
            localStorage.setItem("meeting", res.data.meeting);
            console.log("successfully set meeting in local storage");
        })
        .catch((err) => {
            console.log(err.response);
        })

        // Updating spotify playlist
        // TODO: for cafe, is .../cafe
        api.put('/add_playlist/gym/' + localStorage.getItem("username"), body, {headers: headers})
        .then(res => {
            console.log("successfully added to playlist");
        })
        .catch((err) => {
            console.log(err.response);
        })

    }, [])
    
    function handleYTHover() {
        setGClass(classes.ytHighlight);
    }

    function handleYTClick() {        
        if (showYT === true) {
            setShowYT(false);
        } else {
            let t = 0;
            api.get('/gym/21/join_workout', {headers: headers})
            .then(res => {
                console.log(res);
                // get back time stamp in seconds
                t = res.data.time;
            })
            .catch((err) => {
                console.log(err.response);
            });

            setYTLink(ytLink + "&start=" + t);

            setShowYT(true);
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
        // Join zoom meeting
        const mtg = localStorage.getItem("meeting");
        if (mtg) {
            window.open(
                mtg,
                '_blank' // <- This is what makes it open in a new window.
            );
        }
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
        // tell api leaving room
        const body = {
            "username" : localStorage.getItem("username")
        }
        api.put('/gym/21/left_gym', body, {headers: headers})
        .then(res => {
            console.log(res);
            // get back new list of active users
            
            history.push('/home');
        })
        .catch((err) => {
            console.log(err.response);
        });
    }

    function resetBackground() {
        setGClass(classes.defaultBackground);
    }

    function handleChat() {
        const body = {
            "note" : "asdflkjasdlfkjdsalkf"
        }
        // TODO: note is a field in room info
        api.post('/gym/21/set_note', body, {headers: headers})
        .then(res => {
            console.log(res);
            // get back note
            
            // update field here
        })
        .catch((err) => {
            console.log(err.response);
        });
    }
    function handleGetChat() {
        // TODO: note is a field in room info
        api.get('/gym/21', {headers: headers})
        .then(res => {
            console.log(res);
            // need to parse note
        })
        .catch((err) => {
            console.log(err.response);
        });
    }

    return (
        <div className={gClass}>
            <button className={classes.youtubeBtn} onMouseEnter={() => handleYTHover()} onMouseOut={() => resetBackground()} onClick={() => handleYTClick()}/>
            <button className={classes.spotifyBtn} onMouseEnter={() => handleSpotifyHover()} onMouseOut={() => resetBackground()} onClick={() => handleSpotifyClick()}/>
            <button className={classes.doorBtn} onMouseEnter={() => handleDoorHover()} onMouseOut={() => resetBackground()} onClick={() => handleDoorClick()}/>
            <button className={classes.whiteboardBtn} onMouseEnter={() => handleWhiteboardHover()} onMouseOut={() => resetBackground()} onClick={() => handleWhiteboardClick()}/>
            <button className={classes.zoomBtn} onMouseEnter={() => handleZoomHover()} onMouseOut={() => resetBackground()} onClick={() => handleZoomClick()}/>
            <iframe title="spotify" src="https://open.spotify.com/embed/playlist/5sHebLj2M8wPPc1rfLKtX9?si=ulRKMYT9R8C7Scmcny3fJQ" className={sClass} width="300" height="185" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            <iframe title="whiteboard" width="400px" className={wClass} height="650px" src="https://r3.whiteboardfox.com/3680679-5793-8386"></iframe>
            { showYT && 
                <iframe title="youtube" className={classes.ytFrameShow} width="560" height="315" src={ytLink} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            }
            <Button onClick={() => handleChat()}>chat</Button>
            <Button onClick={() => handleGetChat()}>get chat</Button>
        </div>
    )
}
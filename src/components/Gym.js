import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import gymDefault from '../assets/gymDefault.png';
import gymDefault2 from '../assets/gymDefault2.png';
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
    }, 
    defaultBackground2: {
        backgroundImage: `url(${gymDefault2})`,
        height: '98vh',
        width: '98vw',
        top: '5px',
        left: '4px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'absolute',
        zIndex: -99
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
        height: '12rem',
        width: '12rem',
        position: 'absolute',
        top: '19rem',
        left: '37rem',
        color: 'transparent',
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        cursor: 'pointer',
        outline: 0
    },
    spotifyBtn: {
        height: '14rem',
        width: '17rem',
        position: 'absolute',
        top: '1rem',
        right: '34rem',
        color: 'transparent',
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        cursor: 'pointer',
        outline: 0
    },
    zoomBtn: {
        height: '13rem',
        width: '16rem',
        position: 'absolute',
        bottom: '14rem',
        right: '34rem',
        color: 'transparent',
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        cursor: 'pointer',
        outline: 0
    },
    doorBtn: {
        height: '27rem',
        width: '14rem',
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
        height: '10rem',
        width: '9rem',
        position: 'absolute',
        top: '20rem',
        right: '26rem',
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
    const [ytLink, setYTLink] = useState("https://www.youtube.com/embed/cfetualiJqs?autoplay=1");
    const baseYT = "https://www.youtube.com/embed/cfetualiJqs?autoplay=1";
    
    useEffect(() => {
        // Get/create zoom meeting
        const body = {
            "username" : localStorage.getItem("username"),
            "id" : localStorage.getItem("id")
        }
        api.put('/gym/' + localStorage.getItem("gym_id") + '/joined_gym', body, {headers: headers})
        .then(res => {
            console.log("joined_gym res:");
            console.log(res);
            localStorage.setItem("meeting", res.data.meeting);
            console.log("successfully set meeting in local storage");
        })
        .catch((err) => {
            console.log(err.response);
        })

        // Updating spotify playlist
        // TODO: for cafe, is .../cafe
        api.get('/user/add_playlist/gym/' + localStorage.getItem("username"), {headers: headers})
        .then(res => {
            console.log("successfully added to playlist");
        })
        .catch((err) => {
            console.log(err.response);
        })

        // handle tab closure
        window.addEventListener("beforeunload", (ev) => {
            ev.preventDefault();
            // tell api leaving room
            const body = {
                "username" : localStorage.getItem("username")
            }
            api.put('/gym/21/left_gym', body, {headers: headers})
            .then(res => {
                console.log(res);
                // get back new list of active users
            })
            .catch((err) => {
                console.log(err.response);
            });
        })

        return function leaveRoom() {
            // tell api leaving room
            const body = {
                "username" : localStorage.getItem("username")
            }
            api.put('/gym/21/left_gym', body, {headers: headers})
            .then(res => {
                console.log(res);
                // get back new list of active users
            })
            .catch((err) => {
                console.log(err.response);
            });
        }
    }, [])
    
    function handleYTHover() {
        setGClass(classes.ytHighlight);
    }

    function handleYTClick() {        
        if (showYT === true) {
            setShowYT(false);
        } else {
            let t = 0;
            api.get('/gym/21/workout', {headers: headers})
            .then(res => {
                console.log(res);
                // get back time stamp in seconds
                t = res.data.time;
                setYTLink(baseYT + "&start=" + t);
                console.log("ytLink: " + ytLink);

                setShowYT(true);
            })
            .catch((err) => {
                console.log(err.response);
            });
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
        <>
        {/* <div className={classes.defaultBackground2}></div> */}
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
        </>
    )
}
import React from 'react';
import { Box, Button, Typography, Container } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Axios from 'axios';

const api = Axios.create({
    baseURL: 'https://papps2020.uc.r.appspot.com/'
    // baseURL: 'http://localhost:8080/'
});
const headers = {
    'Content-Type': 'application/json'
}

const useStyles = makeStyles(() => ({
    cont: {
        marginTop: '4rem'
    },
    box: {
        marginTop: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    formBox: {
        minWidth: '20rem',
        marginTop: '1rem',
        boxShadow: '0px 3px 6px #00000029',
        borderRadius: '15px',
        padding: '2rem 1.5rem'
    }
}));

export default function SpotifyAuth() {
    const classes = useStyles();
    const history = useHistory();

    function handleSpotify() {
        api.get('/user/' + localStorage.getItem("username") + '/get_spotify_info', {headers: headers})
        // api.get('/user/tmg5/get_spotify_info')
        .then(res => {
            console.log(res);
            history.push('/zoomAuth');
        })
        .catch((err) => {
            console.log(err.response);
        });
    }

    return (
        <>
            <Container className={classes.cont} maxWidth="md">
                <Box className={classes.box}>
                    <Typography variant="h4">
                        <Box fontWeight="fontWeightBold">Please login to Spotify</Box>
                    </Typography>
                    <Typography variant="subtitle1">
                        We will use your preferences to create a personalized playlist for each room!<br />
                    </Typography>

                    <Box className={classes.formBox}>
                        <Button 
                            fullWidth
                            variant="contained"
                            color="secondary"
                            onClick={() => handleSpotify()}
                        >
                            Sign in to Spotify
                        </Button>
                    </Box>
                </Box>
            </Container>
        </>
    )
}
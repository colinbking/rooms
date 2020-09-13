import React from 'react';
import { Box, Button, Typography, Container } from '@material-ui/core';
// import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';


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
    },
    zoomBtn: {
        backgroundColor: '#0d72ed',
    }
}));

export default function ZoomAuth() {
    const classes = useStyles();
    // const history = useHistory();

    function handleZoom() {
        window.location.href = "https://zoom.us/oauth/authorize?response_type=code&client_id=15DlGcV7RQqgsnwVXLnHsQ&redirect_uri=https://www.roomy-pennapps.space/home";
        // history.push('/home');
    }

    return (
        <>
            <Container className={classes.cont} maxWidth="md">
                <Box className={classes.box}>
                    <Typography variant="h4">
                        <Box fontWeight="fontWeightBold">Please login to zoom</Box>
                    </Typography>
                    <Typography variant="subtitle1">
                        We will use your preferences to create a personalized playlist for each room!<br />
                    </Typography>

                    <Box className={classes.formBox}>
                        <Button 
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.zoomBtn}
                            onClick={() => handleZoom()}
                        >
                            Sign in to Zoom
                        </Button>
                    </Box>
                    <br />
                    <Typography><Link to='/home'>Skip Zoom login</Link></Typography>
                </Box>
            </Container>
        </>
    )
}
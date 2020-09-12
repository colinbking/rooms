import React, { useState } from 'react';
import { Box, Button, Grid, Typography, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import doorClosed from '../assets/doorClosed.png';
import doorOpen from '../assets/doorOpen.png';

const useStyles = makeStyles(() => ({
    cont: {
        // marginTop: '2rem'
    },
    rightBox: {
        marginBottom: '2rem'
    },
    img: {
        maxHeight: '40rem',
        marginLeft: '15rem'
    }
}));

export default function Login() {
    const classes = useStyles();
    const [doorSrc, setDoorSrc] = useState(doorClosed);
    
    return (
        <>
            <Container className={classes.cont} maxWidth="lg">
                <Grid container alignItems="center" justify="center" spacing={1}>
                    <Grid item xs={6}>
                        <Link to='/login'>
                            <img src={doorSrc} className={classes.img} alt="door" 
                                onMouseEnter={() => setDoorSrc(doorOpen)}
                                onMouseOut={() => setDoorSrc(doorClosed)}
                            />
                        </Link>
                    </Grid>
                    <Grid item xs={6}>
                        <Box className={classes.rightBox}>
                            <Typography variant='h2'>
                                Welcome to Rooms.
                            </Typography>
                            <Typography variant='subtitle1'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ligula dui, eleifend ut leo eu, dictum volutpat est. Praesent a arcu non elit pretium fringilla sed et sem. Suspendisse lacinia egestas metus at faucibus. Maecenas auctor est sit amet turpis ornare, eu vulputate turpis placerat. Donec quis fermentum mi, eu porttitor quam. In ut pretium justo. Vivamus condimentum sapien eget nisi posuere bibendum.
                            </Typography>
                            <Button variant="contained" color="primary" fullWidth={true} component={Link} to={'/login'}>Enter</Button>
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </>
    )
}
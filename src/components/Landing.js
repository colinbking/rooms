import React from 'react';
import { Box, Button, Grid, Typography, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import door from '../assets/door.png';

const useStyles = makeStyles(() => ({
    cont: {
        marginTop: '8rem'
    },
    rightBox: {
        marginTop: '5rem'
    }
}));

export default function Login() {
    const classes = useStyles();
    
    return (
        <>
            <Container className={classes.cont} maxWidth="lg">
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <img src={door} alt="open door" />
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
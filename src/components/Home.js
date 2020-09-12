import React from 'react';
import { Container, Grid, Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import RoomGrid from './RoomGrid';
import Sidebar from './Sidebar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    cont: {
        marginTop: '1rem'
    },
    rightBox: {
        marginTop: '5rem'
    },
    card: {

    }
}));

export default function Login() {
    const classes = useStyles();
    
    return (
        <>
            <Grid container spacing={0}>
                <Grid item xs={3}>
                    <Sidebar />
                </Grid>
                <Grid item xs={9}>
                    <Container className={classes.cont} maxWidth='lg'>
                        <Typography variant='h4' align='center'>
                            <Box fontWeight="fontWeightBold">Nogrammers</Box>
                        </Typography>
                        <Box mt='1rem'>
                            <RoomGrid />
                        </Box>
                    </Container>
                </Grid>
            </Grid>
            
        </>
    )
}
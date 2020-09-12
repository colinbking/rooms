import React, { useState } from 'react';
import { Box, Grid, Typography, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import doorClosed from '../assets/doorClosed.png';
import doorOpen from '../assets/doorOpen.png';

const useStyles = makeStyles(() => ({
    cont: {
        marginTop: '2rem'
    },
    rightBox: {
        marginRight: '2rem',
        marginLeft: '-2rem'
    },
    img: {
        maxHeight: '40rem',
        marginLeft: '10rem'
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
                            <Typography variant='h3'>
                                There's plenty of room!
                            </Typography>
                            <Typography variant='subtitle2'>
                            <br />
                            In an increasingly virtual world, interaction at its core has begun to transform. Virtual communication has grown so common that it no longer pales in comparison to hanging out in person. In fact, the age of video calling has made it so that connectivity knows no more bounds, allowing relationships to stretch across space and time!  A room is no longer just a physical space, it is... 
                            <ul>
                                <li>a playful space</li>
                                <li>a productive space</li>
                                <li>a community space</li>
                                <li>a lofi-hip hop space</li>
                            </ul>
                            Click the door to begin.
                            </Typography>
                            {/* <Button variant="contained" color="primary" fullWidth={true} component={Link} to={'/login'}>Enter</Button> */}
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </>
    )
}
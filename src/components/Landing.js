import React, { useState } from 'react';
import { Box, Grid, Typography, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import doorAnimation from '../assets/doorAnimation.gif';
import doorClosed from '../assets/doorClosed.png';
import doorOpen from '../assets/doorOpen.png';

const useStyles = makeStyles(() => ({
    cont: {
        marginTop: '1rem'
    },
    rightBox: {
        marginRight: '2rem', //asdf
        marginLeft: '-2rem'
    },
    img: {
        maxHeight: '40rem',
        marginLeft: '10rem'
    }
}));

export default function Login() {
    const classes = useStyles();
    const [doorSrc, setDoorSrc] = useState(doorAnimation);
    
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
                                It's Roomy in here...
                            </Typography>
                            <Typography variant='subtitle2'>
                            <br/>
                            Roomy is a space that connects people in any and every way! Anyone from friends to family to classmates can spend quality time together as if they were right by each other. 
                            With music as a binding medium, soothing, exciting, and setting the atmosphere, our rooms are open to all. So come on in, it’s roomy in here!
                            <br /><br />
                            Click the door to begin.
                            </Typography>
                            <Typography color='error'><br /><br />Note: this site works best on a standard laptop resolution.</Typography>
                            {/* <Button variant="contained" color="primary" fullWidth={true} component={Link} to={'/login'}>Enter</Button> */}
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </>
    )
}
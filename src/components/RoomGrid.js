import React, { useState, useEffect } from 'react';
import { Grid, Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import deskRoom from '../assets/deskRoom.png';
import cafeRoom from '../assets/cafeRoom.png';
import gymRoom from '../assets/gymRoom.png';
import kitchenRoom from '../assets/kitchenRoom.png';
import labRoom from '../assets/labRoom.png';
import loungeRoom from '../assets/loungeRoom.png';
import Axios from 'axios';

const api = Axios.create({
    baseURL: 'https://papps2020.uc.r.appspot.com/'
});
const headers = {
    'Content-Type': 'application/json'
}


const useStyles = makeStyles(() => ({
    cont: {
        marginTop: '8rem'
    },
    rightBox: {
        marginTop: '5rem'
    },
    card: {
        
    }
}));

export default function RoomGrid() {
    const classes = useStyles();
    const [gymActiveUsers, setGymActiveUsers] = useState([]);
    const [cafeActiveUsers, setCafeActiveUsers] = useState([]);

    function getGymActiveUsers() {
        api.get('/gym/21/whos_active', {headers: headers})
        .then(res => {
            console.log("whos active res:");
            console.log(res);
            setGymActiveUsers(res.data);
        })
        .catch((err) => {
            console.log(err.response);
        });
    }
    
    useEffect(() => {
        // TODO: poll for individual rooms
        getGymActiveUsers();
        const interval = setInterval(() => {
            getGymActiveUsers();
        }, 5000)
        return () => clearInterval(interval);
    }, [])

    function getCafeActiveUsers() {
        api.get('/cafe/31/whos_active', {headers: headers})
        .then(res => {
            console.log("whos active res:");
            console.log(res);
            setCafeActiveUsers(res.data);
        })
        .catch((err) => {
            console.log(err.response);
        });
    }
    
    useEffect(() => {
        // TODO: poll for individual rooms
        getCafeActiveUsers();
        const interval = setInterval(() => {
            getCafeActiveUsers();
        }, 5000)
        return () => clearInterval(interval);
    }, [])





    // useEffect(() => {
    //     // TODO: read and map this
    //     // cafe ID: 31
    //     api.get('/gym/21/whos_active', {headers: headers})
    //     .then(res => {
    //         console.log(res);
    //     })
    //     .catch((err) => {
    //         console.log(err.response);
    //     });



    return (
        <Grid container spacing={3}>
            <Grid item xs={4}>
                <Card className={classes.card} elevation={0} >
                    <CardActionArea component={Link} to={'/gym'}>
                        <CardMedia
                            component="img"
                            alt="gym room"
                            height="275"
                            image={gymRoom}
                            title="Gym"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" align="center">
                            Gym
                        </Typography>
                        <Typography variant="body2" component="p" align="center">
                            Getting buff: &nbsp;
                            {gymActiveUsers.map((user, i) => {
                                if (i === gymActiveUsers.length - 1) {
                                    return (
                                        user
                                    );
                                } else {
                                    return (
                                        user + ', '
                                    )
                                }
                            })}
                            {
                                cafeActiveUsers.length === 0 &&
                                <span>No one's here yet!</span>
                            }

                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card className={classes.card} elevation={0}>
                    <CardActionArea component={Link} to={'/cafe'}>
                        <CardMedia
                            component="img"
                            alt="cafeRoom"
                            height="275"
                            image={cafeRoom}
                            title="Cafe"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" align="center">
                            Cafe
                        </Typography>
                        <Typography variant="body2" component="p" align="center">
                            
                            Buying a coffee: &nbsp;
                            { cafeActiveUsers.map((user, i) => {
                                    if (i === cafeActiveUsers.length - 1) {
                                        return (
                                            user
                                        );
                                    } else {
                                        return (
                                            user + ', '
                                        )
                                    }
                                })
                            }
                            {
                                cafeActiveUsers.length === 0 &&
                                <span>No one's here yet!</span>
                            }
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card className={classes.card} elevation={0}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="loungeRoom"
                            height="275"
                            image={loungeRoom}
                            title="Lounge"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" align="center">
                            Lounge
                        </Typography>
                        <Typography variant="body2" component="p" align="center">
                            Couch surfing: tmg5
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card className={classes.card} elevation={0} >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="kitchenRoom"
                            height="275"
                            image={kitchenRoom}
                            title="Kitchen"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" align="center">
                            Kitchen
                        </Typography>
                        <Typography variant="body2" component="p" align="center">
                            Cooking up a storm: cmz2
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card className={classes.card} elevation={0}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="deskRoom"
                            height="275"
                            image={deskRoom}
                            title="Study room"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" align="center">
                            Office
                        </Typography>
                        <Typography variant="body2" component="p" align="center">
                            Working hard: rixner
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card className={classes.card} elevation={0}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="labRoom"
                            height="275"
                            image={labRoom}
                            title="Classroom"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" align="center">
                            Class
                        </Typography>
                        <Typography variant="body2" component="p" align="center">
                            Streaming lectures: luay
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </Grid>
    )
}
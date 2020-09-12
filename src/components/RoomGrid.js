import React from 'react';
import { Grid, Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import deskRoom from '../assets/deskRoom.png';
import cafeRoom from '../assets/cafeRoom.png';
import gymRoom from '../assets/gymRoom.png';
import kitchenRoom from '../assets/kitchenRoom.png';
import labRoom from '../assets/labRoom.png';
import loungeRoom from '../assets/loungeRoom.png';


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
    return (
        <Grid container spacing={3}>
            <Grid item xs={4}>
                <Card className={classes.card}>
                    <CardActionArea component={Link} to={'/gym'}>
                        <CardMedia
                            component="img"
                            alt="gym room"
                            height="275"
                            image={gymRoom}
                            title="Gym"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Gym
                        </Typography>
                        <Typography variant="body2" component="p">
                            Getting buff: cbk1, sj43
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card className={classes.card}>
                    <CardActionArea component={Link} to={'/cafe'}>
                        <CardMedia
                            component="img"
                            alt="cafeRoom"
                            height="275"
                            image={cafeRoom}
                            title="Cafe"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Cafe
                        </Typography>
                        <Typography variant="body2" component="p">
                            Buying a coffee: leebron
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="loungeRoom"
                            height="275"
                            image={loungeRoom}
                            title="Lounge"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lounge
                        </Typography>
                        <Typography variant="body2" component="p">
                            Couch surfing: tmg5
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="kitchenRoom"
                            height="275"
                            image={kitchenRoom}
                            title="Kitchen"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Kitchen
                        </Typography>
                        <Typography variant="body2" component="p">
                            Cooking up a storm: cmz2
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="deskRoom"
                            height="275"
                            image={deskRoom}
                            title="Study room"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Study room
                        </Typography>
                        <Typography variant="body2" component="p">
                            Studying hard: rixner
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="labRoom"
                            height="275"
                            image={labRoom}
                            title="Classroom"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Classroom
                        </Typography>
                        <Typography variant="body2" component="p">
                            Streaming lectures: luay
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </Grid>
    )
}
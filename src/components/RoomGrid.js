import React from 'react';
import { Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import lofi from '../assets/lofi.jpg';
import gymRoom from '../assets/gymRoomIcon.svg';

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
                <Card className={classes.root}>
                <CardActionArea component={Link} to={'/gym'}>
                    <CardMedia
                        component="img"
                        alt="Lofi"
                        height="140"
                        image={gymRoom}
                        title="Gym"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Gym
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        pls study with me uwu
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Currently chilling: tmg5, cbk1, cmz2, sj43
                    </Typography>
                </CardActions>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Lofi"
                        height="140"
                        image={lofi}
                        title="Cafe"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Cafe
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        pls study with me uwu
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Currently chilling: tmg5, cbk1, cmz2, sj43
                    </Typography>
                </CardActions>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Lofi"
                        height="140"
                        image={lofi}
                        title="Cafe"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Cafe
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        pls study with me uwu
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Currently chilling: tmg5, cbk1, cmz2, sj43
                    </Typography>
                </CardActions>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Lofi"
                        height="140"
                        image={lofi}
                        title="Cafe"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Cafe
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        pls study with me uwu
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Currently chilling: tmg5, cbk1, cmz2, sj43
                    </Typography>
                </CardActions>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Lofi"
                        height="140"
                        image={lofi}
                        title="Cafe"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Cafe
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        pls study with me uwu
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Currently chilling: tmg5, cbk1, cmz2, sj43
                    </Typography>
                </CardActions>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Lofi"
                        height="140"
                        image={lofi}
                        title="Cafe"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Cafe
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        pls study with me uwu
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Currently chilling: tmg5, cbk1, cmz2, sj43
                    </Typography>
                </CardActions>
                </Card>
            </Grid>
        </Grid>
    )
}
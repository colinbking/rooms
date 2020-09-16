import React, { useEffect } from 'react';
import { Container, Grid, Box, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import RoomGrid from './RoomGrid';
import Sidebar from './Sidebar';
import { makeStyles } from '@material-ui/core/styles';
import useQuery from '../util/useQuery';
import Axios from 'axios';
import logo from '../assets/gymRoom.png';

const api = Axios.create({
    baseURL: 'https://papps2020.uc.r.appspot.com/'
});
const headers = {
    'Content-Type': 'application/json'
}

const useStyles = makeStyles(() => ({
    cont: {
        marginTop: '5rem'
    },
    rightBox: {
        marginTop: '5rem'
    },
    logo: {
        maxHeight: '5rem',
    },
    logoBox: {
        backgroundColor: '#e8e8e8',
    },
    logoText: {
        marginTop: '1.25rem',
    },
}));

export default function Home() {
    const classes = useStyles();
    const query = useQuery();
    const code = query.get("code");

    useEffect(() => {
        // Get gym and cafe id
        api.get('/br/11', {headers: headers})
        .then(res => {
            console.log("br/11 res: ");
            console.log(res);
            localStorage.setItem("gym_id", res.data.gym_id);
            localStorage.setItem("cafe_id", res.data.cafe_id);
        })
        .catch((err) => {
            console.log(err.response);
        });

        // Join big room
        const body = {
            "username" : localStorage.getItem("username")
        }
        api.put('/br/11/joined_br', body, {headers: headers})
        .then(res => {
            console.log("successfully notified br joined");
        })
        .catch((err) => {
            console.log(err.response);
        });

        // zoom login
        if (code) {
            console.log("code: " + code);
            const body = {
                "auth_code" : code
            }
            api.post('/user/' + localStorage.getItem("username") + '/zoom_login', body, {headers: headers})
            .then(res => {
                console.log("zoom login res: ");
                console.log(res);
            })
            .catch((err) => {
                console.log(err.response);
            })
        }

        // handle tab closure
        window.addEventListener("beforeunload", (ev) => {
            ev.preventDefault();
            const body = {
                "username" : localStorage.getItem("username")
            }
            api.post('/br/11/left_br', body, {headers: headers})
            .then(res => {
                console.log('left big room');
                // history.push('/');
            })
            .catch((err) => {
                console.log(err.response);
            });
        })

        // handle navigation away
        return function logout() {
            const body = {
                "username" : localStorage.getItem("username")
            }
            api.post('/br/11/left_br', body, {headers: headers})
            .then(res => {
                console.log('left big room');
                // history.push('/');
            })
            .catch((err) => {
                console.log(err.response);
            });
        }
    }, [code])
    
    return (
        <>
            <Grid container spacing={0}>
                <Grid item xs={2}>
                    <Box display="flex" flexDirection="row" className={classes.logoBox}>
                        <Link to='/'><img src={logo} className={classes.logo} alt="logo" /></Link>
                        <Box className={classes.logoText}>
                            <Typography variant="h4">&nbsp;&nbsp;<Link to="/" style={{ textDecoration: 'none', color: '#43200C' }}>ROOMY</Link></Typography>
                        </Box>
                    </Box>
                    <Sidebar />
                </Grid>
                <Grid item xs={10}>
                    <Container className={classes.cont} maxWidth='lg'>
                        <Typography variant='h3' align='center'>
                            <Box fontWeight="fontWeightBold" style={{marginTop:'-3rem', marginBottom:'3rem'}}>Roomies<br /></Box>
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
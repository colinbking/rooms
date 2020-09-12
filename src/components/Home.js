import React from 'react';
import { Container, Grid, Box, Typography } from '@material-ui/core';
import RoomGrid from './RoomGrid';
import Sidebar from './Sidebar';
import { makeStyles } from '@material-ui/core/styles';
import useQuery from '../util/useQuery';
// import { useHistory } from 'react-router-dom';
import Axios from 'axios';

const api = Axios.create({
    // baseURL: 'https://papps2020.uc.r.appspot.com/'
    baseURL: 'https://20200912t152951-dot-papps2020.uc.r.appspot.com/'
});
const headers = {
    'Content-Type': 'application/json'
}

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

export default function Home() {
    const classes = useStyles();
    // const history = useHistory();
    const query = useQuery();
    const code = query.get("code");
    
    // Code is still saved
    if (code) {
        // TODO: make api call here
        console.log("code: " + code);
        const body = {
            "auth_code" : code
        }
        api.post('/user/tmg5/zoom_login', body, {headers: headers})
        // api.get('/user/', {headers: headers})
        .then(res => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err.response);
        })
        
        // alert(code);
        // history.push('/home');
    }
    
    return (
        <>
            <Grid container spacing={0}>
                <Grid item xs={3}>
                    <Sidebar />
                </Grid>
                <Grid item xs={9}>
                    <Container className={classes.cont} maxWidth='lg'>
                        <Typography variant='h4' align='center'>
                            <Box fontWeight="fontWeightBold">Roomies</Box>
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
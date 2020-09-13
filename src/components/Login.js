import React from 'react';
import { Box, Grid, Button, Typography, Container } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Formik, Form } from 'formik';
import TextInputField from './TextInputField';
import Axios from 'axios';

const api = Axios.create({
    baseURL: 'https://papps2020.uc.r.appspot.com/'
});
const headers = {
    'Content-Type': 'application/json'
}

const useStyles = makeStyles(() => ({
    cont: {
        marginTop: '4rem'
    },
    box: {
        marginTop: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    formBox: {
        minWidth: '20rem',
        marginTop: '1rem',
        boxShadow: '0px 3px 6px #00000029',
        borderRadius: '15px',
        padding: '2rem 1.5rem'
    },
    inputField: {
        // marginBottome: '1rem'
    }
}));

export default function Login() {
    const classes = useStyles();
    const history = useHistory();

    return (
        <>
            <Container className={classes.cont} maxWidth="xs">
                <Box className={classes.box}>
                    <Typography variant="h4">
                        <Box fontWeight="fontWeightBold">Please enter a username</Box>
                    </Typography>

                    <Box className={classes.formBox}>
                        <Formik
                            initialValues={{ username: '', email: ''}}
                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                    const body = {
                                        "username" : values.username,
                                        "email" : values.email
                                    }        
                                    api.post('/user/signup', body, {headers: headers})
                                    .then(res => {
                                        console.log(res);
                                        localStorage.setItem("id", res.data.id);
                                        localStorage.setItem("username", values.username);
                                        history.push('/spotifyAuth');
                                    })
                                    .catch((err) => {
                                        console.log(err.response);
                                    })

                                    setSubmitting(false);
                                }, 400)
                            }}
                        >
                            { props => (
                                <>
                                <Form>
                                    {/* Fields */}
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                        <TextInputField
                                            variant="outlined"
                                            name="username"
                                            className={classes.inputField}
                                            InputProps={{
                                                className: classes.inputText,
                                                placeholder: "Username"
                                            }}
                                            InputLabelProps={{
                                                shrink: true
                                            }}
                                            fullWidth
                                        />
                                        <TextInputField
                                            variant="outlined"
                                            name="email"
                                            className={classes.inputField}
                                            InputProps={{
                                                className: classes.inputText,
                                                placeholder: "Zoom email"
                                            }}
                                            InputLabelProps={{
                                                shrink: true
                                            }}
                                            fullWidth
                                        />
                                        </Grid>
                                    </Grid>
                                    <br />
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        >
                                        Continue
                                    </Button>
                                    </Form>
                                </>
                            )}
                        </Formik>
                    </Box>
                </Box>
            </Container>
        </>
    )
}
import { Alert, AlertTitle, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';

const Login = () => {
    const [loginData, setLoginData] = useState();
    const { user, isLoading, authError, logInUser } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }
    const handleLoginSubmit = e => {
        alert('login successfully')
        logInUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{ mt: 9 }}>
                    <Typography variant="body1" gutterBottom>
                        Login
                    </Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />
                        <Button type="submit" variant="contained" sx={{ width: '75%', m: 1 }}>Login</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register">
                            <Button variant="text">New User?Please Register</Button>
                        </NavLink>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && !authError && <Alert severity="success">
                        <AlertTitle>Congrates</AlertTitle>
                        User logged in successfully
                    </Alert>}
                    {authError && <Alert severity="error">
                        <AlertTitle>Error</AlertTitle>
                        {authError}
                    </Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;
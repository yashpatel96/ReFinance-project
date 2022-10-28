import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  Avatar, Button, CssBaseline, TextField, Grid, Box, Typography, Container
} from '@mui/material';
//import SignUp from '../SignUp/SignUp';

// const nameRegEx = /^[a-zA-Z]+$/;

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);

  const handleEmail = () => {
    const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
console.log(password);
    return email === '' || email === null || emailRegex.test(email);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    setEmail(data.get('email'));
    setPassword(data.get('password'))

    if (handleEmail) {
      setEmailError(true);
    }

    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  /* const handleUsernameChange = (event) => {
    const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    const email = event.target.value;
    console.log(emailRegex.test(email))
    return emailRegex.test(email);
  } */

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: '#11506e' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            //noValidate
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            variant='outlined'
            //autoFocus
            error={emailError}
            helperText={emailError ? "Incorrect email, use abc@example.com format" : ""}
            sx={{
              "& .MuiInputLabel-root.Mui-focused": { color: 'rgb(17 80 110)' },
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": {
                  borderColor: "rgb(17 80 110)"
                }
              }
            }}
            
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            sx={{
              "& .MuiInputLabel-root.Mui-focused": { color: 'rgb(17 80 110)' },
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": {
                  borderColor: "rgb(17 80 110)"
                }
              }
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3, mb: 2, bgcolor: '#11506e', '&:hover': {
                background: "rgb(17 80 110 / 92%)",
              },
            }}//#15be3d
          >
            Sign In
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
            <NavLink to="/signup">
              <Typography variant="body2" color="primary">Don't have an account? Sign Up</Typography>
            </NavLink>
             {/*  <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link> */}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default LogIn;

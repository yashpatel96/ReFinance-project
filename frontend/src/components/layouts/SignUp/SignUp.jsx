import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  Avatar, Button, CssBaseline, TextField, Grid, Box, Typography, Container
} from '@mui/material';

// const nameRegEx = /^[a-zA-Z]+$/;

const SignUp = () => {
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
        <Avatar sx={{ m: 1, bgcolor: '#3c8e4f' }}> {/* #11506e, #92f3a9 */}
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  sx={{
                    "& .MuiInputLabel-root.Mui-focused": { color: 'rgb(17 80 110)' },
                    "& .MuiOutlinedInput-root.Mui-focused": {
                      "& > fieldset": {
                        borderColor: "rgb(17 80 110)"
                      }
                    }
                  }}
                  //autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  sx={{
                    "& .MuiInputLabel-root.Mui-focused": { color: 'rgb(17 80 110)' },
                    "& .MuiOutlinedInput-root.Mui-focused": {
                      "& > fieldset": {
                        borderColor: "rgb(17 80 110)"
                      }
                    }
                  }}
                />
              </Grid>
              </Grid>
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
          <TextField
            margin="normal"
            required
            fullWidth
            name="cpassword"
            label="Confirm Password"
            type="password"
            id="cpassword"
            autoComplete="confirm-password"
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
              mt: 3, mb: 2, bgcolor: '#327742', '&:hover': {
                background: "#3c8e4f",
              },
            }}//#15be3d
          >
            SIGN UP
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
            <NavLink to="/login">
              <Typography variant="body2" color="primary">Already have an account? Sign in</Typography>
            </NavLink>
              {/* <Link href="/login" variant="body2">
              {Already have an account? Sign in}
              </Link> */}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default SignUp;

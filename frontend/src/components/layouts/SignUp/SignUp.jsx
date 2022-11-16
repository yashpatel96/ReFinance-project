import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  Avatar, Button, CssBaseline, TextField, Grid, Box, Typography, Container, Alert
} from '@mui/material';
import { useAuth } from '../../../firebase/AuthContext';

// const nameRegEx = /^[a-zA-Z]+$/;

const SignUp = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const [cpassword, setCPassword] = useState('');
  const [avatar, setAvatar] = useState(); 
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [loading, setLoading] = useState(false);

  const { signup, currentUser } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setFirstname(data.get('firstname'))
    setLastname(data.get('lastname'))
    setEmail(data.get('email'));
    setPassword(data.get('password'))
    setCPassword(data.get('cpassword'))
    setAvatar(data.get('avatar'))


    if(password !== cpassword){
      return setError("Passwords do not match");
    }

    try{
      setError("")
      setLoading(true)
      await signup(email, password);
    }
    catch(error){
      console.log(error)
      setError("Failed to create an account");
    }
    setLoading(false);

    console.log({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      cpassword: cpassword,
      avatar: avatar,
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {currentUser}
        <Avatar sx={{ m: 1, bgcolor: '#3c8e4f' }}> {/* #11506e, #92f3a9 */}
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}> {/* noValidate */}
        {error!=="" ? <Alert sx={{ width: '100%', mb: 1.5}} severity="error">{error}</Alert> : ""}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstname"
                required
                fullWidth
                id="firstname"
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
                id="lastname"
                label="Last Name"
                name="lastname"
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
            //error={emailError}
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
            variant="contained"
            component="label"
            /* name="avatar"
            label="Avatar"
            type="file"
            id="avatar" */
            sx={{
              width: '70%',
              mt: 1.5, mb: 1, bgcolor: '#145ea8', '&:hover': {
                background: "#166abd",
              },
            }}>
            Upload Avatar Image
            <input type="file" id="avatar" name="avatar" hidden accept="image/*" />
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={loading}
            sx={{
              mt: 2, mb: 2, bgcolor: '#327742', '&:hover': {
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

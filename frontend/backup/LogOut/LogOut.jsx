import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../firebase/AuthContext';
import { Button, Alert, Snackbar, Typography } from "@mui/material";

const LogOut = () => {
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();
  const vertical = 'top'
  const horizontal = 'center'
  

  async function handleLogout() {

    setError("")
    try {
      await logout()
      navigate("/") //{replace: true}
    } catch (error) {
      console.log(error)
      setError("Failed to log out")
    }
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };



  return (
    <>
      <div>
        <Button
          fullWidth
          variant="contained"
          onClick={handleLogout}
          size='small'
          sx={{
            color: 'white',
            bgcolor: '#2e8d45', '&:hover': {
              background: "#35a450",
            },
            ml: 1,
            mr: -1,
            mt: -0.3,
            textTransform: 'none'
          }}//#15be3d
        >
          <Typography component="h1" variant="h6">
            Log Out
          </Typography>
        </Button>
        {error &&
          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            autoHideDuration={1200}
            onClose={handleClose}
          >
            <Alert severity="error">{error}</Alert>
          </Snackbar>}
      </div></>
  )
}

export default LogOut
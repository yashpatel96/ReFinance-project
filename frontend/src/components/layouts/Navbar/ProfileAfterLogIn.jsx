//https://mui.com/material-ui/react-app-bar/#main-content

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, IconButton, Menu, Avatar, Tooltip, MenuItem, Typography, ListItemIcon } from "@mui/material";
import Logout from '@mui/icons-material/Logout';
import { useAuth } from '../../../firebase/AuthContext';
import axios from 'axios';

const settings = [
  { "name": "Add Stock", "handle_function": "handleAddStock" },
  { "name": "Remove Stock", "handle_function": "handleRemoveStock" },
  { "name": "Add News", "handle_function": "handleAddNews" },
  { "name": "Remove News", "handle_function": "handleRemoveNews" }]

const ProfileAfterLogIn = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [error, setError] = useState("");
  const [userData, setUserData] = useState();
  const { logout, currentUser } = useAuth() // currentUser, 
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .post(process.env.REACT_APP_LOCAL + "user", {
        user_email: currentUser.email.toLowerCase()
      })
      .then((res) => { setUserData(res.data); }) // console.log(res.data)
      .catch((err) => console.log(err));
  }, [currentUser.email]);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = async () => {
    setError("")
    try {
      await logout()
      navigate("/") //{replace: true}
    } catch (e) {
      console.log(e)
      setError("Failed to log out");
      console.log(error)
    }
  }

  return (
    <div>
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open menu">
          <IconButton onClick={handleOpenUserMenu} sx={{ ml: 3, mr: -1.5, p: 0 }}>
            <Avatar alt={userData && userData.firstname} src={userData && userData.avatar} /> {/* "/static/images/avatar/2.jpg" */}
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: '40px' }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu} //  component="h4" variant="h6" 
        >
          <Typography textAlign="left" sx={{ ml: 2, mr: 2, fontSize: 18, fontWeight: 600 }}>{userData && ("Hello, " + userData.firstname)}</Typography>
          {userData && userData.role === "admin" ?
            settings.map((setting) => (
              <MenuItem key={setting.name} onClick={() => { handleCloseUserMenu(); setting.handle_function() }}>
                <Typography textAlign="center">{setting.name}</Typography>
              </MenuItem>
            )) : ""}
          <MenuItem onClick={() => { handleLogout(); handleCloseUserMenu(); }}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            <Typography textAlign="center">Logout</Typography>
          </MenuItem>
        </Menu>
      </Box>
    </div>
  )
}

export default ProfileAfterLogIn;
/* 
<MenuItem onClick={handleCloseUserMenu}>
            <Typography textAlign="center"></Typography>
          </MenuItem>
          <MenuItem onClick={handleCloseUserMenu}>
            <Typography textAlign="center">Remove Stock</Typography>
          </MenuItem>
          <MenuItem onClick={handleCloseUserMenu}>
            <Typography textAlign="center">Add News</Typography>
          </MenuItem>
          <MenuItem onClick={handleCloseUserMenu}>
            <Typography textAlign="center">Remove News</Typography>
          </MenuItem>
           */
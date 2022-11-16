//https://mui.com/material-ui/react-app-bar/#main-content

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Box, IconButton, Menu, Avatar, Tooltip, MenuItem, Typography } from "@mui/material";
import { useAuth } from '../../../firebase/AuthContext';

const ProfileAfterLogIn = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate();

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
    } catch (error) {
      console.log(error)
      setError("Failed to log out")
    }
  }


  return (
    <div>
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open menu">
          <IconButton onClick={handleOpenUserMenu} sx={{ ml: 3, mr: -1.5, p: 0 }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
          onClose={handleCloseUserMenu}
        >
          <MenuItem onClick={handleCloseUserMenu}>
            <Typography textAlign="center">Add Stock</Typography>
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
          <MenuItem onClick={handleLogout}>
            <Typography textAlign="center">Logout</Typography>
          </MenuItem>
        </Menu>
      </Box>
    </div>
  )
}

export default ProfileAfterLogIn
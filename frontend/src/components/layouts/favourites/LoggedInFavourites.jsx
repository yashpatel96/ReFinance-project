import React, { useState, useEffect } from 'react';
import './Favourites.css';
import { Box, List, ListItem, ListItemButton, ListItemText, Divider, Typography } from '@mui/material'
import axios from 'axios';
import { useAuth } from '../../../firebase/AuthContext';

const LoggedInFavourites = () => {
  const [userData, setUserData] = useState([]);
  //const [stockData, setStockData] = useState();
  const { currentUser } = useAuth()
  
  useEffect(() => {
    axios
      .post(process.env.REACT_APP_LOCAL + "user", {
        user_email: currentUser.email.toLowerCase()
      })
      .then((res) => { setUserData(res.data.favourites); console.log(res.data.favourites) }) // console.log(res.data)
      .catch((err) => console.log(err));
  }, [currentUser.email]);



  //  <div className='favourites-container'>
  return (

    <Box sx={{ width: '100%', minHeight: 250, minWidth: 210, maxWidth: 360, ml: 4, mt: 2, borderRadius: 1, boxShadow: 2, border: 1, borderColor: 'grey.300' }}>
      <nav aria-label="main mailbox folders">
        <List>
          <Typography variant='h5' sx={{ ml: 2, fontWeight: "bold" }}>Favourites</Typography>
          { userData && userData.map((stockName) => {
              return (
                <>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText primary={stockName} />
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                </>
              )
            })
          }


        </List>
      </nav>
    </Box>
  )
}

export default LoggedInFavourites
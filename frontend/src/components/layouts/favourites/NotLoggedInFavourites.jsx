import React from 'react';
import { List, Typography, ListItem, Link } from '@mui/material'

const NotLoggedInFavourites = () => {
  return (
    <List>
      <Typography variant='h6' sx={{ ml: 2, fontWeight: "bold" }}>Favourites</Typography>
      <ListItem sx={{ mt: '3rem' }}>
        <Typography variant='body2' sx={{ ml: 0.5, fontWeight: "bold" }}>In order to add a stock to favourites
          <Link href="/login"> Log In</Link> or <Link href="/signup"> Sign Up</Link>
        </Typography>
      </ListItem>
    </List>
  )
}

export default NotLoggedInFavourites
import React from 'react';
import { Box, List, Typography, ListItem, Link } from '@mui/material'

const NotLoggedInFavourites = () => {
  return (
    
    <Box sx={{ width: '100%', minHeight: 250, minWidth: 210, maxWidth: 360, ml: 4, mt: 2, borderRadius: 1, boxShadow: 2, border: 1, borderColor: 'grey.300' }}>
      <nav aria-label="main mailbox folders">
        <List>
          <Typography variant='h5' sx={{ ml: 2, fontWeight: "bold" }}>Favourites</Typography>
          <ListItem sx={{ mt:'3rem'}}>
            <Typography variant='body2' sx={{ ml: 2, fontWeight: "bold" }}>In order to add a stock to favourites
            <Link href="/login"> Log In</Link>
            </Typography>
          </ListItem>
        </List>
      </nav>
    </Box>

  )
}

export default NotLoggedInFavourites
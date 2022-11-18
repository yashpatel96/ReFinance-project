import * as React from 'react';
import { Box, Divider, ListItemText, ListItem, List } from '@mui/material';

const StockInfo = () => {
  return (
    <Box sx={{ my: 3, mx: 2, mt: -3, width: '100%', minHeight: 250, minWidth: 210, maxWidth: 360, }}>

      <List>
        <ListItem>
          <ListItemText primary="Photos" />
        </ListItem>
        <Divider variant="middle" component="li" />
        <ListItem>
          <ListItemText primary="Work" />
        </ListItem>
        <Divider variant="middle" component="li" />
        <ListItem>
          <ListItemText primary="Vacation" /> {/* secondary="July 20, 2014" */}
        </ListItem>
      </List>
    </Box>
  );
}

export default StockInfo

/* 
<ListItemAvatar>
  <Avatar>
    <BeachAccessIcon />
  </Avatar>
</ListItemAvatar>
*/
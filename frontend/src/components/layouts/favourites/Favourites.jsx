import React from 'react';
import './Favourites.css';
import { useAuth } from '../../../firebase/AuthContext';
import LoggedInFavourites from './LoggedInFavourites';
import NotLoggedInFavourites from './NotLoggedInFavourites';
// import Stack from '@mui/material/Stack';
/* 
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
 */

const Favourites = () => {
  const { currentUser } = useAuth()
  return (!currentUser) ? <NotLoggedInFavourites /> : <LoggedInFavourites />;
}

export default Favourites;


/* 
<ListItem disablePadding>
  <ListItemButton>
    <ListItemText primary="Drafts" />
  </ListItemButton>
</ListItem>
<Divider />
<ListItem disablePadding>
  <ListItemButton>
    <ListItemText primary="Trash" />
  </ListItemButton>
</ListItem>
<Divider />
<ListItem disablePadding>
  <ListItemButton component="a" href="#simple-list">
    <ListItemText primary="Spam" />
  </ListItemButton>
</ListItem>
*/


/* 
 <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
       */



/* 

    <div className='favourites-container'>
      <h2>Favourites</h2>
      <div className='flexing'>
        <div className='index_scrolling'>
          <div className="first-part-fav">
            <div className="symbol-fav">Dow Jones 30</div>
            <div className="stock-price-fav">32726.82</div>
          </div>
          <div className="second-part-fav">
            <div className="percent-change-fav negative">-0.26%</div>
            <div className="price-change-fav negative">-85.68</div>
          </div>
        </div>
        <div className='index_scrolling'>
          <div className="first-part-fav">
            <div className="symbol-fav">Dow Jones 30</div>
            <div className="stock-price-fav">32726.82</div>
          </div>
          <div className="second-part-fav">
            <div className="percent-change-fav negative">-0.26%</div>
            <div className="price-change-fav negative">-85.68</div>
          </div>
        </div>
        <div className='index_scrolling'>
          <div className="first-part-fav">
            <div className="symbol-fav">Dow Jones 30</div>
            <div className="stock-price-fav">32726.82</div>
          </div>
          <div className="second-part-fav">
            <div className="percent-change-fav negative">-0.26%</div>
            <div className="price-change-fav negative">-85.68</div>
          </div>
        </div>
        <div className='index_scrolling'>
          <div className="first-part-fav">
            <div className="symbol-fav">Dow Jones 30</div>
            <div className="stock-price-fav">32726.82</div>
          </div>
          <div className="second-part-fav">
            <div className="percent-change-fav negative">-0.26%</div>
            <div className="price-change-fav negative">-85.68</div>
          </div>
        </div>
        <div className='index_scrolling'>
          <div className="first-part-fav">
            <div className="symbol-fav">Dow Jones 30</div>
            <div className="stock-price-fav">32726.82</div>
          </div>
          <div className="second-part-fav">
            <div className="percent-change-fav negative">-0.26%</div>
            <div className="price-change-fav negative">-85.68</div>
          </div>
        </div> <div className='index_scrolling'>
          <div className="first-part-fav">
            <div className="symbol-fav">Dow Jones 30</div>
            <div className="stock-price-fav">32726.82</div>
          </div>
          <div className="second-part-fav">
            <div className="percent-change-fav negative">-0.26%</div>
            <div className="price-change-fav negative">-85.68</div>
          </div>
        </div> <div className='index_scrolling'>
          <div className="first-part-fav">
            <div className="symbol-fav">Dow Jones 30</div>
            <div className="stock-price-fav">32726.82</div>
          </div>
          <div className="second-part-fav">
            <div className="percent-change-fav negative">-0.26%</div>
            <div className="price-change-fav negative">-85.68</div>
          </div>
        </div>
      </div>

    </div>
     */
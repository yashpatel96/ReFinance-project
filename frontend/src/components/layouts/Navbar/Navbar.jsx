import React from 'react'; // 
import { Container, Grid, Button, Typography } from "@mui/material";
import './Navbar.css';
import LogoImg from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';
import Search from '../Search/Search';
import { useAuth } from '../../../firebase/AuthContext';
import ProfileAfterLogIn from './ProfileAfterLogIn';


const Navbar = () => {
  const { currentUser } = useAuth();

  return (
    <>
      <div className='navbar'>
        <Container>
          <Grid container spacing={1}>

            <Grid item xs={1} display="flex" justifyContent="center" alignItems="center">
              <div className='navbar-logo'>
                <NavLink end to="/" ><img src={LogoImg} alt="ReFinanced-Logo" /></NavLink>
              </div>
            </Grid>

            <Grid item xs={4.5} display="flex" justifyContent="center" alignItems="center">
              <div className='navbar-search'>
                <Search placeholder="Search..." />
              </div>
            </Grid>

            <Grid item xs={6.5} display="flex" justifyContent="right" alignItems="center">
              <div className='navbar-menu'>
                <ul className="nav-menu">
                  <li className="nav-item" ><NavLink end to="/" activeclassname="active" >Home</NavLink></li>
                  {currentUser ? <li className="nav-item" ><NavLink to="/favourites" activeclassname="active">Favourites</NavLink></li> : ""}
                  <li className="nav-item" ><NavLink to="/contact" activeclassname="active">Contact</NavLink></li>

                  {currentUser ? <li className="nav-item nav-login-page" ><ProfileAfterLogIn /></li>
                    : <li className="nav-item nav-login-page" ><NavLink to="/login" activeclassname="active">
                      <Button
                        fullWidth
                        variant="contained"
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
                          Log In
                        </Typography>
                      </Button></NavLink></li>}
                </ul>
              </div>
            </Grid>

          </Grid>
        </Container>
      </div>
    </>
  );
}

export default Navbar;
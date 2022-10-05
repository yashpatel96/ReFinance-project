import React from 'react'; // 
import { Container, Grid } from "@mui/material";
import './Navbar.css';
import LogoImg from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';
import Search from '../Search/Search';


const Navbar = () => {

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
                  <li className="nav-item" ><NavLink to="/favourites" activeclassname="active">Favourites</NavLink></li>
                  <li className="nav-item" ><NavLink to="/news" activeclassname="active">News</NavLink></li>
                  <li className="nav-item" ><NavLink to="/contact" activeclassname="active">Contact</NavLink></li>
                  <div className="nav-login">
                    <li className="nav-item nav-login-page" ><NavLink to="/login" activeclassname="active">Log In</NavLink></li>
                  </div>
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
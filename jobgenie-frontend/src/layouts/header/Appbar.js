import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import styled, { keyframes } from 'styled-components';
import { useNavigate, NavLink } from 'react-router-dom';


const Appbar = () => {
    const theme = useTheme(); 
    const activeStyle = {
        color: theme.palette.primary.main,
    };


    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const nav = useNavigate();

    const handleNavigate = (path) => () => {
        nav(path);
    };
  
    const handleAuthButtonClick = () => {
      setIsLoggedIn(!isLoggedIn); 
    };
  
    return (
      <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1, backgroundColor: theme.palette.primary.light, }}>
        <Toolbar sx={{
            marginLeft: 25,
            marginRight: 25,
            marginTop: 1.5,
            marginBottom: 1.5,
        }}>
          <img src="/Logo.png" alt="logo" style={{ marginRight: 10, height: 50 }} />
          <Typography variant="h4" noWrap component="div" sx={{ flexGrow: 1, fontWeight: 'bold', color: theme.palette.primary.main, marginLeft: 1 }}>
            Jobgenie
          </Typography>
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            <Button color="inherit" component={NavLink} to="/home"
            sx={{ 
                color: theme.palette.primary.grey, 
                fontWeight: 'bold', 
                marginRight: 2, 
                '&.active': activeStyle,
                '&:hover': { 
                    color: theme.palette.primary.main ,
                }
            }}>
                Home
            </Button>
            <Button color="inherit" component={NavLink} to="/jobs"
            sx={{ 
                color: theme.palette.primary.grey, 
                fontWeight: 'bold', 
                marginRight: 2, 
                '&.active': activeStyle,
                '&:hover': { 
                    color: theme.palette.primary.main ,
                }
            }}>
                Jobs
            </Button>
            <Button color="inherit" component={NavLink} to="/templates"
            sx={{ 
                color: theme.palette.primary.grey, 
                fontWeight: 'bold', 
                marginRight: 2, 
                '&.active': activeStyle,
                '&:hover': { 
                    color: theme.palette.primary.main ,
                }
                
            }}>
                Templates
            </Button>
            
            <GradientButton onClick={handleNavigate('/cv-builder')}>
                CV Builder
            </GradientButton>

          </Box>
          <Box sx={{ flexGrow: 0, display: 'flex' }}>
            <Button variant="contained" color="primary" onClick={() => handleAuthButtonClick('login')}
            sx={{ 
              marginRight: 1,
              width: '100px',
              height: '35px',
              marginLeft: 1,
               }}>
              Login
            </Button>
            <Button variant="outlined" color="primary" onClick={() => handleAuthButtonClick('signup')}
            sx={{ 
              width: '100px',
              height: '35px',
               }}
            >
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    );
  };

// Styled button component
const GradientButton = styled.button`
  background: linear-gradient(to right, #41B4E5 20%, #513DCE 60%);
  color: white;
  font-weight: bold;
  border-radius: 26px;
  border: 2px solid white;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 0.9rem;
  text-transform: uppercase;
  transition: all 0.5s ease;
  background-size: 200%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25); // Drop shadow added
  width: 120px;

  &:hover {
    background-position: right;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.35); // Enhanced shadow on hover for a dynamic effect
  }
`;

  
  export default Appbar;
  
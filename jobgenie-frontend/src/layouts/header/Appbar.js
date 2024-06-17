import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import { useNavigate, NavLink } from 'react-router-dom';
import Login from '../../components/container/ModalPopup/Login';
import Signup from '../../components/container/ModalPopup/Signup';
import { useAuthContext } from '../../context/authContext';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import AdbIcon from '@mui/icons-material/Adb';
import axios from 'axios';
import { endpoints } from '../../constants/endpoints';

const Appbar = () => {
  const { isAuthenticated, logout, username, accessToken } = useAuthContext();

  const theme = useTheme();
  const activeStyle = {
    color: theme.palette.primary.main,
  };

  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignupModal, setOpenSignupModal] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [profileImage, setProfileImage] = useState(null);

  const nav = useNavigate();

  const handleNavigate = (path) => () => {
    nav(path);
  };

  const handleLoginModal = () => {
    setOpenLoginModal(true);
  };

  const handleSignupModal = () => {
    setOpenSignupModal(true);
  };

  const closeModal = () => {
    setOpenLoginModal(false);
  };

  const closeSignupModal = () => {
    setOpenSignupModal(false);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleAccount = () => {
    nav('/account');
    handleCloseUserMenu();
  };

  const logoutUser = () => {
    logout();
    handleCloseUserMenu(); // Close the user menu on logout
    nav('/home');
  };

  useEffect(() => {
    const fetchProfileImage = async () => {
      if (isAuthenticated) {
        try {
          const response = await axios.get(endpoints.PROFILE_IMAGE, {
            headers: { Authorization: `Bearer ${accessToken}` },
            responseType: 'blob',
          });

          const imageUrl = URL.createObjectURL(response.data);
          setProfileImage(imageUrl);
        } catch (error) {
          console.error('Error fetching profile image:', error);
          if (error.response && error.response.status === 401) {
            logoutUser();
          }
        }
      }
    };

    fetchProfileImage();
  }, [isAuthenticated, accessToken]);

  return (
    <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1, backgroundColor: theme.palette.primary.light }}>
      <Toolbar sx={{ marginLeft: 25, marginRight: 25, marginTop: 1.5, marginBottom: 1.5 }}>
        <img src="/Logo.png" alt="logo" style={{ marginRight: 10, height: 50 }} />
        <Typography variant="h4" noWrap component="div" sx={{ flexGrow: 1, fontWeight: 'bold', color: theme.palette.primary.main, marginLeft: 1 }}>
          Jobgenie
        </Typography>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <Button
            color="inherit"
            component={NavLink}
            to="/home"
            sx={{
              color: theme.palette.primary.grey,
              fontWeight: 'bold',
              marginRight: 2,
              '&.active': activeStyle,
              '&:hover': { color: theme.palette.primary.main },
            }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={NavLink}
            to="/jobs"
            sx={{
              color: theme.palette.primary.grey,
              fontWeight: 'bold',
              marginRight: 2,
              '&.active': activeStyle,
              '&:hover': { color: theme.palette.primary.main },
            }}
          >
            Jobs
          </Button>
          <Button
            color="inherit"
            component={NavLink}
            to="/templates"
            sx={{
              color: theme.palette.primary.grey,
              fontWeight: 'bold',
              marginRight: 2,
              '&.active': activeStyle,
              '&:hover': { color: theme.palette.primary.main },
            }}
          >
            Templates
          </Button>
          <GradientButton onClick={handleNavigate('/sections')}>CV Builder</GradientButton>
        </Box>
        <Box sx={{ flexGrow: 0, display: 'flex' }}>
          {isAuthenticated ? (
            <>
              <Tooltip title="My Account">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={username} src={profileImage}/>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
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
                <MenuItem key='account' onClick={handleAccount}>
                  <Typography textAlign="center">Account</Typography>
                </MenuItem>
                <MenuItem key='logout' onClick={logoutUser}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </Menu>
            </>
          ) : (
            <>
              <Button variant="contained" color="primary" onClick={handleLoginModal} sx={{ marginRight: 1 }}>
                Login
              </Button>
              <Button
                variant="outlined"
                color="primary"
                onClick={handleSignupModal}
                sx={{
                  marginRight: 1,
                  width: '100px',
                  height: '35px',
                  marginLeft: 1,
                }}
              >
                Sign Up
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
      <Login openLoginModal={openLoginModal} closeModal={closeModal}></Login>
      <Signup openSignupModal={openSignupModal} closeSignupModal={closeSignupModal}></Signup>
    </AppBar>
  );
};

// Styled button component
const GradientButton = styled.button`
  background: linear-gradient(to right, #41b4e5 20%, #513dce 60%);
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

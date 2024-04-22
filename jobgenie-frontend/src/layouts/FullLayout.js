import React, { useState } from "react";
import { styled, Container, Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from "./header/Header";

const MainWrapper = styled('div')(() => ({
  display: 'flex',
  minHeight: '100vh',
  width: '100%',

}));

const PageWrapper = styled('div')(() => ({
  display: 'flex',
  flexGrow: 1,
  paddingBottom: '60px',
  flexDirection: 'column',
  zIndex: 1,
  backgroundColor: 'transparent',
  overflowY: 'auto', 
  
}));

const FullLayout = () => {
    return (
      <MainWrapper className='mainwrapper'>
        <Header />
        <PageWrapper className="page-wrapper">
          {/* Adjust Container to use full width */}
          <Container sx={{
            marginTop: '80px',
            maxWidth: '100vw !important', // Ensures Container spans the full width
            paddingLeft: 0, // Removes padding from the left
            paddingRight: 0, // Removes padding from the right
            
          }}>
            <Box sx={{ minHeight: 'calc(100vh - 170px)'}}>
              <Outlet />
            </Box>
          </Container>
        </PageWrapper>
      </MainWrapper>
    );
  };
  
  

export default FullLayout;

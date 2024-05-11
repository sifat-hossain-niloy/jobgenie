import React from 'react';
import { Container, Grid, Box, Typography, Button } from '@mui/material';
import Slogan from './Slogan';
import { NavLink } from 'react-router-dom';

const HeroSection = () => {
  return (
    <Container maxWidth="false" sx={{
      
      top: 90,
      left: 0,
      width: '100%',
      height: '524px',
      display: 'flex',
      alignItems: 'center', 
      justifyContent: 'center' 
    }}>
      <Grid container spacing={2} sx={{
        position: 'relative', 
        width: '1400px',
        height: '526px'
      }}>
        <Grid item xs={12} md={8} sx={{
          position: 'relative',  // Ensures the text position can be absolutely defined
          height: '100%',         // Takes full height of the container
          display: 'flex',        // Allows child components to be positioned flexibly
          flexDirection: 'column', // Stack children vertically
          justifyContent: 'flex-start' // Align children at the start of the column
        }}>
          <Slogan />
          <Typography sx={{
            position: 'absolute',
            width: '550px',
            height: '116px',
            left: '110px',
            top: '129px',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '48px',
            lineHeight: '58px',
            color: '#13287E'
          }}>
            Online CV Builder with Creative Templates
          </Typography>
          <Typography sx={{
            position: 'absolute',
            width: '568px',
            height: '71px',
            left: '110px',
            top: '283px',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '20px',
            lineHeight: '24px',
            color: '#888888'
          }}>
            Our Perfect resume builder takes the hassle out of resume writing. Choose from several templates and follow easy prompts to create the perfect job-ready resume effortlessly.
          </Typography>
          <Button variant="contained" sx={{
            position: 'absolute',
            height: '40px',
            left: '110px',
            top: '392px',
          }}
          component = {NavLink}
          to = "/templates"
          >
            View Templates
          </Button>
        </Grid>
        <Grid item xs={12} md={4}>
          <div style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center', 
            justifyContent: 'center' 
          }}>
            <img src="/images/hero_vector.png" alt="Hero Vector" style={{ maxWidth: '100%', maxHeight: '100%' }} />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HeroSection;

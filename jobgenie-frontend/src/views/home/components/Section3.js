import React from 'react';
import { Container, Grid, Box, Typography, Button, Stack } from '@mui/material';
import Slogan from './Slogan';
import Sec2Card from './Sec2Card'; // Assuming this is your custom card component
import Dots from '../../../components/Dots';
import { NavLink } from 'react-router-dom';
import CheckItem from './CheckItem';

const Section3 = () => {
  return (
    <>
    <Container maxWidth="false" sx={{
      top: 90,
      left: 0,
      width: '100%',
      height: '524px',
      display: 'flex',
      alignItems: 'center', 
      justifyContent: 'center', 
      overflow: 'hidden',
    }}>

      <Grid container spacing={2} sx={{
        position: 'relative', 
        width: '1400px',
        height: '526px',
        left: '110px',
        
      }}>
        <Grid item xs={12} md={6} sx={{
          position: 'relative',  // Ensures the text position can be absolutely defined
          height: '100%',         // Takes full height of the container
          display: 'flex',        // Allows child components to be positioned flexibly
          flexDirection: 'column', // Stack children vertically
          justifyContent: 'flex-start', // Align children at the start of the column
          marginLeft: '0px',      // Adds space to the left of the text
          top: '0px',              // Aligns the text to the center of the container
        }}>
          <Dots left='10px' top='50px'/>
          <Typography 
          sx={{
            position: 'absolute',
            width: '429px',
            height: '40px',
            left: '25px',
            top: '83px',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '32px',
            lineHeight: '39px',
            color: '#13287E',
          }}>
            We Deliver the Best
          </Typography>
          <Stack spacing={1.5} sx={{
            position: 'absolute',
            top: '155px', // Adjust top position to place below the Typography
            left: '25px',
            width: '100%'
            }}>
            <CheckItem text="Proven CV Templates to increase hiring chance" />
            <CheckItem text="Creative and Clean Templates Design" />
            <CheckItem text="Easy and Intuitive Online CV Builder" />
            <CheckItem text="Free to use. Developed by hiring professionals" />
            <CheckItem text="Fast Easy CV and Resume Formatting" />
            <CheckItem text="Recruiter Approved Phrases" />
            </Stack>  
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{
            position: 'absolute',
            width: '729px',
            height: '423px',
            left: '671px',
            top: '0px',
          }}>
            <img 
                src="/images/cvimg.png" 
                alt="Section 3" 
                style={{ 
                position: 'absolute',
                width: '411px',
                height: '409px',
                left: '159px',
                top: '7px',
                }}
            />            
          </Box>
        </Grid>
      </Grid>
    </Container>
    </>
  );
}

export default Section3;

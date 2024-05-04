import React from 'react';
import { Container, Grid, Box, Typography, Card } from '@mui/material';
import Dots from '../../../components/Dots';
import TemplateCard from './TemplateCard';

const Section4 = () => {
  return (
    <Container maxWidth='false' sx={{ 
        width: '100%',
        height: '925px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Box sx={{
        position: 'absolute',
        width: '100%',
        height: '925px',
        background: 'rgba(154, 161, 171, 0.18)',
      }}/>
      <Box sx={{
        position: 'relative',
        width: '1400px',
        height: '875px',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          marginTop: '20px', // Adjusted top margin for spacing
        }}>
          <Dots />
          <Typography sx={{
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '30px',
            lineHeight: '42px',
            textAlign: 'center',
            textTransform: 'capitalize',
            color: '#13287E',
            mt: 2, // Adjusted top margin for alignment
            fontWeight: 'bold',
          }}>
            Our Creative Templates
          </Typography>
          <Typography sx={{
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '32px',
            textAlign: 'center',
            color: '#888888',
            mt: 1, // Adjusted top margin for spacing
          }}>
            Choose from a wide range of creative templates to make your resume stand out
          </Typography>
        </div>

        <Grid container spacing={2} sx={{ width: '100%', justifyContent: 'center', mt: 3 }}> {/* Reduced marginTop to bring cards closer */}
          <Grid item sx={{ display: 'flex', justifyContent: 'center' }}>
            <TemplateCard image='template1.png'/>
            <TemplateCard image='template2.png'/>
            <TemplateCard image='template3.png'/>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Section4;

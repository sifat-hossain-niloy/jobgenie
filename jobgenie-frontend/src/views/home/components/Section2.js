import React from 'react';
import { Container, Grid, Box, Typography, Button } from '@mui/material';
import Slogan from './Slogan';
import Sec2Card from './Sec2Card'; // Assuming this is your custom card component
import Dots from '../../../components/Dots';
import { NavLink } from 'react-router-dom';

const Section2 = () => {
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
      <Box sx={{
        position: 'absolute',
        width: '755px',
        height: '621px',
        marginLeft: '-1800px',
        marginTop: '-71px',
        background: 'rgba(0, 62, 120, 0.06)',
        borderRadius: '50%',
      }}/>

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
          marginLeft: '-15px',      // Adds space to the left of the text
          top: '58px',              // Aligns the text to the center of the container
        }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Sec2Card 
              title="Easy Online Resume Builder" 
              subtitle="Create a stunning resume in minutes with our user-friendly interface and professional templates"
              image= 's2i1.png' />
            </Grid>
            <Grid item xs={12}>
              <Sec2Card 
              title="Step By Step Expert Tips" 
              subtitle="Gain insights from industry experts with our comprehensive guide to crafting your resume"
              image= 'd21.png' />
            </Grid>
            <Grid item xs={12}>
              <Sec2Card 
              title="Recruiter Approved Phrases" 
              subtitle="Use our pre-written phrases approved by experienced recruiters for higher chances among applicants"
              image= 'd31.png' />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{
            position: 'absolute',
            width: '729px',
            height: '526px',
            left: '671px',
            top: '0px',
          }}>
            <Dots left='25px' top='58px'/>
            <Typography 
              sx={{

                position: 'absolute',
                width: '440px',
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
                Why Choose Our Platform?
            </Typography>
            <Typography
                sx={{
                /*  */
                position: 'relative',
                width: '615px',
                height: '191px',
                left: '25px',
                top: '140px',
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '20px',
                lineHeight: '24px',
                color: '#888888',
                }}>
                    Our platform is designed to simplify your job search process. With intuitive tools and a wealth of resources at your disposal, we ensure that your resume will catch the eye of potential employers.
            </Typography>
            <Typography
                sx={{
                /*  */
                position: 'relative',
                width: '615px',
                height: '191px',
                left: '25px',
                top: '80px',
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '20px',
                lineHeight: '24px',
                color: '#888888',
                }}>
                    Our commitment to excellence means we’re always here to support you with tips, tricks, and guidance to advance your career. Let us help you land your dream job today!
            </Typography>
            <Button variant="contained" sx={{
                /* Get Started */
                position: 'absolute',
                width: '160px',
                height: '40px',
                left: '25px',
                top: '380px',
            }}
            component = {NavLink}
            to = "/cv-builder"
            >
                Get Started
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
    </>
  );
}

export default Section2;

import React from 'react';
import { Box, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Google } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{
      position: 'relative',
      width: '100%',
      height: '312px',
      bgcolor: '#191D3F', // Dark blue background
    }}>
      <Box sx={{
        position: 'absolute',
        width: '1400px',
        height: '312px',
        left: 'calc(50% - 1400px/2)',
        top: '0px',
      }}>
        {/* Column 1 */}
        <Box sx={{
          position: 'absolute',
          width: '286px',
          height: '312px',
          left: '0px',
          top: '0px',
        }}>
          {/* Logo Container */}
          <Box sx={{
            position: 'absolute',
            width: '248px',
            height: '52px',
            left: '10px',
            top: '69px',
          }}>
            {/* Logo Image */}
            <Box component="img" src="/Logo.png" alt="Logo" sx={{
              position: 'absolute',
              width: '55px',
              height: '52px',
              left: '0px',
              top: '0px',
            }} />
            {/* Logo Text */}
            <Typography sx={{
              position: 'absolute',
              width: '173px',
              height: '40px',
              left: '75px',
              top: '6px',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: '36px',
              lineHeight: '44px',
              color: '#1D88ED', // Bright blue color
            }}>
              JobGenie
            </Typography>
          </Box>
          {/* Copyright Text */}
          <Typography sx={{
            position: 'absolute',
            width: '260px',
            height: '30px',
            left: '10px',
            top: '137px',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 300,
            fontSize: '18px',
            lineHeight: '24px',
            color: '#FFFFFF', // White color
          }}>
            © 2024, All rights reserved
          </Typography>
            <Box sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            width: '100%',
            height: '100px',
            marginTop: '150px',

            }}>
            <FacebookIcon sx={{ fontSize: '40px', color: '#FFFFFF', mx: 1 }} />
            <TwitterIcon sx={{ fontSize: '40px', color: '#FFFFFF', mx: 1 }} />
            <LinkedInIcon sx={{ fontSize: '40px', color: '#FFFFFF', mx: 1 }} />
            <InstagramIcon sx={{ fontSize: '40px', color: '#FFFFFF', mx: 1 }} />
            <Google sx={{ fontSize: '40px', color: '#FFFFFF', mx: 1 }} />
            </Box>
        </Box>

        {/* Column 2 */}
        <Box sx={{
        position: 'absolute',
        width: '354px',
        height: '312px',
        left: '489px',
        top: '0px',
      }}>
        <Typography sx={{
          position: 'absolute',
          width: '134px',
          height: '29px',
          top: '76px',
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: 700,
          fontSize: '24px',
          lineHeight: '29px',
          color: '#FFFFFF',
        }}>
          Navigate
        </Typography>
        <Typography sx={{
          position: 'absolute',
          width: '354px',
          height: '18px',
          top: '122px',
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '19px',
          color: '#FFFFFF',
          cursor: 'pointer', 
          '&:hover': {
            textDecoration: 'underline', 
          }
        }}>
          Privacy Policy
        </Typography>
        <Typography sx={{
          position: 'absolute',
          width: '354px',
          height: '18px',
          top: '150px',
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '19px',
          color: '#FFFFFF',
          cursor: 'pointer',
          '&:hover': {
            textDecoration: 'underline',
          }
        }}>
          Terms of Service
        </Typography>
        <Typography sx={{
          position: 'absolute',
          width: '354px',
          height: '18px',
          top: '178px',
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '19px',
          color: '#FFFFFF',
          cursor: 'pointer',
          '&:hover': {
            textDecoration: 'underline',
          }
        }}>
          Technology Privacy
        </Typography>
      </Box>

      <Box sx={{
        position: 'absolute',
        width: '354px',
        height: '312px',
        left: '1046px',
        top: '0px',
      }}>
        <Typography sx={{
          position: 'absolute',
          width: '134px',
          height: '29px',
          top: '76px',
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: 700,
          fontSize: '24px',
          lineHeight: '29px',
          color: '#FFFFFF',
        }}>
          Contact Us
        </Typography>
        <Typography sx={{
          position: 'absolute',
          width: '354px',
          height: '107px',
          top: '122px',
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: 250,
          fontSize: '16px',
          lineHeight: '19px',
          color: '#FFFFFF',
        }}>
          123 Main Street <br/> Anytown, Anystate 12345 <br /> <br /> +880 1234 567890 <br /> contact@jobgenie.xyz
        </Typography>
      </Box>

      </Box>
    </Box>
  );
};

export default Footer;
